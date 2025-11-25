export default function Footer() {
  return (
    <footer className="bg-[#050505] py-16 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-3">
            <h3 className="text-xl font-light text-white">Matrix22.ai</h3>
            <p className="text-sm text-[#8A8A8A] max-w-md">
              Evolving Intelligence for a moving world.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-[#C7C7C7] mb-2">
                Contact:{' '}
                <a
                  href="mailto:hello@matrix22.ai"
                  className="text-white hover:underline"
                >
                  hello@matrix22.ai
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://calendly.com/matrix22/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#C7C7C7] hover:text-white transition-colors w-fit"
              >
                Book a meeting
              </a>
              <button className="text-sm text-[#8A8A8A] hover:text-[#C7C7C7] transition-colors w-fit">
                Request investor deck
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A1A1A]">
          <p className="text-xs text-[#555555]">
            © Matrix22.ai – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
