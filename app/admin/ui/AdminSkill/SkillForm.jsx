import { Button } from "@/app/ui/buttons/Button";
import { TextField } from "@/app/ui/form/TextField";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup"


const schema = yup
  .object({
    name: yup.string().required('Le nom de la compétence est obligatoire'),
    learnedAt: yup.string().required('La date d\'acquisition de la compétence est obligatoire'),
    category: yup.string().required('La catégorie est obligatoire')
  })
  .required();



export const SkillForm = ({update, create, skill, close}) => {

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: skill ?? {
            name: '',
            learnedAt: ''
        },
        mode: 'onTouched',
        resolver: yupResolver(schema)
    });

    const [isLoading, setLoading] = useState(false);
    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        if(update && skill.id) {
            await update(skill.id, formData);
        } else if(create) {
            await create(formData);
        }
        setLoading(false);
        close();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
            <div className="admin-login-title">Ajout d'une compétence</div>

            <TextField fieldName="name" control={control} error={errors.name?.message} maxLength={200}>
                Nom de la compétence
            </TextField>
            <TextField fieldName="learnedAt" control={control} error={errors.learnedAt?.message} maxLength={200}>
                Date d'acquisition (format : Y:m:d H:i:s)
            </TextField>

            <div className="form-group">
                <label htmlFor="category" className="form-label">Catégorie</label>
                <select className="form-control" id="category" {...register('category')}>
                    <option value="skill.cat_framework">Framework</option>
                    <option value="skill.cat_languages">Langages</option>
                    <option value="skill.cat_utils">Autres outils</option>
                </select>
            </div>

            <div className="admin-submit-group dual">
                <Button type="submit" isLoading={isLoading}>Valider</Button>
                <Button additionalClass="secondary" onClick={close}>Annuler</Button> 
            </div>
        </form>
    )
}