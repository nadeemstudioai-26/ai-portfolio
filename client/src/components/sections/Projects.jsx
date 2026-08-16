import { ExternalLink } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import GithubIcon from "../ui/icons/GithubIcon";

// TODO: swap in the exact repo URL once you're ready to link it publicly.
// Pointing at the GitHub profile for now so the button stays real and
// clickable rather than a dead/fabricated link.
const AI_TRADING_ASSISTANT_REPO = "https://github.com/nadeemstudioai-26/AI-Trading-Assistant";

const PROJECTS = [
  {
    title: "AI Trading Assistant",
    description:
     "An AI-assisted trading analysis project built with Python, focused on chart processing, market-data analysis, and automated detection of trading patterns. The project explores practical AI/ML techniques for turning chart data into structured insights and signals. It is a research and development project, not a live automated trading system.",
    tech: ["Python", "Computer Vision", "Chart Analysis"],
    image: "/detected-candles.png",
    githubUrl: AI_TRADING_ASSISTANT_REPO,
    liveUrl: null,
    placeholder: false,
  },
  
  
];

function ProjectCard({ project }) {
  const { title, description, tech, githubUrl, liveUrl, placeholder } =
    project;

  return (
    <div className="flex flex-col rounded-xl border border-ink-border bg-ink-surface p-6 transition-colors hover:bg-ink-hover">
      {project.image && (
    <img
    src={project.image}
    alt={`${title} project screenshot`}
    className="mb-5 h-48 w-full rounded-lg border border-ink-border object-cover"
  />
)}      
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
          description="A selection of what I'm building."
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

