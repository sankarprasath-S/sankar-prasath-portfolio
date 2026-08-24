/**
 * Printed Circuit navigation: compact uppercase editorial metadata and a gold
 * signal indicator. The same precise language guides desktop and mobile menus.
 */
import { Menu, Moon, Sun, X } from "lucide-react";

const ASSET_ORIGIN = "https://sankarfolio-rydjgeka.manus.space";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Education", "education"],
  ["Contact", "contact"],
] as const;

export function PortfolioNavigation({
  activeSection,
  menuOpen,
  isDark,
  onNavigate,
  onMenuToggle,
  onThemeToggle,
}: {
  activeSection: string;
  menuOpen: boolean;
  isDark: boolean;
  onNavigate: (id: string) => void;
  onMenuToggle: () => void;
  onThemeToggle: () => void;
}) {
  return (
    <header className="portfolio-nav">
      <button className="brand-lockup" onClick={() => onNavigate("home")} aria-label="Back to portfolio home">
        <img src={`${ASSET_ORIGIN}/manus-storage/sankar-brand-mark_7cc26809.png`} alt="" />
        <span><strong>Sankar Prasath S</strong><small>Personal folio / 2026</small></span>
      </button>
      <nav className="portfolio-nav__links" aria-label="Primary navigation">
        {links.map(([label, id]) => (
          <button key={id} onClick={() => onNavigate(id)} className={activeSection === id ? "is-active" : ""}>
            {label}
          </button>
        ))}
      </nav>
      <div className="portfolio-nav__actions">
        <button className="theme-toggle" onClick={onThemeToggle} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
          {isDark ? <Sun size={17} strokeWidth={1.5} /> : <Moon size={17} strokeWidth={1.5} />}
        </button>
        <button className="menu-toggle" onClick={onMenuToggle} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
          {menuOpen ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <p>Navigate the folio</p>
        {links.map(([label, id], index) => (
          <button key={id} onClick={() => onNavigate(id)} tabIndex={menuOpen ? 0 : -1}>
            <span>0{index + 1}</span>{label}
          </button>
        ))}
      </div>
    </header>
  );
}
