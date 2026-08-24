/**
 * Printed Circuit design system: unrounded editorial controls, precise rules,
 * Signal Gold accents, and Playfair-led hierarchy for Sankar Prasath S.
 */
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import type { ChangeEvent } from "react";

export type ButtonTone = "primary" | "outline" | "gold";

export function PortfolioButton({
  children,
  tone = "primary",
  onClick,
  type = "button",
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  tone?: ButtonTone;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`portfolio-button portfolio-button--${tone} ${className}`}
    >
      <span>{children}</span>
      {tone !== "outline" && <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.6} />}
    </button>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  accent,
  align = "left",
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  accent?: string;
  align?: "left" | "right";
}) {
  return (
    <header className={`section-header section-header--${align}`}>
      <p className="eyebrow">
        <span>{index}</span> / {label}
      </p>
      <h2>
        {title}
        {accent ? <em>{accent}</em> : null}
      </h2>
    </header>
  );
}

export function SkillItem({ name, detail }: { name: string; detail: string }) {
  return (
    <article className="skill-item" tabIndex={0}>
      <span className="skill-item__dot" aria-hidden="true" />
      <div>
        <h4>{name}</h4>
        <p>{detail}</p>
      </div>
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.35} />
    </article>
  );
}

export function ProjectCard({
  number,
  category,
  layout,
}: {
  number: string;
  category: string;
  layout: "large" | "small" | "wide" | "offset";
}) {
  return (
    <article className={`project-card project-card--${layout}`}>
      <div className="project-card__image" aria-label={`Editable placeholder for project ${number} image`}>
        <span>PROJECT IMAGE / TO BE ADDED</span>
        <div className="project-card__image-grid" aria-hidden="true" />
      </div>
      <div className="project-card__topline">
        <span>PROJECT {number}</span>
        <span>{category}</span>
      </div>
      <h3>Coming Soon<span>.</span></h3>
      <p>
        An editable space for a future project. Add the challenge, solution, technology, features, and impact when the work is ready to share.
      </p>
      <div className="project-card__meta">
        <span>TECHNOLOGY / TO BE ADDED</span>
        <span>DETAILS / TO BE ADDED</span>
      </div>
    </article>
  );
}

export function TimelineItem({
  year,
  title,
  organization,
  children,
  active = false,
}: {
  year: string;
  title: string;
  organization: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <article className={`timeline-item ${active ? "timeline-item--active" : ""}`}>
      <span className="timeline-item__marker" aria-hidden="true" />
      <p className="timeline-item__year">{year}</p>
      <div className="timeline-item__body">
        <h3>{title}</h3>
        <p className="timeline-item__organization">{organization}</p>
        <p>{children}</p>
      </div>
    </article>
  );
}

export function ContactInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  multiline = false,
  required = true,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  multiline?: boolean;
  required?: boolean;
}) {
  return (
    <label className="contact-input">
      <span>{label}{required ? " *" : ""}</span>
      {multiline ? (
        <textarea name={name} value={value} onChange={onChange} required={required} rows={4} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} required={required} />
      )}
    </label>
  );
}

export function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer__top">
        <div>
          <img src="/manus-storage/sankar-brand-mark_7cc26809.png" alt="Abstract Sankar Prasath S brand mark" />
          <p className="portfolio-footer__name">Sankar Prasath S</p>
          <p className="portfolio-footer__role">EEE Student / Developer / AI Enthusiast</p>
        </div>
        <div className="portfolio-footer__links" aria-label="Footer navigation">
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("journey")}>Journey</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
        <div className="portfolio-footer__socials">
          <a href="https://www.linkedin.com/in/sankarprasath/" target="_blank" rel="noreferrer" aria-label="Sankar Prasath S on LinkedIn"><Linkedin size={16} /> LinkedIn</a>
          <a href="https://github.com/sankarprasath-S" target="_blank" rel="noreferrer" aria-label="Sankar Prasath S on GitHub"><Github size={16} /> GitHub</a>
          <a href="mailto:sankarprasath0209@gmail.com"><Mail size={16} /> Email</a>
        </div>
      </div>
      <div className="portfolio-footer__bottom">
        <p>© 2026 Sankar Prasath S. All Rights Reserved.</p>
        <button onClick={() => scrollTo("home")}>Back to top <ArrowUpRight size={15} /></button>
      </div>
    </footer>
  );
}
