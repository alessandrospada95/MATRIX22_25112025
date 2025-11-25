import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const principles = [
    {
      title: 'Evolution-first thinking',
      description: 'We look at trajectories, not isolated events.',
    },
    {
      title: 'Measured uncertainty',
      description: 'We believe probabilities must be explicit, not implied.',
    },
    {
      title: 'Transparent by design',
      description:
        'Every prediction should be explainable, auditable, and accountable.',
    },
    {
      title: 'Regulation-ready',
      description:
        'We are building with AI regulation in mind from day zero, not as an afterthought.',
    },
  ];

  return (
    <section id="about" className="bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#8A8A8A]">
              About Matrix22.ai
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
              Born from the gap between static AI and a dynamic world.
            </h2>

            <div className="space-y-4 text-[#C7C7C7] leading-relaxed">
              <p>
                The world doesn't stand still. Markets shift. Customers change.
                Systems drift.
              </p>
              <p>
                Most AI engines still read reality as a sequence of frozen
                snapshots. They predict the next point without truly
                understanding the motion that generated it.
              </p>
              <p>
                Matrix22.ai was created to bridge that gap. We are building a
                new intelligence layer that focuses on{' '}
                <span className="text-white font-medium">
                  how things evolve
                </span>
                , not just how they look in a single moment.
              </p>
              <p>
                Our team combines experience in AI, data-intensive systems, and
                building products for highly regulated and high-stakes
                environments. The result is a platform that treats time,
                uncertainty, and risk as first-class citizens.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-white mb-6">
                What we stand for
              </h3>
              <div className="space-y-5">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="flex gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#555555] flex-shrink-0 mt-0.5 group-hover:text-[#888888] transition-colors" />
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-[#C7C7C7]">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
