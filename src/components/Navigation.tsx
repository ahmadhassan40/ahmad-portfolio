import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  subLinks?: {
    label: string;
    description?: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  {
    label: "Projects",
    subLinks: [
      {
        label: "Featured Work",
        description: "Recent client and academic builds",
        href: "#projects",
      },
      {
        label: "Skillset",
        description: "Tech stack & specialties",
        href: "#skills",
      },
    ],
  },
  { label: "Education", href: "#education" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isMobileMenuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollToSection = (href?: string) => {
    if (!href) return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav ref={navRef} className={`site-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button
          type="button"
          className="brand"
          onClick={() => scrollToSection("#home")}
        >
          <span className="brand-mark">AH</span>
          <span className="hidden sm:inline">Ahmad Hassan</span>
        </button>

        <div className="nav-menu">
          <div className="nav-links hidden md:flex">
            {navItems.map((item) => {
              if (item.subLinks?.length) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="nav-dropdown"
                    data-open={isOpen}
                  >
                    <button
                      type="button"
                      className="nav-link nav-dropdown-toggle"
                      aria-expanded={isOpen}
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <span aria-hidden className="chevron" />
                    </button>
                    <div className="nav-dropdown-menu">
                      {item.subLinks.map((subLink) => (
                        <button
                          key={subLink.label}
                          type="button"
                          className="dropdown-link"
                          onClick={() => scrollToSection(subLink.href)}
                        >
                          {subLink.label}
                          {subLink.description && <small>{subLink.description}</small>}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  type="button"
                  key={item.label}
                  className="nav-link"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="nav-actions hidden md:flex">
            <button
              type="button"
              className="solid-btn"
              onClick={() => scrollToSection("#contact")}
            >
              Contact
            </button>
          </div>

          <button
            type="button"
            className="nav-toggle md:hidden"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer md:hidden ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-links">
            {navItems.map((item) => (
              <div key={item.label} className="mobile-link-group">
                <button
                  type="button"
                  className="mobile-link"
                  onClick={() => scrollToSection(item.href ?? item.subLinks?.[0]?.href)}
                >
                  {item.label}
                </button>
                {item.subLinks && (
                  <div className="mobile-sub-links">
                    {item.subLinks.map((subLink) => (
                      <button
                        key={subLink.label}
                        type="button"
                        className="mobile-sub-link"
                        onClick={() => scrollToSection(subLink.href)}
                      >
                        {subLink.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="solid-btn w-full"
            onClick={() => scrollToSection("#contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
