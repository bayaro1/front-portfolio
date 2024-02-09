'use client';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { TextField } from "@/app/ui/form/TextField";
import { Button } from "@/app/ui/buttons/Button";
import { TextareaField } from "@/app/ui/form/TextareaField";

const schema = yup
  .object({
    fullName: yup.string().max(200, '200 caractères maximum').required('Veuillez entrer votre nom'),
    company: yup.string().max(200, '200 caractères maximum'),
    content: yup.string().max(2000, '2000 caractères maximum').required('Veuillez écrire un message')
  })
  .required()
;


export const CommentForm = ({create, isSubmitting}) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
            fullName: '',
            company: '',
            content: ''
        },
        resolver: yupResolver(schema),
        mode: 'onTouched'
    });

    return (
        <form onSubmit={handleSubmit(create)} className="comment-form">
            <h3 className="comments-title">Laisser un commentaire</h3>
            <TextField fieldName="fullName" control={control} error={errors.fullName?.message} maxLength={200}>
                Nom
            </TextField>
            <TextField fieldName="company" control={control} error={errors.company?.message} maxLength={200}>
                Entreprise
            </TextField>
            <TextareaField fieldName="content" control={control} error={errors.content?.message} maxLength={2000}>
                Message
            </TextareaField>
            <div className="form-group submit-group">
                <Button type="submit" isLoading={isSubmitting}>
                    Valider
                </Button>
            </div>
        </form>
    )
}