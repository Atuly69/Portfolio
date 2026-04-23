import { Linkedin, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative overflow-hidden bg-gradient-card glass rounded-3xl p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-80 rounded-full bg-primary/30 blur-[100px] animate-glow-pulse" />
          <div className="absolute -bottom-32 right-0 size-72 rounded-full bg-accent/30 blur-[100px] animate-glow-pulse" />

          <div className="relative">
            <span className="inline-block text-sm font-mono text-primary tracking-wider uppercase">
              // Get in touch
            </span>
            <h2 className="mt-3 text-4xl md:text-6xl font-bold">
              Let's build something
              <br />
              <span className="text-gradient-primary">remarkable together</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Open to full-time roles, contracts, and interesting collaborations.
              Drop me a message — I usually reply within a day.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:atulyadav765487@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
              >
                <Mail className="size-4" />
                atulyadav765487@gmail.com
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Mail, label: "Email", value: "atulyadav765487@gmail.com", href: "mailto:atulyadav765487@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91-7307290440", href: "tel:+917307290440" },
                { icon: Linkedin, label: "LinkedIn", value: "atul-yadav-2715b0280", href: "https://linkedin.com/in/atul-yadav-2715b0280" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 hover:bg-secondary hover:-translate-y-1 transition-smooth text-left"
                >
                  <c.icon className="size-5 text-primary" />
                  <div className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 text-sm font-medium truncate">{c.value}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Atul Yadav. Crafted with care.
        </footer>
      </div>
    </section>
  );
}
