import { useOpenState } from "@/app/lib/customHooks/state/useOpenState"
import { getMonthAndYear } from "@/app/lib/helpers/dateToString"
import { Modal } from "@/app/ui/container/Modal"

export const AdminCommentTable = () => {

    

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
                    // comments.map(comment => (
                    //     <AdminCommentItem key={comment.id} comment={comment} />
                    // ))
                }
            </tbody>
        </table>
    )
}

const AdminCommentItem = ({comment}) => {

    // const handleDelete = () => {
    //     if(confirm('Supprimer la compétence '+skill.name+' ?')) {
    //         deleteSkill(skill.id);
    //     }
    // }
    
    // const [formIsOpen, openForm, closeForm] = useOpenState(false);

    // return (
    //     <tr>
    //         <td>{skill.id}</td>
    //         <td>{skill.name}</td>
    //         <td>{getMonthAndYear(skill.learnedAt)}</td>
    //         <td>
    //             <button type="button" className="admin-table-control" onClick={openForm}>Modifier</button>
    //             <span> / </span>
    //             <button type="button" className="admin-table-control" onClick={handleDelete}>Supprimer</button>
    //         </td>
    //         <Modal additionalClass="admin-form-modal" isOpen={formIsOpen}>
    //             <SkillForm update={update} skill={skill} close={closeForm} />
    //         </Modal>
    //     </tr>
    // )
}