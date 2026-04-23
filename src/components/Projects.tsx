import { ArrowUpRight, ShoppingBag, Sparkles } from "lucide-react";

const projects = [
  {
    icon: ShoppingBag,
    name: "Ada Chikankari",
    tag: "E-commerce Platform",
    desc: "A responsive full-stack e-commerce platform built with React, Node.js, Express, and PostgreSQL. Improved app performance by ~35% via optimized rendering and API handling.",
    highlights: [
      "Sequelize ORM with relational schemas",
      "REST APIs with ~30% better query efficiency",
      "Reduced transaction errors by ~25%",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"],
    accent: "primary",
  },
  {
    icon: Sparkles,
    name: "AI Smart Assistant",
    tag: "AI Application",
    desc: "A full-stack AI-powered assistant capable of real-time conversational chat, document summarization, and dynamic content generation using OpenAI APIs.",
    highlights: [
      "Context-aware responses via structured message history",
      "Persistent chat sessions with MongoDB",
      "Reusable prompt templates for email, code, and writing",
    ],
    stack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    accent: "accent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-mono text-primary tracking-wider uppercase">
            // Selected Work
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Projects I'm <span className="text-gradient-primary">proud of</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden bg-gradient-card glass rounded-3xl p-8 hover:-translate-y-1 hover:shadow-glow transition-smooth"
            >
              <div
                className={`absolute -top-20 -right-20 size-64 rounded-full blur-[80px] opacity-30 ${
                  p.accent === "accent" ? "bg-accent" : "bg-primary"
                }`}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid place-items-center size-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <p.icon className="size-6" />
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-smooth" />
                </div>

                <div className="mt-6">
                  <div className="text-xs font-mono text-primary uppercase tracking-wider">
                    {p.tag}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>

                <ul className="mt-5 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary/70 border border-border font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
