import { ExternalLink } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import GithubIcon from "../ui/icons/GithubIcon";

// TODO: swap in the exact repo URL once you're ready to link it publicly.
// Pointing at the GitHub profile for now so the button stays real and
// clickable rather than a dead/fabricated link.
const AI_TRADING_ASSISTANT_REPO = "https://github.com/nadeemstudioai-26";

const PROJECTS = [
  {
    title: "AI Trading Assistant",
    description:
      "A Python project applying AI/ML and data analysis techniques to trading and chart-related data. Focused on processing market data and building AI/ML-driven analysis rather than a finished trading product — details below reflect the project's current scope, not a live or production trading system.",
    tech: ["Python", "AI/ML", "Data Analysis"],
    githubUrl: AI_TRADING_ASSISTANT_REPO,
    liveUrl: null,
    placeholder: false,
  },
  {
    title: "Placeholder Project Two",
    description:
      "Future project slot — not a real project yet. Replace this title, description, and tags once the next project is built.",
    tech: ["Python", "Backend"],
    githubUrl: null,
    liveUrl: null,
    placeholder: true,
  },
  {
    title: "Placeholder Project Three",
    description:
      "Future project slot — not a real project yet. Replace this title, description, and tags once the next project is built.",
    tech: ["Machine Learning"],
    githubUrl: null,
    liveUrl: null,
    placeholder: true,
  },
];

function ProjectCard({ project }) {
  const { title, description, tech, githubUrl, liveUrl, placeholder } =
    project;

  return (
    <div className="flex flex-col rounded-xl border border-ink-border bg-ink-surface p-6 transition-colors hover:bg-ink-hover">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-fg">
          {title}
        </h3>
        {placeholder && (
          <span className="shrink-0 rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent-soft">
            placeholder
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors"
          >
            <GithubIcon size={16} />
            Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
        {!githubUrl && !liveUrl && (
          <span className="font-mono text-xs text-fg-faint">
            links coming soon
          </span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-ink-border py-24">
      <Container>
        <SectionHeading
          index="03"
          title="Projects"
          description="A selection of what I'm building. Placeholder cards are clearly marked and ready to swap in real work."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
