import { Brain, Code2, Database, Wrench } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const FOCUS_AREAS = [
  {
    icon: Brain,
    title: "AI / ML",
    description:
      "Applying machine learning and data-driven approaches to solve concrete problems.",
  },
  {
    icon: Code2,
    title: "Python & Backend",
    description:
      "Writing clean, maintainable Python and backend services that hold up in production.",
  },
  {
    icon: Database,
    title: "Data",
    description:
      "Working with data end to end — from collection and cleaning to analysis.",
  },
  {
    icon: Wrench,
    title: "Practical Software",
    description:
      "Preferring working software and clear problem solving over theory alone.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-ink-border py-24">
      <Container>
        <SectionHeading
          index="01"
          title="About"
          description="A short introduction — edit this to reflect your own background and voice."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-fg-muted leading-relaxed">
              I'm Nadeem Uddin, an AI engineer working at the intersection of
              Python, machine learning, and backend development. I build
              practical AI/software projects — from data analysis to
              full-stack systems with Node.js, Express, and REST APIs —
              backed by SQL and PostgreSQL for data storage.
            </p>
            <p className="mt-4 text-fg-muted leading-relaxed">
              My focus is on turning AI/ML ideas into working software
              rather than staying at the prototype stage: writing clean
              Python, structuring data for analysis, and building the
              backend and API layer a project needs to actually run. I use
              Git and GitHub to track and share my work as it develops.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {FOCUS_AREAS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-ink-border bg-ink-surface p-5"
              >
                <Icon size={20} className="text-accent" />
                <h3 className="mt-3 font-display text-sm font-semibold text-fg">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
