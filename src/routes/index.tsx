import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Experience, Skills, Services } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Bolla Tarun Kumar | Full-Stack MERN Developer Portfolio";
const description =
  "Portfolio of Bolla Tarun Kumar, a Computer Science student at NIST University, Odisha, building scalable MERN stack web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Bolla Tarun Kumar",
            jobTitle: "Full-Stack Web Developer",
            email: "mailto:tarunbolla19@gmail.com",
            telephone: "+91 9861252672",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Berhampur",
              addressRegion: "Odisha",
              addressCountry: "IN",
            },
            alumniOf: "NIST University",
            sameAs: [
              "https://github.com/tk9831345-jpg",
              "https://linkedin.com/in/bolla-tarun-kumar-ba3a30379",
            ],
          }),
        }}
      />
    </div>
  );
}
