import { Button } from "@/app/ui/buttons/Button";
import { TextField } from "@/app/ui/form/TextField";
import { TextareaField } from "@/app/ui/form/TextareaField";
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { PictureUploadField } from "../Form/PictureUploadField";
import { apiPreparedFetch } from "@/app/lib/api";
import { SiteConfig } from "@/app/lib/SiteConfig";





const schema = yup
  .object({
    title: yup.string().max(200, {message: '200 caractères maximum'}).required('Le titre est obligatoire'),
    type: yup.string().max(200, {message: '200 caractères maximum'}).required('Le type est obligatoire'),
    url: yup.string().max(200, {message: '200 caractères maximum'}),
    shortDescription: yup.string().max(250, {message: '250 caractères maximum'}).required('La description courte est obligatoire'),
    longDescription: yup.string().max(2000, {message: '2000 caractères maximum'}),
    startedAt: yup.string().max(200, 'Format incorrect (format attendu - Y:m:d H:i:s)').required('La date de début est obligatoire'),
    endAt: yup.string().max(200, 'Format incorrect (format attendu - Y:m:d H:i:s)'),
  })
  .required();


const defaultProject = {
    title: '',
    type: '',
    url: '',
    shortDescription: '',
    longDescription: '',
    startedAt: '',
    endAt: ''
};



export const ProjectForm = ({update, create, project, close}) => {

    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
        defaultValues: project ?? defaultProject,
        mode: 'onTouched',
        resolver: yupResolver(schema)
    });

    const [isLoading, setLoading] = useState(false);
    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        if(screenMobileErrors.length === 0 && screenDesktopErrors.length === 0) {
            const sendData = {
                ...formData,
                screenMobileBase64: screenMobile,
                screenDesktopBase64: screenDesktop
            };
            if(update && project.id) {
                await update(project.id, sendData);
            } else if(create) {
                await create(sendData);
            }
        }
        setLoading(false);
        close();
    }

    //pictures
    //screenMobile
    const [screenMobileErrors, setScreenMobileErrors] = useState([]);
    const [screenMobile, setScreenMobile] = useState(null);
    const handleChangeScreenMobile = newScreenMobile => {
        setScreenMobile(newScreenMobile);
    }
    //screenDesktop
    const [screenDesktopErrors, setScreenDesktopErrors] = useState([]);
    const [screenDesktop, setScreenDesktop] = useState(null);
    const handleChangeScreenDesktop = newScreenDesktop => {
        setScreenDesktop(newScreenDesktop);
    }

    //si on est dans update, on fetch la skill complète pour avoir skill.logoBase64
    const fetchFullProject = async () => {
        try {
            const fullProject = await apiPreparedFetch(SiteConfig.API_URL +'/api/admin/project/' + project.id);
            setValue('longDescription', fullProject.longDescription);
            setFullProject(fullProject);
        } catch(e) {
            console.error('Erreur dans le fetch du fullProject');
        }
    }
    const [fullProject, setFullProject] = useState(null);
    useEffect(() => {
        if(project) {
            fetchFullProject();
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form project-form">
            <div className="admin-login-title">Ajout d&apos;une réalisation</div>

            <TextField fieldName="title" control={control} error={errors.title?.message} maxLength={200}>
                Titre
            </TextField>

            <TextField fieldName="type" control={control} error={errors.type?.message} maxLength={200}>
                Type (ex: Site e-commerce, etc...)
            </TextField>

            <TextField fieldName="url" control={control} error={errors.url?.message} maxLength={200}>
                Url
            </TextField>

            <PictureUploadField 
                errors={screenMobileErrors}
                setErrors={setScreenMobileErrors}
                resizeWidth={500}
                resizeHeight={500}
                defaultBase64img={fullProject?.screenMobileBase64}
                onChange={handleChangeScreenMobile}
            >
                Screenshot Mobile
            </PictureUploadField>

            <PictureUploadField 
                errors={screenDesktopErrors}
                setErrors={setScreenDesktopErrors}
                resizeWidth={500}
                resizeHeight={500}
                defaultBase64img={fullProject?.screenDesktopBase64}
                onChange={handleChangeScreenDesktop}
            >
                Screenshot Desktop
            </PictureUploadField>
            

            <TextareaField fieldName="shortDescription" control={control} error={errors.shortDescription?.message} maxLength={250}>
                Description courte
            </TextareaField>

            <TextareaField fieldName="longDescription" control={control} error={errors.longDescription?.message} maxLength={2000}>
                Description longue (Html accepté)
            </TextareaField>


            <TextField fieldName="startedAt" control={control} error={errors.startedAt?.message} maxLength={200}>
                Date de début (format : Y:m:d H:i:s)
            </TextField>

            <TextField fieldName="endAt" control={control} error={errors.endAt?.message} maxLength={200}>
                Date de fin (format : Y:m:d H:i:s)
            </TextField>

            <div className="admin-submit-group dual">
                <Button type="submit" isLoading={isLoading}>Valider</Button>
                <Button additionalClass="secondary" onClick={close} disabled={isLoading}>Annuler</Button> 
            </div>
        </form>
    )
}