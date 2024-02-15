'use client';
import { SiteConfig } from "../lib/SiteConfig"
import { Loader } from "../ui/icons/Loader";
import { useCRUD } from "./lib/useCRUD";
import { AdminProjectTable } from "./ui/AdminProject/AdminProjectTable";
import { AdminSkillTable } from "./ui/AdminSkill/AdminSkillTable";
import { LoginBlock } from "./ui/LoginBlock";
import { SkillForm } from "./ui/AdminSkill/SkillForm";
import { Modal } from "../ui/container/Modal";
import { useOpenState } from "../lib/customHooks/state/useOpenState";
import { ProjectForm } from "./ui/AdminProject/ProjectForm";
import { AdminCommentTable } from "./ui/AdminComment/AdminCommentTable";

export default function Page() {

    const {
        items: projects, 
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
        true,
        {},
        true,
        true
    );
    const {
        items: skills, 
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
        true,
        {limit: 1000},
        true,
        true
    );


    return (
        <div className="admin-home">
            {
                projectError && projectError.message && <div className="admin-main-error">{projectError.message}</div>
            }
            {
                skillError && skillError.message && <div className="admin-main-error">{skillError.message}</div>
            }
            <LoginBlock />
            <div className="admin-home-block">
                <h2 className="admin-home-block-title">Réalisations</h2>
                <div className="admin-home-block-list project-list">
                    {
                        projectLoading && <Loader additionalClass="admin-main-loader" />
                    }
                    {
                        projects && projects.length > 0 && (
                            <AdminProjectTable 
                                projects={projects} 
                                update={updateProject} 
                                deleteProject={deleteProject} 
                            />
                        )
                    }
                </div>
                <AdminCreate create={createProject} type="project">Ajouter une réalisation</AdminCreate>
            </div>
            <div className="admin-home-block">
                <h2 className="admin-home-block-title">Compétences</h2>
                <div className="admin-home-block-list admin-table-skill-list">
                    {
                        skillLoading && <Loader additionalClass="admin-main-loader" />
                    }
                    {
                        skills && skills.length > 0 && (
                            <AdminSkillTable 
                                skills={skills} 
                                update={updateSkill} 
                                deleteSkill={deleteSkill} 
                            />
                        )
                    }
                </div>
                <AdminCreate create={createSkill} type="skill">Ajouter une compétence</AdminCreate>
            </div>
            <div className="admin-home-block">
                <h2 className="admin-home-block-title">Commentaires</h2>
                <div className="admin-home-block-list admin-table-skill-list">
                    <AdminCommentTable />
                </div>
            </div>
        </div>
    )
}


const AdminCreate = ({children, create, type}) => {

    const [formIsOpen, openForm, closeForm] = useOpenState()

    return (
        <>
            <div className="admin-home-block-footer">
                <button type="button" className="button" onClick={openForm}>
                    {children}
                </button>
            </div>
            <Modal additionalClass="admin-form-modal" isOpen={formIsOpen}>
                {
                    type === 'project' && <ProjectForm create={create} close={closeForm} />
                }
                {
                    type === 'skill' && <SkillForm create={create} close={closeForm} />
                }
            </Modal>
        </>
    )
}