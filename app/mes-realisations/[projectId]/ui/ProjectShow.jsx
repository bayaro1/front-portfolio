import { SiteConfig } from "@/app/lib/SiteConfig"
import { getMonthAndYear } from "@/app/lib/helpers/dateToString"
import { Comments } from "./Comments"
import { ShowImgSelector } from "./PicturesShow/ShowImgSelector"
import { ShowCarousel } from "./PicturesShow/ShowCarousel"
import './PicturesShow/productShowImg.css';

export const ProjectShow = ({project}) => {

    const pictures = [
        {
            id: 1,
            src: project.screenMobilePath,
            srcSmall: project.screenMobilePath,
            alt: 'Capture d\'écran de ' + project.title
        },
        {
            id: 2,
            src: project.screenDesktopPath,
            srcSmall: project.screenDesktopPath,
            alt: 'Capture d\'écran de ' + project.title
        }
    ];

    return (
        <div className="project-item project-show-item">
            <div className="project-item-header">
                <div className="chip project-item-date-chip">
                    {getMonthAndYear(project.startedAt)} - {getMonthAndYear(project.endAt)}
                </div>
                
            </div>
            <ShowCarousel pictures={pictures} />
            <div className="show-row">
                <ShowImgSelector pictures={pictures} />
                <div className="project-item-body">
                    <p className="project-item-text project-item-short-description">
                        {project.shortDescription}
                    </p>
                    <div className="project-item-text">
                        <a href={project.url} target="_blank" className="base-link">
                            {project.url}
                        </a>
                    </div>
                    <p className="project-item-text">
                        {project.longDescription}
                    </p>
                    {
                        <Comments projectIri={project['@id']} />
                    }
                </div>
               
            </div>
            
            
        </div>
    )
}