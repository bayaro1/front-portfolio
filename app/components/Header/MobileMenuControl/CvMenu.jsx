import Image from "next/image"

export const CvMenu = () => {
    return (
        <div>
            <div className="expandable-menu-item cv-menu-item">
                <a target="_blank" href="/profile/cv.pdf">
                    <Image
                        className="cv-img"
                        src="/profile/cv_screen.jpg"
                        alt="CV Ibai Arotçarena"
                        width={100}
                        height={150}
                    />
                </a>
                <a className="base-link" target="_blank" href="/profile/cv.pdf">Voir le CV</a>
            </div>
        </div>
    )
}