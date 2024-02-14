import { LocationIcon } from "@/app/ui/icons/LocationIcon"
import { MailIcon } from "@/app/ui/icons/MailIcon"
import { PhoneIcon } from "@/app/ui/icons/PhoneIcon"
import Image from "next/image"

export const ProfileFooter = () => {
    return (
        <div className="profile-footer-wrapper">
            <div className="profile-footer">
                <div>
                    <div className="footer-item i-text">
                        <Image 
                            className="profile-img" 
                            src="/profile/me.jpg" 
                            alt="Photo Ibai Arotçarena" 
                            width={60}
                            height={60}
                        />
                        <div className="footer-item-body">
                            <div>Ibai Arotçarena</div>
                            <div>35 ans</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="footer-item i-text">
                        <MailIcon />
                        <a href="mailto:arotcarena.ib@gmail.com">arotcarena.ib@gmail.com</a>
                    </div>
                    <div className="footer-item i-text">
                        <PhoneIcon />
                        <a href="tel:+33626717650">+33626717650</a>
                    </div>
                    <div className="footer-item i-text">
                        <LocationIcon />
                        <span>13330 Pélissanne</span>
                    </div>
                </div>
                <div>
                    <div className="footer-item i-text">
                        <Image
                            src="/icons/linkedin.png"
                            alt="Logo linkedin"
                            width={25}
                            height={25}
                        />
                        <a target="_blank" href="https://www.linkedin.com/in/ibai-arotçarena-247b35266" style={{fontSize: '.9em'}}>www.linkedin.com/in/ibai-arotçarena-247b35266</a>
                    </div>
                    <div className="footer-item i-text">
                        <Image
                            src="/icons/github.png"
                            alt="Logo linkedin"
                            width={25}
                            height={25}
                        />
                        <a target="_blank" href="https://github.com/bayaro1" style={{fontSize: '.9em'}}>github.com/bayaro1</a>
                    </div>
                </div>
            </div>
        </div>
    )
}