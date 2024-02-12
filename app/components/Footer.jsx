'use client';
import Image from "next/image"
import { MailIcon } from "@/app/ui/icons/MailIcon"
import { PhoneIcon } from "@/app/ui/icons/PhoneIcon"
import { LocationIcon } from "@/app/ui/icons/LocationIcon"
import '@/app/components/footer.css';
import { useFetch } from "../lib/customHooks/fetch/useFetch";
import { SiteConfig } from "../lib/SiteConfig";
import { useEffect, useState } from "react";
import { SkillItem } from "../ui/form/search/SkillSearch";

export const Footer = () => {

    const [skills, count, isLoading, errors, reset] = useFetch(SiteConfig.API_URL + '/api/skills?limit=1000');

    const [distinctSkills, setDistinctSkills] = useState(null);

    useEffect(() => {
        if(skills) {
            let frameworkSkills = [];
            let languageSkills = [];
            let utilSkills = [];
            for(const skill of skills)
            {
                switch(skill.category) {
                    case 'skill.cat_frameworks':
                        frameworkSkills.push(skill);
                        break;
                    case 'skill.cat_languages':
                        languageSkills.push(skill);
                        break;
                    case 'skill.cat_utils':
                        utilSkills.push(skill);
                        break;
                    default:
                        break;
                }
            }
            setDistinctSkills({
                frameworks: frameworkSkills,
                languages: languageSkills,
                utils: utilSkills
            });
        }
    }, [skills]);
    

    return (
        <footer className="footer main-footer">
            <div className="footer-block main">
                <div className="footer-block-part">
                    <h3 className="footer-block-part-title">Frameworks</h3>
                    <div className="footer-block-part-list">
                        {
                            distinctSkills && distinctSkills.frameworks.map(skill => (
                                <SkillItem key={skill.id} skill={skill} />
                            ))
                        }
                    </div>
                </div>
                <div className="footer-block-part">
                    <h3 className="footer-block-part-title">Langages</h3>
                    <div className="footer-block-part-list">
                        {
                            distinctSkills && distinctSkills.languages.map(skill => (
                                <SkillItem key={skill.id} skill={skill} />
                            ))
                        }
                    </div>
                </div>
                <div className="footer-block-part">
                    <h3 className="footer-block-part-title">Autres outils</h3>
                    <div className="footer-block-part-list">
                        {
                            distinctSkills && distinctSkills.utils.map(skill => (
                                <SkillItem key={skill.id} skill={skill} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <ProfileFooter />
        </footer>
    )
}


export const ProfileFooter = () => {
    return (
        <div className="footer-block">
            <div>
                <div className="footer-item i-text">
                    <Image 
                        className="profile-img" 
                        src="/profile/me.jpg" 
                        alt="Photo Ibai Arotçarena" 
                        width={60}
                        height={60}
                    />
                    <div className="footer-item-body">
                        <div>Ibai Arotçarena</div>
                        <div>35 ans</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="footer-item i-text">
                    <MailIcon />
                    <a href="mailto:arotcarena.ib@gmail.com">arotcarena.ib@gmail.com</a>
                </div>
                <div className="footer-item i-text">
                    <PhoneIcon />
                    <a href="tel:+33626717650">+33626717650</a>
                </div>
                <div className="footer-item i-text">
                    <LocationIcon />
                    <span>13330 Pélissanne</span>
                </div>
            </div>
            <div>
                <div className="footer-item i-text">
                    <Image
                        src="/icons/linkedin.png"
                        alt="Logo linkedin"
                        width={25}
                        height={25}
                    />
                    <a target="_blank" href="https://www.linkedin.com/in/ibai-arotçarena-247b35266" style={{fontSize: '.9em'}}>www.linkedin.com/in/ibai-arotçarena-247b35266</a>
                </div>
                <div className="footer-item i-text">
                    <Image
                        src="/icons/github.png"
                        alt="Logo linkedin"
                        width={25}
                        height={25}
                    />
                    <a target="_blank" href="https://github.com/bayaro1" style={{fontSize: '.9em'}}>github.com/bayaro1</a>
                </div>
            </div>
        </div>
    )
}