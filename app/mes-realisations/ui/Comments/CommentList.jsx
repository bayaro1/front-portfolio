import { getDateTimeString } from "@/app/lib/helpers/dateToString"
import { Loader } from "@/app/ui/icons/Loader"

export const CommentList = ({commentsHydra}) => {

    if(!commentsHydra) {
        return <Loader />
    }

    const comments = commentsHydra['hydra:member'] ?? [];

    return (
        <>
            <h3 className="comments-title big border-title">
                <span>Commentaires ({comments.length})</span>
            </h3>
            <div className="comment-list">
                {comments.map(comment => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
        </>
    )
}


const CommentItem = ({comment}) => {

    return (
        <div className="comment-item">
            <div className="comment-item-header">
                <div>{comment.fullName}</div>
                {
                    comment.company && <div className="text-muted">{comment.company}</div>
                }
                <div className="chip">{getDateTimeString(comment.createdAt)}</div>
            </div>
            
            <div className="comment-item-body">{comment.content}</div>
        </div>
    )
}