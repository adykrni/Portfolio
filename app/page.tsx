import { HeroCard } from "@/components/HeroCard";
import { ProjectList } from "@/components/ProjectList";
import { Footer } from "@/components/Footer";
import pageStyles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={pageStyles.page}>
      <HeroCard />
      <ProjectList />
      <Footer />
    </main>
  );
}
