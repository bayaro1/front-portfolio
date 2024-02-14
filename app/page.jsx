import { Hero } from "@/app/components/Hero";
import '@/app/mes-realisations/ui/index.css';
import '@/app/mes-realisations/[projectId]/ui/index.css';
import { Suspense } from "react";
import { LastProject } from "./components/LastProject";
import { ProjectShowSkeleton } from "./mes-realisations/[projectId]/ui/skeletons/ProjectShowSkeleton";

export default function Page() {

  return (
    <>
      <Hero />
      <div className="page">
        <Suspense fallback={<ProjectShowSkeleton />}>
          <LastProject />
        </Suspense>
      </div>
    </>
  )
}
