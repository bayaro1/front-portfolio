'use client';
import { useFetchQSearch } from "@/app/lib/customHooks/fetch/useFetchQSearch"
import { useState } from "react"
import { CloseButton } from "@/app/ui/buttons/CloseButton";
import { SiteConfig } from "@/app/lib/SiteConfig";
import '@/app/ui/form/search/skillSearch.css';
import { Loader } from "@/app/ui/icons/Loader";
import Image from "next/image";

export const SkillSearch = () => {

    const [q, setQ] = useState('');
    const [skills, resetSkills, isLoading, error] = useFetchQSearch(SiteConfig.API_URL + '/api/skills', 'name', q);

    const handleEmpty = () => {
        setQ('');
        resetSkills();
    }

    const handleChange = e => {
        setQ(e.target.value);
    }

    return (
        <div className="search-wrapper">
            <input 
                onChange={handleChange}
                value={q} 
                className="search-input"
                placeholder="Rechercher une compétence" 
            />
            {
                (!isLoading && q.length > 0) && (
                    <CloseButton aria-label="Vider le champ" title="Vider le champ" onClick={handleEmpty} />
                )
            }
            {
                isLoading && <Loader />
            }
            {
                skills && skills.length > 0 && (
                    <div className="skill-list">
                        {
                            skills.map(skill => <SkillItem key={skill.id} skill={skill} />)
                        }
                    </div>
                )
            }
        </div>
    )
}

const SkillItem = ({skill}) => {

    const parts = skill.learnedAt.split('-');
    const learnedAt = parts[1] + '/' + parts[0];

    return (
        <div className="skill-list-item">
            <img 
                className="skill-list-item-img"
                width="35px"
                height="35px" 
                src={SiteConfig.API_URL + skill.logoPath} 
                alt={'Logo de ' + skill.name}
            />
            <div className="skill-list-item-body">
                <div className="skill-list-item-title">
                    {skill.name}
                </div>
                <div className="skill-list-item-text text-muted">
                    Depuis {learnedAt}
                </div>
            </div>
        </div>
    )
}