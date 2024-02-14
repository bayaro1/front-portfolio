import { Suspense } from "react";
import { TopFooter } from "./TopFooter";
import './footer.css';
import { ProfileFooter } from "./ProfileFooter";
import { TopFooterSkeleton } from "./TopFooter/TopFooterSkeleton";

export const Footer = () => {
    return (
        <footer className="footer">
            <Suspense fallback={<TopFooterSkeleton />}>
                <TopFooter />
            </Suspense>
            <ProfileFooter />
            <div className="bottom-footer">
                Ce site a été réalisé avec Next.js et Api Platform
            </div>
        </footer>
    )
}