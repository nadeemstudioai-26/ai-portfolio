import { Download } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

// TODO: place your real resume PDF at this path (e.g. /public/resume.pdf)
const RESUME_PATH = "/resume.pdf";

export default function Resume() {
  return (
    <section id="resume" className="border-b border-ink-border py-24">
      <Container>
        <SectionHeading index="05" title="Resume" />

        <div className="flex flex-col items-start gap-6 rounded-xl border border-ink-border bg-ink-surface p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-fg-muted leading-relaxed">
            A one-page summary of my background, skills, and projects.
            Download the PDF for the full picture, or reach out directly if
            you have questions.
          </p>
          <Button href={RESUME_PATH} variant="primary" icon={Download}>
            Download Resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
