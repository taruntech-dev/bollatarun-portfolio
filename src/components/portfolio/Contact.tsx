import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const EMAIL = "tarunbolla19@gmail.com";
const PHONE = "+91 9861252672";
const LINKEDIN = "https://linkedin.com/in/bolla-tarun-kumar-ba3a30379";
const GITHUB = "https://github.com/tk9831345-jpg";

const DETAILS = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE, href: "tel:+919861252672" },
  {
    icon: MapPin,
    label: "Location",
    value: "Paralakhemundi, Odisha",
    href: "https://maps.google.com/?q=Paralakhemundi,Odisha",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "bolla-tarun-kumar",
    href: LINKEDIN,
  },
  { icon: Github, label: "GitHub", value: "tk9831345-jpg", href: GITHUB },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") ?? ""));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Say hello" title="Contact" />
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal>
            <div className="glass h-full p-7">
              <h3 className="text-lg font-semibold">Let&rsquo;s build something together</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to internships, freelance work, and collaborative projects.
              </p>
              <ul className="mt-7 space-y-4">
                {DETAILS.map((d) => (
                  <li key={d.label}>
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl p-2 transition-colors hover:bg-muted/50"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                        <d.icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{d.label}</span>
                        <span className="block truncate text-sm">{d.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glass h-full space-y-4 p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What is this about?" />
              <div>
                <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none rounded-xl border border-input bg-muted/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="glow-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Send Message <Send size={16} />
              </button>
              <p aria-live="polite" className="min-h-5 text-center text-xs text-secondary">
                {sent ? "Opening your email app — thanks for reaching out!" : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-muted/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <p className="min-w-0 text-xs text-muted-foreground sm:text-sm">
          © 2026 Bolla Tarun Kumar. All Rights Reserved.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {[
            { href: GITHUB, icon: Github, label: "GitHub" },
            { href: LINKEDIN, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
