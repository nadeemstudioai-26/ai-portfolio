import { Mail } from "lucide-react";
import GithubIcon from "../ui/icons/GithubIcon";
import LinkedinIcon from "../ui/icons/LinkedinIcon";

const NAME = "Nadeem Uddin";
const GITHUB_URL = "https://github.com/nadeemstudioai-26";
const LINKEDIN_URL = "https://www.linkedin.com/in/nadeem-uddin-1b0651247";
const EMAIL = "nadeem.studioai26@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm text-fg">{NAME}</p>
          <p className="mt-1 text-sm text-fg-muted">AI Engineer</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-fg-muted hover:text-fg transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fg-muted hover:text-fg transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="text-fg-muted hover:text-fg transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-ink-border px-6 py-5 text-center font-mono text-xs text-fg-faint sm:px-8">
        © {year} {NAME}. Built with React &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
