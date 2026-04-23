import { Code2, Database, Sparkles, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    desc: "End-to-end ownership across React, Next.js, React Native, and Node.js with a focus on clean, maintainable architecture.",
  },
  {
    icon: Database,
    title: "Scalable Backends",
    desc: "RESTful APIs, JWT auth, role-based access, and optimized queries across MySQL, MongoDB, and PostgreSQL.",
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    desc: "Socket.io chat, Firebase notifications, Agora video calls — reducing interaction latency by up to 40%.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "OpenAI APIs, LLM integration, AI chatbots, and intelligent automation built into production workflows.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-mono text-primary tracking-wider uppercase">
            // About
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Building products at the <span className="text-gradient-primary">intersection of code & AI</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I craft production-grade web and mobile experiences with a strong backend backbone.
            From API design and database modeling to authentication and real-time architectures —
            I bring ideas to life with performance, scalability, and code quality at the core.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group bg-gradient-card glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-smooth"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="grid place-items-center size-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <h.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
