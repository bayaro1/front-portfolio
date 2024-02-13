import { Button } from "@/app/ui/buttons/Button";
import { TextField } from "@/app/ui/form/TextField";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { apiPreparedFetch } from "@/app/lib/api";
import { SiteConfig } from "@/app/lib/SiteConfig";
import { TextareaField } from "@/app/ui/form/TextareaField";


const schema = yup
  .object({
    fullName: yup.string().max(200, {message: '200 caractères maximum'}),
    company: yup.string().max(200, {message: '200 caractères maximum'}),
    content: yup.string().required('Le message est obligatoire').max(2000, {message: '2000 caractères maximum'}),
  })
  .required();

const defaultAnswer = {
    fullName: '',
    company: '',
    content: '',
};

export const AnswerForm = ({comment, close, fetchComments}) => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: defaultAnswer,
        mode: 'onTouched',
        resolver: yupResolver(schema)
    });

    const [isLoading, setLoading] = useState(false);
    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        try {
            await apiPreparedFetch(SiteConfig.API_URL + '/api/admin/answers?commentId='+comment.id, formData, 'POST');
            fetchComments();
        } catch(e) {
            console.error(e);
        }
        setLoading(false);
        close();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
            <div className="admin-login-title">Répondre au commentaire de &quot;{comment.fullName}&quot; à propos de &quot;{comment.project.title}&quot;</div>

            <TextField fieldName="fullName" control={control} error={errors.fullName?.message} maxLength={200}>
                Nom
            </TextField>
            <TextField fieldName="company" control={control} error={errors.company?.message} maxLength={200}>
                Entreprise
            </TextField>
            <TextareaField fieldName="content" control={control} error={errors.content?.message} maxLength={2000}>
                Message
            </TextareaField>

            <div className="admin-submit-group dual">
                <Button type="submit" isLoading={isLoading}>Valider</Button>
                <Button additionalClass="secondary" onClick={close} disabled={isLoading}>Annuler</Button> 
            </div>
        </form>
    )
}