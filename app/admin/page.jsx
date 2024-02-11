'use client';
import { useEffect } from "react";
import { SiteConfig } from "../lib/SiteConfig"
import { Loader } from "../ui/icons/Loader";
import { useCRUD } from "./lib/useCRUD";
import { AdminProjectTable } from "./ui/AdminProjectTable";
import { AdminSkillTable } from "./ui/AdminSkillTable";
import { LoginBlock } from "./ui/LoginBlock";

export default function Page() {

    const {
        items: projects, 
        fetchAll: fetchProjects,
        isLoading: projectLoading, 
        error: projectError, 
        deleteItem: deleteProject, 
        create: createProject, 
        update: updateProject,
    } = useCRUD(
        SiteConfig.API_URL + '/api/projects', 
        SiteConfig.API_URL + '/api/admin/project',
        SiteConfig.API_URL + '/api/admin/project',
        SiteConfig.API_URL + '/api/admin/project',
        true
    );
    const {
        items: skills, 
        fetchAll: fetchSkills,
        isLoading: skillLoading, 
        error: skillError, 
        deleteItem: deleteSkill, 
        create: createSkill, 
        update: updateSkill
    } = useCRUD(
        SiteConfig.API_URL + '/api/skills',
        SiteConfig.API_URL + '/api/admin/skills',
        SiteConfig.API_URL + '/api/admin/skills',
        SiteConfig.API_URL + '/api/admin/skills',
        false
    );

    useEffect(() => {
        fetchSkills({limit: 1000});
    }, []);

    return (
        <div className="admin-home">
            {
                projectError && projectError.message && <div className="admin-main-error">{projectError.message}</div>
            }
            {
                skillError && skillError.message && <div className="admin-main-error">{skillError.message}</div>
            }
            <div className="admin-home-block">
                <h2 className="admin-home-block-title">Réalisations</h2>
                <div className="admin-home-block-list project-list">
                    {
                        projectLoading && <Loader additionalClass="admin-main-loader" />
                    }
                    {
                        projects && projects['hydra:member'] && (
                            <AdminProjectTable 
                                projects={projects} 
                                update={updateProject} 
                                deleteProject={deleteProject} 
                            />
                        )
                    }
                </div>
                <div className="admin-home-block-footer">
                    <button type="button" className="button">
                        Ajouter un projet
                    </button>
                </div>
            </div>
            <div className="admin-home-block">
                <h2 className="admin-home-block-title">Compétences</h2>
                <div className="admin-home-block-list admin-table-skill-list">
                    {
                        skillLoading && <Loader additionalClass="admin-main-loader" />
                    }
                    {
                        skills && skills['hydra:member'] && (
                            <AdminSkillTable 
                                skills={skills} 
                                update={updateSkill} 
                                deleteSkill={deleteSkill} 
                            />
                        )
                    }
                </div>
                <div className="admin-home-block-footer">
                    <button type="button" className="button">
                        Ajouter une compétence
                    </button>
                </div>
            </div>
            <LoginBlock />
        </div>
    )
}