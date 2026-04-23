import { ArrowRight, FileText, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 size-96 rounded-full bg-accent/20 blur-[120px] animate-glow-pulse" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium animate-fade-up"
          >
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Available for new opportunities</span>
          </div>

          <h1
            className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient-primary">Atul Yadav</span>
            <br />
            <span className="text-foreground">Full-Stack </span>
            <span className="text-gradient">Developer</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Software Developer with <span className="text-foreground font-semibold">4 years</span> of experience
            building production-grade web and mobile applications. I specialize in scalable backends,
            real-time systems, and integrating <span className="text-primary">Generative AI</span> to ship
            faster, smarter products.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
            >
              View My Work
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium hover:bg-secondary transition-smooth"
            >
              Get in Touch
            </a>
          </div>

          <div
            className="mt-12 flex items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="mailto:atulyadav765487@gmail.com"
              aria-label="Email"
              className="grid place-items-center size-11 rounded-full glass hover:bg-secondary hover:text-primary transition-smooth"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/atul-yadav-2715b0280"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center size-11 rounded-full glass hover:bg-secondary hover:text-primary transition-smooth"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="/atul-yadav-resume.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="grid place-items-center size-11 rounded-full glass hover:bg-secondary hover:text-primary transition-smooth"
            >
              <FileText className="size-4" />
            </a>
          </div>

          <div
            className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { num: "4+", label: "Years Experience" },
              { num: "20+", label: "Projects Shipped" },
              { num: "1K+", label: "Active Users" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
                  {s.num}
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
