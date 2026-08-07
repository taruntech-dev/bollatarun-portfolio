import { Github, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import eventImg from "../../assets/project-event.jpg";
import medicalImg from "../../assets/project-medical.jpg";
import restaurantImg from "../../assets/project-restaurant.jpg";

const GITHUB = "https://github.com/tk9831345-jpg";

const PROJECTS = [
  {
    title: "ADD EVENT",
    image: eventImg,
    description:
      "A web application that allows users to create, manage, and book events through an intuitive interface.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Event creation", "Event booking", "User-friendly interface"],
  },
  {
    title: "Medical Store Website",
    image: medicalImg,
    description:
      "A healthcare information platform where users can view hospital and medical store details for easy access to healthcare resources.",
    tech: ["React.js", "Node.js", "MongoDB"],
    features: ["Hospital information", "Medical store listings", "Responsive UI"],
  },
  {
    title: "Restaurant Website",
    image: restaurantImg,
    description:
      "A responsive restaurant website that enables users to browse menus and place food orders online.",
    tech: ["React.js", "Express.js", "MongoDB"],
    features: ["Food menu", "Online ordering", "Mobile-friendly design"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected work" title="Projects" />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <article className="glass glass-hover flex h-full flex-col overflow-hidden">
                <div className="relative aspect-3/2 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} project preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3 pt-1">
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/60"
                    >
                      <Github size={14} /> GitHub
                    </a>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/25"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
