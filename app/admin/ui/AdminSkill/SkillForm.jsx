import { Button } from "@/app/ui/buttons/Button";
import { TextField } from "@/app/ui/form/TextField";
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { PictureUploadField } from "../Form/PictureUploadField";
import { apiPreparedFetch } from "@/app/lib/api";
import { SiteConfig } from "@/app/lib/SiteConfig";


const schema = yup
  .object({
    name: yup.string().required('Le nom de la compétence est obligatoire').max(200, {message: '200 caractères maximum'}),
    learnedAt: yup.string().required('La date d\'acquisition de la compétence est obligatoire').max(200, 'Format incorrect (format attendu - Y:m:d H:i:s)'),
    category: yup.string().required('La catégorie est obligatoire').test('custom-validation', 'Veuillez choisir parmis les options proposées', (value) => {
        return ['skill.cat_frameworks', 'skill.cat_languages', 'skill.cat_utils'].includes(value);
    }),
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
        //validation custom du logo
        if(logoErrors.length === 0) {
            const sendData = {
                ...formData,
                logoBase64: logo
            };
            if(update && skill.id) {
                await update(skill.id, sendData);
            } else if(create) {
                await create(sendData);
            }
        }
        setLoading(false);
        close();
    }

    //logo
    const [logoErrors, setLogoErrors] = useState([]);
    const [logo, setLogo] = useState(null);
    const handleChangeLogo = newLogo => {
        setLogo(newLogo);
    }

    //si on est dans update, on fetch la skill complète pour avoir skill.logoBase64
    const fetchFullSkill = async () => {
        try {
            const fullSkill = await apiPreparedFetch(SiteConfig.API_URL + '/api/admin/skills/' + skill.id);
            setFullSkill(fullSkill);
        } catch(e) {
            console.error('Erreur dans le fetch de la fullSkill');
        }
    }
    const [fullSkill, setFullSkill] = useState(null);
    useEffect(() => {
        if(skill) {
            fetchFullSkill();
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
            <div className="admin-login-title">Ajout d&apos;une compétence</div>

            <TextField fieldName="name" control={control} error={errors.name?.message} maxLength={200}>
                Nom de la compétence
            </TextField>
            <TextField fieldName="learnedAt" control={control} error={errors.learnedAt?.message} maxLength={200}>
                Date d&apos;acquisition (format : Y:m:d H:i:s)
            </TextField>

            <div className="form-group">
                <label htmlFor="category" className="form-label">Catégorie</label>
                <select className="form-control" id="category" {...register('category')}>
                    <option value="skill.cat_frameworks">Framework</option>
                    <option value="skill.cat_languages">Langages</option>
                    <option value="skill.cat_utils">Autres outils</option>
                </select>
            </div>

            <PictureUploadField 
                errors={logoErrors}
                setErrors={setLogoErrors}
                resizeWidth={40}
                resizeHeight={40}
                defaultBase64img={fullSkill?.logoBase64}
                onChange={handleChangeLogo}
                acceptedFormats={['png']}
                outputFormat="png"
            >
                Logo
            </PictureUploadField>

            <div className="admin-submit-group dual">
                <Button type="submit" isLoading={isLoading}>Valider</Button>
                <Button additionalClass="secondary" onClick={close} disabled={isLoading}>Annuler</Button> 
            </div>
        </form>
    )
}