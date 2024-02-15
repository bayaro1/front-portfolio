'use client';
import { useFetchQSearch } from "@/app/lib/customHooks/fetch/useFetchQSearch"
import { forwardRef, useEffect, useState } from "react"
import { CloseButton } from "@/app/ui/buttons/CloseButton";
import { SiteConfig } from "@/app/lib/SiteConfig";
import '@/app/ui/form/search/skillSearch.css';
import { Loader } from "@/app/ui/icons/Loader";
import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import { SearchIcon } from "../../icons/SearchIcon";
import { useOpenState } from "@/app/lib/customHooks/state/useOpenState";
import { defaultSkills } from "@/app/lib/defaultSkills";



export const SkillSearch = forwardRef(({}, headerRef) => {

    const [isOpen, open, close] = useOpenState(false);
    const [q, setQ] = useState('');
    const [skills, resetSkills, isLoading, error] = useFetchQSearch(SiteConfig.API_URL + '/api/skills', 'name', q);

    //si skills est un tableau vide on ferme
    useEffect(() => {
        if(skills) {
            if(skills.length === 0) {
                close();
            } else {
                open();
            }
        }
    }, [skills]); 

    const handleEmpty = () => {
        setQ('');
        resetSkills();
        close();
    }

    const handleChange = e => {
        setQ(e.target.value);
    }

    //pour éviter que le header se ferme au scroll si on est en train de faire une recherche
    useEffect(() => {
        if(headerRef.current) {
            if(q.length > 0 || isOpen) {
                headerRef.current.classList.add('force-open');
            } else {
                headerRef.current.classList.remove('force-open');
            }
        }
    }, [q, isOpen]);

    return (
        <div className="search-wrapper">
            <input 
                onChange={handleChange}
                onFocus={open}
                onBlur={handleEmpty}
                value={q} 
                className={'search-input' + (isOpen ? ' open': '')}
                placeholder="Rechercher une compétence" 
            />
            <SearchIcon />
            {
                (!isLoading && (isOpen || q.length > 0)) && (
                    <CloseButton aria-label="Vider le champ et fermer" title="Vider le champ et fermer" onClick={handleEmpty} />
                )
            }
            {
                isLoading && <Loader />
            }
            {
                isOpen && (
                    <div className="skill-list">
                        {
                            skills ? (
                                skills.map(skill => <SkillItem key={skill.id} skill={skill} />)

                            ): (
                                defaultSkills.map(skill => <SkillItem key={skill.id} skill={skill} />)

                            )
                        }
                    </div>
                )
            }
        </div>
    )
});

export const SkillItem = ({skill}) => {

    return (
        <div className="skill-list-item">
            <img 
                className="skill-list-item-img"
                width="25px"
                height="25px" 
                src={skill.logoPath} 
                alt={'Logo de ' + skill.name}
            />
            <div className="skill-list-item-body">
                <div className="skill-list-item-title">
                    {skill.name}
                </div>
                <div className="chip">
                    Depuis {getMonthAndYear(skill.learnedAt)}
                </div>
            </div>
        </div>
    )
}



SkillSearch.displayName = 'CustomSkillSearch';