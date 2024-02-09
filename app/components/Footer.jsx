import Image from "next/image"
import { MailIcon } from "@/app/ui/icons/MailIcon"
import { PhoneIcon } from "@/app/ui/icons/PhoneIcon"
import { LocationIcon } from "@/app/ui/icons/LocationIcon"
import '@/app/components/footer.css';

export const Footer = ({additionalClass}) => {
    return (
        <footer className={'footer' + (additionalClass ? ' '+additionalClass: '')}>
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
                <a href="tel:+33626717650">13330 Pélissanne</a>
            </div>
            <div className="footer-item i-text">
                <Image
                    src="/icons/linkedin.png"
                    alt="Logo linkedin"
                    width={50}
                    height={50}
                />
                <a href="https://www.linkedin.com/in/ibai-arotçarena-247b35266" style={{fontSize: '.9em'}}>www.linkedin.com/in/ibai-arotçarena-247b35266</a>
            </div>
        </footer>
    )
}