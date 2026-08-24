/**
 * Printed Circuit page: an asymmetric luxury editorial folio built on warm
 * paper, precise charcoal rules, and sparse Signal Gold highlights.
 */
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, ExternalLink, Github, Linkedin, Mail, Quote } from "lucide-react";
import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { PortfolioNavigation } from "@/components/PortfolioNavigation";
import { ContactInput, Footer, PortfolioButton, ProjectCard, SectionHeader, SkillItem, TimelineItem } from "@/components/PortfolioPrimitives";

const HERO_SUPPORTING_IMAGE = "/manus-storage/editorial-circuit-still-life_ae079309.jpg";
const TECHNOLOGY_IMAGE = "/manus-storage/abstract-engineering-landscape_8178155f.jpg";
const FEATURED_PROJECT_IMAGE = "/manus-storage/project-forms_651a2a10.jpg";

// Replace this only with Sankar's real profile image after it is uploaded to project storage.
// No generated substitute is used for the portrait treatment.
const PROFILE_IMAGE_URL = "/manus-storage/sankar-prasath-profile_c212d6a4.jpeg";

// Add a real hosted resume path here when it is available. Keep null until then.
const RESUME_URL: string | null = null;

const skillGroups = [
  { label: "Programming", items: [["Python", "Learning for problem solving and automation"], ["C", "Developing core programming foundations"], ["JavaScript", "Exploring interactive web experiences"], ["TypeScript", "Building clearer, safer interfaces"]] },
  { label: "Web Development", items: [["HTML & CSS", "Creating responsive, considered interfaces"], ["React", "Learning component-led front-end development"], ["Next.js", "Exploring modern web application workflows"], ["Flask", "Learning lightweight backend foundations"]] },
  { label: "AI & Machine Learning", items: [["Generative AI", "Exploring practical intelligent tools"], ["Prompt Engineering", "Learning structured AI interaction"], ["Computer Vision", "Developing an interest in visual intelligence"], ["YOLO & LLM Apps", "Exploring modern applied AI concepts"]] },
  { label: "Tools & Platforms", items: [["Git & GitHub", "Learning collaborative source control"], ["Firebase & Vercel", "Exploring deployment and app services"], ["Google Cloud", "Building cloud platform familiarity"], ["Linux", "Developing command-line fluency"]] },
  { label: "Professional Skills", items: [["Problem Solving", "Approaching challenges with curiosity"], ["Teamwork", "Contributing to shared outcomes"], ["Presentation", "Communicating ideas with clarity"], ["Project Collaboration", "Learning through practical teamwork"]] },
] as const;

const techBlocks = [
  ["Programming", "Python · C · JavaScript · TypeScript"],
  ["Frontend", "HTML · CSS · React · Next.js"],
  ["Backend", "Flask · Automation · Web Fundamentals"],
  ["AI", "Generative AI · Prompting · Vision · LLM Applications"],
  ["Database", "Firebase · Data Foundations"],
  ["Tools", "Git · GitHub · Vercel · Google Cloud · Linux"],
] as const;

const roleWords = [
  "Electrical & Electronics Engineering Student",
  "Student Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Technology Learner",
];

const revealTransition = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={revealTransition}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [roleIndex, setRoleIndex] = useState(0);
  const [projectFilter, setProjectFilter] = useState("All");
  const [notice, setNotice] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const visibleProjects = useMemo(() => {
    if (projectFilter === "All") return ["AI", "Web", "IoT", "Automation"];
    return [projectFilter];
  }, [projectFilter]);

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((current) => (current + 1) % roleWords.length), 2800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-38% 0px -54% 0px", threshold: [0.02, 0.15, 0.45] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 4200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const useResume = () => {
    if (RESUME_URL) {
      window.open(RESUME_URL, "_blank", "noopener,noreferrer");
    } else {
      setNotice("Resume path is ready to connect. Add the real resume URL in Home.tsx when the file is available.");
    }
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailBody = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:sankarprasath0209@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(mailBody)}`;
    setNotice("Your email client will open with this message addressed to Sankar.");
  };

  return (
    <div className={`portfolio-root ${isDark ? "is-dark" : ""}`}>
      <div className="paper-grain" aria-hidden="true" />
      <div className="editorial-grid" aria-hidden="true"><i /><i /><i /><i /></div>
      <PortfolioNavigation
        activeSection={activeSection}
        menuOpen={menuOpen}
        isDark={isDark}
        onNavigate={scrollTo}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onThemeToggle={() => setIsDark((dark) => !dark)}
      />
      {notice ? <div className="site-notice" role="status"><Check size={16} /> {notice}</div> : null}

      <main>
        <section className="hero" id="home" aria-label="Introduction">
          <div className="hero__main">
            <Reveal>
              <div className="hero__label"><span /> EEE Student / Developer / AI Enthusiast</div>
              <h1>Building<br />ideas <em>into</em><br />reality<span>.</span></h1>
              <p className="hero__intro">Passionate about learning technology, solving real-world problems, and building innovative solutions through software, AI, and engineering.</p>
              <p className="typing-role" aria-live="polite"><span>Currently / </span>{roleWords[roleIndex]}</p>
              <div className="hero__ctas">
                <PortfolioButton onClick={() => scrollTo("projects")}>View projects</PortfolioButton>
                <PortfolioButton tone="outline" onClick={() => scrollTo("contact")}>Contact me</PortfolioButton>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero__portrait-wrap">
            <div className="hero__portrait">
              {PROFILE_IMAGE_URL ? (
                <img src={PROFILE_IMAGE_URL} alt="Sankar Prasath S" />
              ) : (
                <>
                  <img src={HERO_SUPPORTING_IMAGE} alt="Editorial still life of engineering tools" />
                  <div className="portrait-pending"><span>Portrait asset</span><strong>Awaiting the original photograph</strong><small>Replace PROFILE_IMAGE_URL in Home.tsx after uploading Sankar’s photo.</small></div>
                </>
              )}
              <div className="portrait-signal"><i /> EEE / Field Notes</div>
            </div>
            <p className="vertical-caption">Sankar / Vol. 01</p>
            <div className="portrait-note"><span>01</span> A study in curiosity &amp; craft</div>
          </Reveal>
          <button className="hero__scroll" onClick={() => scrollTo("about")} aria-label="Scroll to the about section"><span>Scroll to explore</span><ArrowDown size={17} /></button>
        </section>

        <section className="section about" id="about">
          <Reveal><SectionHeader index="01" label="About" title={<>Curious by nature.<br />Building with purpose.</>} /></Reveal>
          <div className="about__body">
            <Reveal className="about__copy">
              <p className="drop-cap">I am an Electrical and Electronics Engineering student at SNS College of Technology with a strong interest in software development, artificial intelligence, innovation, and problem solving. I am eager to learn new technologies, gain hands-on experience, and contribute to meaningful projects.</p>
              <div className="about__quote"><Quote size={28} strokeWidth={1.1} /><p>Technology becomes meaningful when it meets a real question with an honest attempt to solve it.</p></div>
            </Reveal>
            <Reveal className="about__lists">
              <div>
                <p className="list-label">Current focus</p>
                <ul>{["Software Development", "Artificial Intelligence", "Problem Solving", "Innovation", "Continuous Learning", "Engineering Projects"].map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <p className="list-label">Currently exploring</p>
                <ul>{["Python", "C", "JavaScript", "AI & Generative AI", "Web Development", "Automation", "IoT"].map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="statement-section" aria-label="Personal statement">
          <Reveal className="statement-section__content">
            <p className="eyebrow"><span>—</span> Personal statement</p>
            <h2>Learning today.<br />Building <em>tomorrow.</em></h2>
            <div className="gold-rule" />
            <p>My goal is to continuously develop my technical and creative abilities while working on solutions that can create meaningful real-world impact.</p>
          </Reveal>
        </section>

        <section className="section capabilities" id="skills">
          <Reveal><SectionHeader index="02" label="Capabilities" title={<>Skills that<br />keep evolving.</>} /></Reveal>
          <div className="capabilities__intro"><p>Areas of learning, practice, and continuing exploration — presented without artificial measures of expertise.</p><span>01 — 05</span></div>
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <Reveal key={group.label} className="skill-group">
                <div className="skill-group__heading"><span>0{index + 1}</span><h3>{group.label}</h3></div>
                {group.items.map(([name, detail]) => <SkillItem key={name} name={name} detail={detail} />)}
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <Reveal><SectionHeader index="03" label="Selected work" title={<>Ideas<br />into <em>projects.</em></>} /></Reveal>
          <Reveal className="project-filter" aria-label="Project category filters">
            {["All", "AI", "Web", "IoT", "Engineering", "Hackathon", "Automation"].map((filter) => (
              <button key={filter} onClick={() => setProjectFilter(filter)} className={projectFilter === filter ? "is-active" : ""}>{filter}</button>
            ))}
          </Reveal>
          <div className="projects__grid">
            {visibleProjects.map((category, index) => <ProjectCard key={`${category}-${index}`} number={`0${index + 1}`} category={category} layout={(["large", "small", "wide", "offset"] as const)[index % 4]} />)}
          </div>
          <Reveal className="featured-project">
            <div className="featured-project__image"><img src={FEATURED_PROJECT_IMAGE} alt="Abstract physical forms representing future engineering project areas" /></div>
            <div className="featured-project__content">
              <p className="eyebrow"><span>Featured /</span> Editable project template</p>
              <h3>One idea.<br /><em>Fully examined.</em></h3>
              <div className="featured-project__columns">
                <div><span>The problem</span><p>Problem statement goes here.</p></div>
                <div><span>The idea</span><p>Solution concept goes here.</p></div>
                <div><span>The technology</span><p>Technology stack goes here.</p></div>
                <div><span>The result</span><p>Impact or result goes here.</p></div>
              </div>
              <div className="hero__ctas"><PortfolioButton tone="outline" onClick={() => setNotice("Add a real project URL to make this action available.")}>View project</PortfolioButton><PortfolioButton tone="outline" onClick={() => setNotice("Add a real GitHub URL to make this action available.")}><Github size={16} /> GitHub</PortfolioButton></div>
            </div>
          </Reveal>
        </section>

        <section className="section recognition" id="recognition">
          <Reveal><SectionHeader index="04" label="Recognition" title={<>Learning.<br />Participating.<br />Growing.</>} align="right" /></Reveal>
          <Reveal className="timeline">
            <TimelineItem year="2026" title="IBM Enterprise Design Thinking Practitioner Course" organization="IBM" active>Confirmed certification. A foundation in user-centred problem framing and collaborative design thinking.</TimelineItem>
            <TimelineItem year="Future" title="Hackathons & Technical Workshops" organization="Editable entry">Add future hackathons, workshops, bootcamps, courses, competitions, or certificates here. Include a verified link when one is available.</TimelineItem>
          </Reveal>
        </section>

        <section className="section journey" id="journey">
          <Reveal><SectionHeader index="05" label="Journey" title={<>More than<br />just a classroom.</>} /></Reveal>
          <Reveal className="journey__grid">
            <div className="journey__statement"><span>In progress / 2025 — 2029</span><p>Learning reaches further through participation, collaboration, and a willingness to contribute.</p></div>
            <div className="timeline timeline--compact">
              <TimelineItem year="Now" title="Volunteer Experience" organization="SNS College of Technology" active>Willing to participate in college events and social activities.</TimelineItem>
              <TimelineItem year="Next" title="Experiences in progress" organization="Editable entry">Future hackathons, team projects, technical communities, workshops, leadership activities, and internships can be added here.</TimelineItem>
            </div>
          </Reveal>
        </section>

        <section className="section education" id="education">
          <Reveal><SectionHeader index="06" label="Education" title={<>Where the<br />journey began.</>} /></Reveal>
          <Reveal className="education__record">
            <div className="education__year">2025<br /><span>2029</span></div>
            <div className="education__line" aria-hidden="true"><span /></div>
            <div className="education__content"><p className="eyebrow">Currently pursuing</p><h3>SNS College<br />of Technology</h3><p>Bachelor of Engineering — Electrical and Electronics Engineering</p></div>
          </Reveal>
        </section>

        <section className="technology-wall" id="technology">
          <img src={TECHNOLOGY_IMAGE} alt="Abstract architectural interpretation of connected engineering systems" />
          <div className="technology-wall__shade" />
          <div className="technology-wall__content">
            <Reveal><SectionHeader index="07" label="Technology" title={<>Tools of<br />the <em>craft.</em></>} /></Reveal>
            <div className="technology-wall__blocks">
              {techBlocks.map(([title, tools], index) => <Reveal key={title}><article tabIndex={0}><span>0{index + 1}</span><h3>{title}</h3><p>{tools}</p></article></Reveal>)}
            </div>
          </div>
        </section>

        <section className="resume-section" id="resume">
          <Reveal className="resume-section__content"><p className="eyebrow"><span>—</span> Professional folio</p><h2>Curious to<br />know <em>more?</em></h2><p>Explore my academic journey, technical interests, skills, and experience.</p><div className="hero__ctas"><PortfolioButton tone="gold" onClick={useResume}>View resume</PortfolioButton></div></Reveal>
        </section>

        <section className="section contact" id="contact">
          <Reveal><SectionHeader index="08" label="Contact" title={<>Let&apos;s build<br />something <em>meaningful.</em></>} /></Reveal>
          <div className="contact__grid">
            <Reveal className="contact__details">
              <p>For internship opportunities, project conversations, technical communities, or a meaningful new challenge, these are the best ways to connect.</p>
              <a href="mailto:sankarprasath0209@gmail.com"><span>Email</span>sankarprasath0209@gmail.com <ArrowUpRight size={17} /></a>
              <a href="https://www.linkedin.com/in/sankarprasath/" target="_blank" rel="noreferrer"><span>LinkedIn</span>linkedin.com/in/sankarprasath <ArrowUpRight size={17} /></a>
              <a href="https://github.com/sankarprasath-S" target="_blank" rel="noreferrer"><span>GitHub</span>github.com/sankarprasath-S <ArrowUpRight size={17} /></a>
              <div className="contact__icons"><a href="mailto:sankarprasath0209@gmail.com" aria-label="Email Sankar Prasath S"><Mail /></a><a href="https://www.linkedin.com/in/sankarprasath/" target="_blank" rel="noreferrer" aria-label="Sankar Prasath S on LinkedIn"><Linkedin /></a><a href="https://github.com/sankarprasath-S" target="_blank" rel="noreferrer" aria-label="Sankar Prasath S on GitHub"><Github /></a></div>
            </Reveal>
            <Reveal className="contact__form-wrap">
              <form onSubmit={handleSubmit} className="contact-form">
                <ContactInput label="Name" name="name" value={form.name} onChange={handleFieldChange} />
                <ContactInput label="Email" name="email" type="email" value={form.email} onChange={handleFieldChange} />
                <ContactInput label="Subject" name="subject" value={form.subject} onChange={handleFieldChange} />
                <ContactInput label="Message" name="message" multiline value={form.message} onChange={handleFieldChange} />
                <PortfolioButton type="submit">Send message</PortfolioButton>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
