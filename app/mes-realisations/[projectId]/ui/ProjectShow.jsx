'use client';

import { getMonthAndYear } from "@/app/lib/helpers/dateToString"
import { Comments } from "./Comments"
import { ShowImgSelector } from "./PicturesShow/ShowImgSelector"
import { ShowCarousel } from "./PicturesShow/ShowCarousel"
import './PicturesShow/productShowImg.css';
import { LeaveIcon } from "@/app/ui/icons/LeaveIcon";

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
        <div className="project-show">
            <div className="project-show-left-col">
                <ShowCarousel pictures={pictures} />
                <ShowImgSelector pictures={pictures} />
            </div>
            <div className="project-show-right-col">
                <div className="project-show-title">{project.title}</div>
                <div className="chip">
                    {getMonthAndYear(project.startedAt)} - {getMonthAndYear(project.endAt)}
                </div>
                <div className="project-show-text big">
                    {project.shortDescription}
                </div>
                <div className="project-show-text html-text" dangerouslySetInnerHTML={{__html: project.longDescription}}>
                </div>
                <div className="external-link-wrapper">
                    <a href={project.url} target="_blank" className="external-link i-text">
                        <LeaveIcon />
                        <span>Voir le site</span>
                    </a>
                </div>
                {
                    <Comments projectIri={project['@id']} />
                }
            </div>
        </div>
    )
}