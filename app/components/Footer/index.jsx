import { Suspense } from "react";
import { TopFooter } from "./TopFooter";
import './footer.css';
import { ProfileFooter } from "./ProfileFooter";
import { TopFooterSkeleton } from "./TopFooter/TopFooterSkeleton";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "@/app/ui/error/Error";

export const Footer = () => {
    return (
        <footer className="footer">
            <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<TopFooterSkeleton />}>
                    <TopFooter />
                </Suspense>
            </ErrorBoundary>
            
            <ProfileFooter />
            <div className="bottom-footer">
                Ce site a été réalisé avec Next.js et Api Platform
            </div>
        </footer>
    )
}