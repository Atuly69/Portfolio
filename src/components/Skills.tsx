const groups = [
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React.js", "React Native", "Next.js", "Redux", "Redux-Thunk/Saga", "Styled Components", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Microservices", "Firebase", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database & ORM",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Sequelize"],
  },
  {
    title: "DevOps",
    items: ["Git", "GitHub", "Docker", "Vercel"],
  },
  {
    title: "AI / Generative AI",
    items: ["OpenAI API", "LLM Integration", "AI Chatbots", "Text Generation", "AI-assisted Workflows"],
  },
  {
    title: "Real-Time & Mobile",
    items: ["Socket.io", "Agora SDK", "Firebase FCM", "BLE Devices", "Google Maps"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-mono text-primary tracking-wider uppercase">
            // Tech Stack
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Tools I work with <span className="text-gradient-primary">every day</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-gradient-card glass rounded-2xl p-6 hover:shadow-card transition-smooth"
            >
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider">
                {g.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/70 border border-border hover:border-primary hover:text-primary transition-smooth"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
