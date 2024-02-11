import { getMonthAndYear } from "@/app/lib/helpers/dateToString"

export const AdminSkillTable = ({skills, update, deleteSkill}) => {
    return (
        <table className="admin-table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nom</th>
                    <th>Depuis</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    skills['hydra:member'].map(skill => (
                        <AdminSkillItem 
                            key={skill.id} 
                            skill={skill}
                            update={update}
                            deleteSkill={deleteSkill}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

const AdminSkillItem = ({skill, update, deleteSkill}) => {

    const handleDelete = () => {
        if(confirm('Supprimer la compétence '+skill.name+' ?')) {
            deleteSkill(skill.id);
        }
    }

    return (
        <tr>
            <td>{skill.id}</td>
            <td>{skill.name}</td>
            <td>{getMonthAndYear(skill.learnedAt)}</td>
            <td>
                <button type="button" className="admin-table-control">Modifier</button>
                <span> / </span>
                <button type="button" className="admin-table-control" onClick={handleDelete}>Supprimer</button>
            </td>
        </tr>
    )
}