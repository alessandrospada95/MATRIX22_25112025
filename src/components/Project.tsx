export default function Project() {
  const pillars = [
    {
      title: 'Evolution-aware insights',
      description:
        'We model how entities evolve — customers, machines, financial signals, behaviors — capturing patterns of change, not just static states. This allows us to identify moments of instability, inflection, and opportunity before they become obvious.',
    },
    {
      title: 'Probabilistic predictions you can trust',
      description:
        "We don't just output a number. We express uncertainty as probability, giving leaders a clearer picture of risk, timing, and confidence. Decisions are backed by quantified, transparent estimates — instead of opaque scores.",
    },
    {
      title: 'Built for a regulated AI era',
      description:
        'Matrix22.ai is conceived for the world of AI regulation and accountability. Every insight is traceable, explainable, and meant to withstand scrutiny from auditors, regulators, and stakeholders.',
    },
  ];

  return (
    <section id="project" className="bg-[#0F0F10] py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#8A8A8A]">
            The Project
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white max-w-3xl mx-auto">
            A new layer of AI that learns from trajectories.
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-[#C7C7C7] leading-relaxed">
            <p>
              Matrix22.ai is building what we call{' '}
              <span className="text-white font-medium">
                Trajectory Intelligence
              </span>{' '}
              — an AI layer that focuses on the paths systems take over time,
              instead of analyzing isolated data points.
            </p>
            <p>Rather than asking "What is happening right now?", we ask:</p>
            <blockquote className="text-lg italic text-white border-l-2 border-[#2D2D2F] pl-6 py-2">
              "Where is this system coming from — and where is it most likely to
              go next?"
            </blockquote>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#2D2D2F] p-8 rounded-lg hover:bg-[#161616] hover:border-[#3D3D3F] transition-all duration-300 group hover:shadow-xl hover:shadow-black/20"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-light text-white group-hover:text-[#E5E5E5] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#C7C7C7] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            We are not replacing existing AI systems — we are giving them a
            deeper sense of time, risk, and evolution.
          </p>
        </div>
      </div>
    </section>
  );
}
