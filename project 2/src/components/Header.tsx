import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-[#222222]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-light tracking-tight text-white hover:opacity-70 transition-opacity"
        >
          Matrix22.ai
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm text-[#C7C7C7] hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-[#C7C7C7] hover:text-white transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('project')}
            className="text-sm text-[#C7C7C7] hover:text-white transition-colors"
          >
            The Project
          </button>
          <button
            onClick={() => scrollToSection('investors')}
            className="text-sm text-[#C7C7C7] hover:text-white transition-colors"
          >
            Investors
          </button>
        </div>

        <a
          href="https://calendly.com/matrix22/intro-call"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 text-sm bg-white text-black rounded-full hover:bg-[#E5E5E5] transition-all hover:shadow-lg hover:shadow-white/10"
        >
          Book a meeting
        </a>
      </nav>
    </header>
  );
}
