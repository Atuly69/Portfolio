import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atul Yadav — Full-Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Atul Yadav — Full-Stack Developer with 4+ years building scalable web, mobile, and AI-powered applications using MERN, React Native, and OpenAI.",
      },
      { property: "og:title", content: "Atul Yadav — Full-Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Full-Stack Developer specializing in MERN, React Native, real-time systems, and Generative AI integrations.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
