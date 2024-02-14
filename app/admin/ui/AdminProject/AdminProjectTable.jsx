import { useOpenState } from "@/app/lib/customHooks/state/useOpenState";
import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import { Modal } from "@/app/ui/container/Modal";
import { ProjectForm } from "./ProjectForm";

export const AdminProjectTable = ({projects, update, deleteProject}) => {
    return (
        <table className="admin-table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Screenshot</th>
                    <th>Titre</th>
                    <th>Début</th>
                    <th>Fin</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    projects.map(project => (
                        <AdminProjectItem 
                            key={project.id} 
                            project={project}
                            update={update}
                            deleteProject={deleteProject}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

const AdminProjectItem = ({project, update, deleteProject}) => {

    const handleDelete = () => {
        if(confirm('Supprimer le projet '+project.title+' ?')) {
            deleteProject(project.id);
        }
    }

    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    return (
        <tr>
            <td>{project.id}</td>
            <td>
                <img width="90px" height="90px" style={{margin: '0 auto'}} src={project.screenDesktopPath} alt="Screenshot desktop" />
            </td>
            <td>{project.title}</td>
            <td>{getMonthAndYear(project.startedAt)}</td>
            <td>{getMonthAndYear(project.endAt)}</td>
            <td style={{width: '250px'}}>
                <button type="button" className="admin-table-control" onClick={openForm}>Modifier</button>
                <span> / </span>
                <button type="button" className="admin-table-control" onClick={handleDelete}>Supprimer</button>
            </td>
            <Modal additionalClass="admin-form-modal" isOpen={formIsOpen}>
                <ProjectForm update={update} project={project} close={closeForm} />
            </Modal> 
        </tr>
    )
}