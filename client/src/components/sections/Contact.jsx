import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const EMAIL = "nadeem.studioai26@gmail.com";
const EMPTY_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Frontend-only for now — not wired to the backend yet.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          index="06"
          title="Contact"
          description="Have a project or role in mind? Send a message below."
        />

        <p className="mb-6 text-sm text-fg-muted">
          Prefer email?{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-accent hover:underline"
          >
            {EMAIL}
          </a>
        </p>

        <div className="max-w-xl">
          {submitted ? (
            <div className="flex items-start gap-3 rounded-xl border border-mint/30 bg-mint/10 p-6">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-mint" />
              <div>
                <p className="font-medium text-fg">Message ready to send</p>
                <p className="mt-1 text-sm text-fg-muted">
                  This form isn't connected to a backend yet, so nothing was
                  sent — but the form works and is ready to wire up.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 font-mono text-xs text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm text-fg-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-ink-border bg-ink-surface px-4 py-2.5 text-sm text-fg placeholder:text-fg-faint outline-none focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm text-fg-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg border border-ink-border bg-ink-surface px-4 py-2.5 text-sm text-fg placeholder:text-fg-faint outline-none focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-fg-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you working on?"
                  className="w-full resize-none rounded-lg border border-ink-border bg-ink-surface px-4 py-2.5 text-sm text-fg placeholder:text-fg-faint outline-none focus:border-accent"
                />
              </div>

              <Button type="submit" variant="primary" icon={Send} className="self-start">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
