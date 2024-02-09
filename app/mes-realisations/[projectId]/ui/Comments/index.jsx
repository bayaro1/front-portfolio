'use client';
import { apiPreparedFetch } from "@/app/lib/api";
import { CommentForm } from "./CommentForm"
import { CommentList } from "./CommentList"
import { SiteConfig } from "@/app/lib/SiteConfig";
import { useEffect, useState } from "react";
import { useControlledHydraFetch } from "@/app/lib/customHooks/fetch/useControlledHydraFetch";
import './index.css';

export const Comments = ({projectIri}) => {

    //comment list
    const [doFetch, commentsHydra, isLoading, error] = useControlledHydraFetch(SiteConfig.API_URL + '/api/comments?project='+projectIri + '&page=1&itemsPerPage=30');
    useEffect(() => {
        doFetch();
    }, []);


    //create comment
    const [isSubmitting, setSubmitting] = useState(false);
    const handleCreate = async formData => {
        if(isSubmitting) {
            return;
        }
        setSubmitting(true);
        try {
            await apiPreparedFetch(SiteConfig.API_URL + '/api/comments', {
                ...formData,
                project: projectIri
            },'POST');
            await doFetch();
        } catch(e) {
            console.error(e);
        }
        setSubmitting(false);
    }

    return (
        <div className="comments-block">
            <CommentForm create={handleCreate} isSubmitting={isSubmitting} />
            <CommentList commentsHydra={commentsHydra} />
        </div>
    )
}