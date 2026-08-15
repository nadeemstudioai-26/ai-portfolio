import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

// Safe placeholder entries — no invented employment history.
// TODO: replace dates/descriptions with your real timeline.
const TIMELINE = [
  {
    period: "Ongoing",
    title: "AI/ML Learning",
    description:
      "Studying machine learning fundamentals and applied AI through courses, papers, and hands-on practice.",
  },
  {
    period: "Ongoing",
    title: "Software Development Projects",
    description:
      "Building backend services and full-stack projects to practice production-quality software engineering.",
  },
  {
    period: "Ongoing",
    title: "Personal AI Projects",
    description:
      "Designing and shipping small AI-powered tools end to end, including this portfolio's AI Trading Assistant.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-ink-border py-24">
      <Container>
        <SectionHeading
          index="04"
          title="Experience"
          description="A learning journey rather than a conventional résumé — updated as it happens."
        />

        <ol className="relative border-l border-ink-border pl-8">
          {TIMELINE.map((item, i) => (
            <li key={item.title} className={i === 0 ? "" : "mt-10"}>
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-ink bg-accent" />
              <p className="font-mono text-xs text-fg-faint">{item.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-fg-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
