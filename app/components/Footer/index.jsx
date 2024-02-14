import { Suspense } from "react";
import { TopFooter } from "./TopFooter";
import './footer.css';
import { ProfileFooter } from "./ProfileFooter";
import { TopFooterSkeleton } from "./TopFooter/TopFooterSkeleton";

export const Footer = () => {
    return (
        <footer className="footer main-footer">
            <Suspense fallback={<TopFooterSkeleton />}>
                <TopFooter />
            </Suspense>
            <ProfileFooter />
        </footer>
    )
}