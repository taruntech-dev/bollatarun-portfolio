import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-reveal";

const SECTIONS = [
  "home",
  "about",
  "education",
  "experience",
  "skills",
  "services",
  "projects",
  "contact",
] as const;

export function Navbar() {
  const active = useActiveSection(SECTIONS as unknown as string[]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass rounded-none border-x-0 border-t-0" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between"
      >
        <a href="#home" className="min-w-0 font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">BTK</span>
          <span className="ml-2 hidden text-sm font-normal text-muted-foreground sm:inline">
            Bolla Tarun Kumar
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                data-active={active === id}
                className="nav-link capitalize"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-xl border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <ul className="glass mx-4 mb-4 grid gap-1 rounded-2xl p-3 text-sm lg:hidden">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                data-active={active === id}
                className="block rounded-xl px-4 py-2 capitalize text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
