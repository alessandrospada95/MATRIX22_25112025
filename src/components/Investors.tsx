export default function Investors() {
  const investmentThesis = [
    {
      title: 'A horizontal need across industries',
      subtitle: 'Market',
      description:
        'Any system that changes over time generates trajectories: customers, machines, portfolios, signals, behaviors. Matrix22.ai is designed as a horizontal layer that can be applied where evolution matters — from digital products to industry, finance, healthcare, and beyond.',
    },
    {
      title: 'From snapshots to trajectories',
      subtitle: 'Thesis',
      description:
        'Our thesis is simple: AI that only looks at snapshots will become obsolete in high-stakes environments. The winners will be platforms that understand how systems move, where they are likely to go, and how confident we can be in those predictions.',
    },
    {
      title: 'Data, dynamics, and explainability',
      subtitle: 'Moat',
      description:
        'By focusing on evolution, Matrix22.ai accumulates a unique view of how systems behave over time. This trajectory-centric perspective, combined with probabilistic outputs and built-in explainability, forms a defensible foundation that is difficult to replicate with purely static or opaque models.',
    },
    {
      title: 'Builders who know both AI and real-world constraints',
      subtitle: 'Team & Execution',
      description:
        'We are a team used to building AI-powered products in environments where failure has a cost and regulation matters. Our roadmap is intentionally focused: start with the most data-rich, evolution-sensitive use cases, then expand horizontally as our intelligence layer matures.',
    },
  ];

  return (
    <section id="investors" className="bg-[#F5F5F5] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#555555]">
            Investors
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-black max-w-4xl mx-auto leading-tight">
            The next wave of AI is not about more models.
            <br />
            It's about understanding how the world evolves.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-[#333333] leading-relaxed mb-20">
          <p>
            In the first wave of AI, static models were enough: predict a click,
            recognize an image, autocomplete a sentence.
          </p>
          <p>
            But enterprise reality is different. Systems are in constant motion.
            Customers change their behavior. Markets flip regimes. Machines wear
            out and adapt. Regulations redefine what "acceptable" intelligence
            means.
          </p>
          <p>
            Investors are now looking for infrastructure that can{' '}
            <span className="font-medium text-black">
              survive and adapt
            </span>{' '}
            to this evolution, not just short-lived use cases.
          </p>
          <p>
            Matrix22.ai is positioned at this inflection point: a deep-tech
            platform designed to make AI{' '}
            <span className="font-medium text-black">evolution-aware</span>,{' '}
            <span className="font-medium text-black">probabilistic</span>, and{' '}
            <span className="font-medium text-black">regulation-ready</span>.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-light text-black text-center mb-4">
            Why invest in Matrix22.ai
          </h3>
          <p className="text-center text-[#555555] max-w-3xl mx-auto">
            We are building a focused, defensible platform at the intersection
            of temporal data, predictive intelligence, and AI governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {investmentThesis.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#DDDDDD] p-8 rounded-lg hover:border-[#999999] transition-all duration-300 group hover:shadow-lg"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#888888] mb-2">
                    {item.subtitle}
                  </p>
                  <h4 className="text-xl font-light text-black group-hover:text-[#333333] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <p className="text-lg text-black max-w-3xl mx-auto font-light">
            We believe the future belongs to AI that understands how systems
            evolve — and we are building the engine to power that future.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://calendly.com/matrix22/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-[#222222] transition-all hover:shadow-xl hover:shadow-black/20"
            >
              Book a meeting
            </a>

            <p className="text-sm text-[#666666]">
              Prefer email?{' '}
              <a
                href="mailto:hello@matrix22.ai"
                className="font-medium text-black hover:underline"
              >
                Get in touch at hello@matrix22.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
