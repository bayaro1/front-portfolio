import Image from "next/image";
import { Button } from "./ui/buttons/Button";
import { Hero } from "./components/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <section style={{height: '500px', backgroundColor: "green"}}>
      </section>
    </>
  );
}
