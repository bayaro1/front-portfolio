import { SiteConfig } from "@/app/lib/SiteConfig"
import { apiPreparedFetch } from "@/app/lib/api"
import { useControlledFetch } from "@/app/lib/customHooks/fetch/useControlledFetch"
import { useOpenState } from "@/app/lib/customHooks/state/useOpenState"
import { getDateTimeString } from "@/app/lib/helpers/dateToString"
import { Modal } from "@/app/ui/container/Modal"
import { Loader } from "@/app/ui/icons/Loader"
import { useEffect } from "react"
import { AnswerForm } from "./AnswerForm"

export const AdminCommentTable = () => {

    const [fetchComments, comments, isLoading, error] = useControlledFetch(SiteConfig.API_URL + '/api/admin/comments/all');
    useEffect(() => {
        fetchComments();
    }, []);

    if(isLoading) {
        return <Loader additionalClass="admin-main-loader" />
    }

    return (
        <table className="admin-table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Sujet (réalisation)</th>
                    <th>Nom</th>
                    <th>Entreprise</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    comments && comments.map(comment => (
                        <AdminCommentItem key={comment.id} comment={comment} fetchComments={fetchComments} />
                    ))
                }
            </tbody>
        </table>
    )
}

const AdminCommentItem = ({comment, fetchComments}) => {

    const handleDelete = async () => {
        if(!confirm('Supprimer le commentaire de "'+comment.fullName+'" ?')) {
            return;
        }
        try {
            await apiPreparedFetch(SiteConfig.API_URL + '/api/admin/comments/'+comment.id, {}, 'DELETE');
        } catch(e) {
            if(!(e instanceof SyntaxError)) {
                // si ce n'est pas une erreur liée à une réponse vide 204
                console.error(e);
            }
        }
        fetchComments();
    }
    
    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    return (
        <>
            <tr>
                <td>{comment.id}</td>
                <td>{comment.project.title}</td>
                <td>{comment.fullName}</td>
                <td>{comment.company}</td>
                <td>{comment.content}</td>
                <td>{getDateTimeString(comment.createdAt)}</td>
                <td style={{width: '250px'}}>
                    <button type="button" className="admin-table-control" onClick={openForm}>Répondre</button>
                    <span> / </span>
                    <button type="button" className="admin-table-control" onClick={handleDelete}>Supprimer</button>
                </td>
                <Modal additionalClass="admin-form-modal" isOpen={formIsOpen}>
                    <AnswerForm comment={comment} close={closeForm} fetchComments={fetchComments} />
                </Modal>
            </tr>
            {
                comment.answers.length > 0 && (
                    comment.answers.map(answer => <AdminAnswerItem key={answer.id} answer={answer} fetchComments={fetchComments} />)
                )
            }
        </>
    )
}

const AdminAnswerItem = ({answer, fetchComments}) => {

    const handleDelete = async () => {
        if(!confirm('Supprimer la réponse de "'+answer.fullName+'" ?')) {
            return;
        }
        try {
            await apiPreparedFetch(SiteConfig.API_URL + '/api/admin/answers/'+answer.id, {}, 'DELETE');
        } catch(e) {
            if(!(e instanceof SyntaxError)) {
                // si ce n'est pas une erreur liée à une réponse vide 204
                console.error(e);
            }
        }
        fetchComments();
    }

    return (
        <tr className="admin-table-subline">
            <td>{answer.id}</td>
            <td></td>
            <td>{answer.byAdmin ? <strong className="table-admin-chip">Ibai</strong>: answer.fullName}</td>
            <td>{answer.company}</td>
            <td>{answer.content}</td>
            <td>{getDateTimeString(answer.createdAt)}</td>
            <td>
                <button type="button" className="admin-table-control" onClick={handleDelete}>Supprimer</button>
            </td>
        </tr>
    )
}