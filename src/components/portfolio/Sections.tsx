import { GraduationCap, Code2, Rocket, MapPin, Briefcase, Layers } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STATS = [
  { icon: GraduationCap, label: "B.Tech CSE Student" },
  { icon: Code2, label: "Full-Stack Developer" },
  { icon: Rocket, label: "MERN Stack Enthusiast" },
  { icon: MapPin, label: "Berhampur, Odisha" },
];

const SKILLS: { group: string; items: { name: string; level: number }[] }[] = [
  {
    group: "Frontend",
    items: [
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    group: "Database",
    items: [{ name: "MongoDB", level: 82 }],
  },
  {
    group: "Programming Languages",
    items: [
      { name: "Java", level: 75 },
      { name: "C", level: 78 },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", level: 80 },
      { name: "CI/CD Basics", level: 65 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    group: "Expertise",
    items: [
      { name: "Full-Stack Development", level: 82 },
      { name: "Web Application Design", level: 80 },
      { name: "REST API Integration", level: 78 },
    ],
  },
];

export function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get to know me" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <Reveal className="glass glass-hover p-8">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Bolla Tarun Kumar is pursuing a Bachelor of Technology (B.Tech) in Computer Science
              and Engineering at NIST University, Berhampur, Odisha, with an expected
              graduation year of 2029.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              He is passionate about building scalable, user-friendly web applications using the
              MERN Stack and enjoys learning modern technologies, backend systems, and DevOps
              fundamentals. He focuses on writing clean code, solving real-world problems, and
              continuously expanding his technical expertise.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="glass glass-hover flex h-full min-w-0 items-center gap-3 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <s.icon size={20} />
                  </span>
                  <span className="min-w-0 text-sm font-medium">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Academics" title="Education" />
        <Reveal>
          <div className="relative pl-8">
            <span className="absolute left-0 top-2 h-full w-px bg-linear-to-b from-primary via-secondary to-transparent" />
            <span className="absolute -left-1.75 top-2 h-4 w-4 rounded-full bg-primary shadow-[0_0_0_6px_color-mix(in_oklab,var(--primary)_18%,transparent)]" />
            <article className="glass glass-hover p-7">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h3>
                  <p className="mt-1 text-sm text-secondary">
                    Computer Science and Engineering
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">NIST University</p>
                  <p className="text-sm text-muted-foreground">Berhampur, Odisha</p>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                  Expected 2029
                </span>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="What I've been doing" title="Experience" />
        <Reveal>
          <article className="glass glass-hover p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/15 text-secondary">
              <Briefcase size={20} />
            </span>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Currently gaining hands-on experience through personal and academic web development
              projects.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Built scalable applications using the MERN Stack while strengthening knowledge of
              frontend development, backend architecture, REST APIs, MongoDB databases,
              responsive design, Git, and CI/CD basics. Actively learning DevOps concepts to
              improve deployment workflows and software delivery.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Toolbox" title="Skills" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 80}>
              <div className="glass glass-hover h-full p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                  {group.group}
                </h3>
                <ul className="mt-5 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="min-w-0 truncate">{item.name}</span>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {item.level}%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full [background:var(--gradient-brand)] transition-[width] duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="What I offer" title="Services" />
        <Reveal>
          <article className="glass glass-hover p-8 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
              <Layers size={24} />
            </span>
            <h3 className="mt-6 text-xl font-semibold">Full-Stack Web Development</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Design and develop responsive, scalable, and modern web applications using the MERN
              Stack, creating seamless user experiences with efficient backend systems and secure
              API integration.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
