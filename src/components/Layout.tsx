import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/problem", label: "Problem & Vision" },
  { to: "/product", label: "Product" },
  { to: "/system", label: "System Design" },
  { to: "/implementation", label: "Implementation" },
  { to: "/operation", label: "Operation" },
  { to: "/team", label: "Team" },
  { to: "/resources", label: "Resources" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dark nav bar — SmoothOperator inspired */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-dark">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14 section-padding">
          <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg text-nav-foreground">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              N
            </span>
            NurseAid
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to || (link.to !== "/" && location.pathname.startsWith(link.to))
                    ? "text-primary-foreground bg-nav-foreground/10"
                    : "text-nav-foreground/70 hover:text-nav-foreground hover:bg-nav-foreground/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-nav-foreground/70 hover:text-nav-foreground hover:bg-nav-foreground/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-nav-foreground/10"
            >
              <div className="section-padding py-3 flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "text-primary-foreground bg-nav-foreground/10"
                        : "text-nav-foreground/70 hover:text-nav-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1 pt-14">{children}</main>

      {/* Footer */}
      <footer className="nav-dark border-t border-nav-foreground/10">
        <div className="max-w-7xl mx-auto section-padding py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-nav-foreground">
              <span className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">N</span>
              <span className="font-display font-semibold">NurseAid</span>
              <span className="text-nav-foreground/50 text-sm">· Boston University Capstone 2025</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-nav-foreground/50">
              <Link to="/team" className="hover:text-nav-foreground transition-colors">Team</Link>
              <Link to="/resources" className="hover:text-nav-foreground transition-colors">Resources</Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-nav-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
