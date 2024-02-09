'use client';
import { Hero } from "@/app/components/Hero";
import { SiteConfig } from "./lib/SiteConfig";
import { ProjectShow } from "./mes-realisations/[projectId]/ui/ProjectShow";
import { useFetchHydra } from "./lib/customHooks/fetch/useFetchHydra";
import { ProjectShowSkeleton } from "./mes-realisations/[projectId]/ui/skeletons/ProjectShowSkeleton";
import '@/app/mes-realisations/ui/index.css';

export default function Page() {

  const [lastProject, isLoading, errors, reset] = useFetchHydra(SiteConfig.API_URL + '/api/project/last');

  return (
    <>
      <Hero />
      <section className="homepage-highlight">
        {
          lastProject ? (
            <>
              <h2 className="homepage-highlight-title">
                {lastProject.title}
              </h2>
              <ProjectShow project={lastProject} />
            </>
          ): (
            <ProjectShowSkeleton />
          )
        }
      </section>
    </>
  )
}
