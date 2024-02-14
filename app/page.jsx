import { Hero } from "@/app/components/Hero";
import '@/app/mes-realisations/ui/index.css';
import '@/app/mes-realisations/[projectId]/ui/index.css';
import { Suspense } from "react";
import { LastProject, LastProjectSkeleton } from "./components/LastProject";

export default function Page() {

  return (
    <>
      <Hero />
      <Suspense fallback={<LastProjectSkeleton />}>
        <LastProject />
      </Suspense>
    </>
  )
}
