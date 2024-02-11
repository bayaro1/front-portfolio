import { getMonthAndYear } from "@/app/lib/helpers/dateToString";

export const AdminProjectTable = ({projects, update, deleteProject}) => {
    return (
        <table className="admin-table">
            <thead>
                <tr>
                    <th>#ID</th>
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

    return (
        <tr>
            <td>{project.id}</td>
            <td>{project.title}</td>
            <td>{getMonthAndYear(project.startedAt)}</td>
            <td>{getMonthAndYear(project.endAt)}</td>
            <td>
                <button type="button" className="admin-table-control">Modifier</button>
                <span> / </span>
                <button type="button" className="admin-table-control" onClick={handleDelete}>Supprimer</button>
            </td>
        </tr>
    )
}