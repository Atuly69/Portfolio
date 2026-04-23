const jobs = [
  {
    company: "Eighteen Pixels India Pvt. Ltd",
    role: "Full-Stack Developer",
    period: "Apr 2025 — Present",
    points: [
      "Developed scalable e-commerce and survey platforms using the MERN stack, building responsive interfaces with React, Next.js, and Tailwind CSS supporting 1,000+ active users with ~30% better page performance.",
      "Designed and implemented RESTful APIs with Node.js & Express, integrating JWT authentication and role-based access; optimized MySQL with 50+ relational tables for faster response times.",
      "Integrated Generative AI (OpenAI APIs) to build intelligent features like automated responses, content generation, and smarter user query handling — boosting engagement and reducing manual effort.",
      "Implemented Socket.io real-time chat reducing interaction latency by ~40% while contributing to Agile sprints and code reviews.",
    ],
  },
  {
    company: "Next Olive Technologies Pvt. Ltd",
    role: "Software Developer",
    period: "Mar 2022 — Mar 2025",
    points: [
      "Developed and maintained web platforms, ERP dashboards, and mobile apps using the MERN stack and React Native — improving page load performance by ~35% via component & state optimizations.",
      "Built scalable backend services using Node.js & Express integrating MongoDB, MySQL, and PostgreSQL via Sequelize ORM — improving API response efficiency by ~30%.",
      "Engineered real-time systems with Socket.io, Firebase (FCM), and Agora SDK enabling chat, notifications, and video calls.",
      "Integrated BLE devices and Google Maps geolocation for real-time tracking, reducing communication latency by ~40%; deployed via Vercel within Agile cycles.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-mono text-primary tracking-wider uppercase">
            // Experience
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            A track record of <span className="text-gradient-primary">shipping at scale</span>
          </h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {jobs.map((job, idx) => (
              <div
                key={job.company}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  idx % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 size-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background -translate-x-1/2" />

                <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:col-start-2"}`}>
                  <div className="bg-gradient-card glass rounded-2xl p-6 hover:shadow-glow transition-smooth">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider">
                      {job.period}
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{job.role}</h3>
                    <div className="text-accent font-medium">{job.company}</div>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed ${idx % 2 === 0 ? "md:text-right" : ""}`}>
                      {job.points.map((p, i) => (
                        <li key={i} className="leading-relaxed">{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
