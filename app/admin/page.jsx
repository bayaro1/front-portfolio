'use client';
import { useEffect } from "react";
import { SiteConfig } from "../lib/SiteConfig"
import { Loader } from "../ui/icons/Loader";
import { useCRUD } from "./lib/useCRUD";
import { AdminProjectTable } from "./ui/AdminProjectTable";
import { AdminSkillTable } from "./ui/AdminSkillTable";

export default function Page() {

    const {
        items: projects, 
        fetchAll: fetchProjects,
        isLoading: projectLoading, 
        error: projectError, 
        deleteItem: deleteProject, 
        create: createProject, 
        update: updateProject,
    } = useCRUD(SiteConfig.API_URL + '/api/projects', true);
    const {
        items: skills, 
        fetchAll: fetchSkills,
        isLoading: skillLoading, 
        error: skillError, 
        deleteItem: deleteSkill, 
        create: createSkill, 
        update: updateSkill
    } = useCRUD(SiteConfig.API_URL + '/api/skills');

    useEffect(() => {
        fetchSkills({limit: 1000});
    }, []);

    return (
        <div className="admin-home">
            <div className="admin-home-block">
                <h2 className="admin-home-block-title">Réalisations</h2>
                <div className="admin-home-block-list project-list">
                    {
                        projectLoading && <Loader />
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
                        skillLoading && <Loader />
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
        </div>
    )
}