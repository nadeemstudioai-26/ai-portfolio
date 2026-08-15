import { Boxes, Brain, Database, Server, Wrench } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";

const CATEGORIES = [
  {
    icon: Boxes,
    title: "Programming",
    skills: ["Python", "JavaScript"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: ["Machine Learning", "AI", "Data Analysis"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["SQL", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-ink-border py-24">
      <Container>
        <SectionHeading
          index="02"
          title="Skills"
          description="Technologies I currently work with, grouped by category."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ icon: Icon, title, skills }) => (
            <div
              key={title}
              className="rounded-xl border border-ink-border bg-ink-surface p-6 transition-colors hover:bg-ink-hover"
            >
              <div className="flex items-center gap-2.5">
                <Icon size={18} className="text-accent" />
                <h3 className="font-display text-base font-semibold text-fg">
                  {title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
