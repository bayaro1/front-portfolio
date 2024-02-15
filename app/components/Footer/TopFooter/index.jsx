
import { SiteConfig } from "../../../lib/SiteConfig";
import { SkillItem } from "../../../ui/form/search/SkillSearch";
import { apiFetch } from "../../../lib/api";

export const TopFooter = async () => {

    const skillsHydra = await apiFetch(SiteConfig.API_URL + '/api/skills?limit=1000', {
        next: {revalidate: 3600}
    });

    let frameworkSkills = [];
    let languageSkills = [];
    let utilSkills = [];
    for(const skill of skillsHydra['hydra:member'])
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

    return (
        <div className="top-footer-wrapper">
            <div className="top-footer">
                <div className="footer-block-part">
                    <h3 className="footer-block-part-title">Frameworks</h3>
                    <div className="footer-block-part-list">
                        {
                            frameworkSkills.map(skill => (
                                <SkillItem key={skill.id} skill={skill} />
                            ))
                        }
                    </div>
                </div>
                <div className="footer-block-part">
                    <h3 className="footer-block-part-title">Langages</h3>
                    <div className="footer-block-part-list">
                        {
                            languageSkills.map(skill => (
                                <SkillItem key={skill.id} skill={skill} />
                            ))
                        }
                    </div>
                </div>
                <div className="footer-block-part">
                    <h3 className="footer-block-part-title">Autres outils</h3>
                    <div className="footer-block-part-list">
                        {
                            utilSkills.map(skill => (
                                <SkillItem key={skill.id} skill={skill} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
