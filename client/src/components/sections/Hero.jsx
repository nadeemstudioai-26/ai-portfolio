import { ArrowRight, Mail } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import GithubIcon from "../ui/icons/GithubIcon";

const GITHUB_URL = "https://github.com/nadeemstudioai-26";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink-border"
    >
      {/* subtle dot-grid backdrop, fades toward the bottom */}
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
        aria-hidden="true"
      />

      <Container className="relative py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div className="animate-fadeUp">
            <p className="mb-5 font-mono text-sm text-mint">
              <span aria-hidden="true">● </span>
              available for opportunities
            </p>

            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl lg:text-6xl text-balance">
              AI Engineer
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
              Building intelligent systems with Python, AI/ML, data, and
              backend technologies.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#projects" variant="primary" icon={ArrowRight}>
                View Projects
              </Button>
              <Button href="#contact" variant="secondary" icon={Mail}>
                Contact Me
              </Button>
              <Button href={GITHUB_URL} variant="ghost" icon={GithubIcon}>
                GitHub
              </Button>
            </div>
          </div>

          {/* Signature element: a terminal window */}
          <div
            className="animate-fadeUp rounded-xl border border-ink-border bg-ink-surface shadow-2xl shadow-black/40"
            style={{ animationDelay: "120ms" }}
          >
            <div className="flex items-center gap-2 border-b border-ink-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-fg-faint/40" />
              <span className="h-3 w-3 rounded-full bg-fg-faint/40" />
              <span className="h-3 w-3 rounded-full bg-fg-faint/40" />
              <span className="ml-3 font-mono text-xs text-fg-faint">
                ~/introduce-yourself — zsh
              </span>
            </div>
            <div className="px-5 py-6 font-mono text-sm leading-relaxed">
              <p className="text-fg-muted">
                <span className="text-accent">$</span> whoami
              </p>
              <p className="mt-1 text-fg">
                AI/ML engineer focused on practical, working systems.
              </p>

              <p className="mt-4 text-fg-muted">
                <span className="text-accent">$</span> stack --list
              </p>
              <p className="mt-1 text-fg">
                python · machine-learning · node.js · postgresql · rest-apis
              </p>

              <p className="mt-4 text-fg-muted">
                <span className="text-accent">$</span> status
                <span className="animate-blink text-accent">▍</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
