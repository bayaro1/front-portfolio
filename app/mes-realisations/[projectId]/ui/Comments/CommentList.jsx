import { getDateTimeString } from "@/app/lib/helpers/dateToString"
import { CommentListSkeleton } from "../skeletons/CommentListSkeleton";
import Image from "next/image";

export const CommentList = ({commentsHydra}) => {

    if(!commentsHydra) {
        return (
            <CommentListSkeleton />
        )
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
                <div className="comment-item-title">{comment.fullName}</div>
                {
                    comment.company && <div className="text-muted">{comment.company}</div>
                }
                <div className="chip">{getDateTimeString(comment.createdAt)}</div>
            </div>
            <div className="comment-item-body ugc-text">{comment.content}</div>
            {
                comment.answers.length > 0 && (
                    <div className="comment-item-answers-wrapper">
                        <h4 className="answers-title border-title">
                            <span>Réponses ({comment.answers.length})</span>
                        </h4>
                        <div className="comment-item-answers">
                            {
                                comment.answers.map(answer => <AnswerItem key={answer.id} answer={answer} />)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

const AnswerItem = ({answer}) => {
    return (
        <div className={'answer-item comment-item' + (answer.byAdmin ? ' by-admin': '')}>
            <div className="comment-item-header">
                {
                    answer.byAdmin ? (
                        <>
                            <Image
                                className="profile-img"
                                src="/profile/me.jpg"
                                alt="Photo Ibai"
                                width={30}
                                height={30}
                            />
                            <div className="comment-item-title">Ibai</div>
                        </>
                    ): (
                        <div className="comment-item-title">{answer.fullName}</div>
                    )
                }
                {
                    answer.company && <div className="text-muted">{answer.company}</div>
                }
                <div className="chip">{getDateTimeString(answer.createdAt)}</div>
            </div>
            <div className="comment-item-body ugc-text">{answer.content}</div>
        </div>
    )
}