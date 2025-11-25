import { useEffect, useRef } from 'react';

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (visualRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        visualRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProject = () => {
    const element = document.getElementById('project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#050505] flex items-center pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#8A8A8A]">
              Evolving Intelligence for a moving world
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white">
              AI that doesn't just see the moment.
              <br />
              <span className="text-[#C7C7C7]">
                It understands how it will evolve.
              </span>
            </h1>
          </div>

          <p className="text-lg text-[#C7C7C7] max-w-xl leading-relaxed">
            Matrix22.ai builds a new layer of intelligence that learns from how
            systems change over time — helping leaders anticipate, not just
            react.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://calendly.com/matrix22/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-[#E5E5E5] transition-all hover:shadow-lg hover:shadow-white/10 text-center"
            >
              Book a meeting
            </a>
            <button
              onClick={scrollToProject}
              className="px-8 py-4 border border-[#2D2D2F] text-white text-sm font-medium rounded-full hover:bg-[#111111] transition-all text-center"
            >
              Explore the project
            </button>
          </div>

          <p className="text-sm text-[#8A8A8A] pt-8 max-w-xl leading-relaxed">
            Designed for enterprises and investors who know that timing, risk,
            and evolution matter more than static predictions.
          </p>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          <div
            ref={visualRef}
            className="transition-transform duration-500 ease-out"
          >
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#555555" />
                  <stop offset="100%" stopColor="#1A1A1A" />
                </linearGradient>
              </defs>
              <path
                d="M50 200 Q100 100, 150 200 T250 200 T350 200"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              <path
                d="M50 220 Q120 140, 180 220 T280 220 T350 220"
                stroke="url(#gradient1)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
                className="animate-pulse"
                style={{ animationDuration: '5s', animationDelay: '0.5s' }}
              />
              <path
                d="M50 180 Q90 80, 140 180 T240 180 T350 180"
                stroke="url(#gradient1)"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
                className="animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '1s' }}
              />
              <circle cx="150" cy="200" r="4" fill="#FFFFFF" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="250" cy="200" r="4" fill="#FFFFFF" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
