import { ArrowRight, Download, Mail } from "lucide-react";
import portrait from "@/assets/tarun-portrait-cutout.png";

const TECH = [
  { name: "React", className: "left-[-4%] top-[12%]", delay: "0s" },
  { name: "Node.js", className: "right-[-2%] top-[6%]", delay: "0.8s" },
  { name: "MongoDB", className: "left-[-8%] bottom-[22%]", delay: "1.6s" },
  { name: "JavaScript", className: "right-[-6%] bottom-[30%]", delay: "2.2s" },
  { name: "Git", className: "left-[18%] bottom-[-4%]", delay: "1.1s" },
  { name: "Express", className: "right-[16%] bottom-[-6%]", delay: "0.4s" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-24 pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-blob absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
        <div className="aurora-blob absolute -right-24 top-40 h-96 w-96 rounded-full bg-secondary/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <div className="relative mx-auto w-full max-w-sm animate-[fade-in_0.9s_ease-out_both]">
          {TECH.map((t) => (
            <span
              key={t.name}
              style={{ animationDelay: t.delay }}
              className={`float glass absolute z-10 hidden rounded-full px-4 py-2 text-xs font-medium text-muted-foreground sm:block ${t.className}`}
            >
              {t.name}
            </span>
          ))}
          <div className="relative rounded-[2rem] p-[2px] [background:var(--gradient-brand)]">
            <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
              <img
                src={profileAsset.url}
                width={612}
                height={1280}
                alt="Portrait of Bolla Tarun Kumar, Computer Science student and full-stack developer"
                className="aspect-[4/5] h-full w-full object-cover object-top"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_-80px_120px_-60px_oklch(0.62_0.19_258/0.55)]"
            />
          </div>
        </div>

        <div className="animate-[fade-in_1s_ease-out_0.15s_both]">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            Available for internships & collaborations
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&rsquo;m <span className="text-gradient">Bolla Tarun Kumar</span>
          </h1>
          <p className="mt-4 text-base font-medium text-secondary sm:text-lg">
            Computer Science Student | Full-Stack Web Developer | MERN Stack Developer
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I&rsquo;m a passionate Computer Science student at NIST University, Odisha, with a
            strong interest in full-stack web development. I love building interactive and
            scalable web applications using modern technologies while continuously improving my
            coding and design skills.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glow-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-secondary/60"
            >
              Contact Me <Mail size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-secondary/40 px-6 py-3 text-sm font-semibold text-secondary transition-all hover:-translate-y-0.5 hover:bg-secondary/10"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
