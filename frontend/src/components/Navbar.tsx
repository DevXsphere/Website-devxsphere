import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Events', id: 'events' },
  { name: 'Stats', id: 'stats' },
  { name: 'Team', id: 'team' },
  { name: 'Contribute', id: 'contribute' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Highlight the section based on scroll position
    const handleScroll = () => {
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: item.id, top: rect.top };
        }
        return { id: item.id, top: Infinity };
      });
      const cur = offsets.reduce((best, curr) =>
        Math.abs(curr.top) < Math.abs(best.top) ? curr : best
      , offsets[0]);
      setActive(cur.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(id);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-950/60 border border-accent-200 dark:border-accent-700
          rounded-[2rem] flex pointer-events-auto transition-all
          px-2 py-1 shadow-lg
      ">
        {navItems.map(({ name, id }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className={`font-bold px-4 py-2 rounded-full outline-none transition-all
              ${active === id
                ? "text-accent-900 dark:text-accent-100 bg-accent-100/70 dark:bg-accent-800/30"
                : "text-gray-700 dark:text-gray-200 hover:bg-accent-200/40 dark:hover:bg-accent-700/40"
              }
            `}
            style={{ fontFamily: "var(--font-display, Inter, sans-serif)" }}
          >
            {name}
          </button>
        ))}

        {/* Blog page navigation */}
        <button
          onClick={() => window.location.pathname = "/blog"}
          className="font-bold px-4 py-2 rounded-full outline-none transition-all text-gray-700 dark:text-gray-200 hover:bg-accent-200/40 dark:hover:bg-accent-700/40 ml-2"
          style={{ fontFamily: "var(--font-display, Inter, sans-serif)" }}
        >
          Blog
        </button>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="ml-3 flex items-center justify-center w-9 h-9 rounded-full transition-all border border-transparent hover:bg-accent-200/40 dark:hover:bg-accent-700/40"
        >
          <span
            className="inline-block align-middle text-xl"
            style={{ fontFamily: "var(--font-display, Inter, sans-serif)" }}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;