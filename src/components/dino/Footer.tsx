const Footer = () => (
  <footer className="py-8 px-4 bg-[hsl(var(--dino-navy))] text-center">
    <p className="font-body text-white/80 text-sm">
      This fan club proudly supports <span className="font-bold text-[hsl(var(--dino-gold))]">Dino</span> — the Swedish Papi. 👑
    </p>
    <p className="font-body text-white/40 text-xs mt-2">
      © {new Date().getFullYear()} Swedish Papi Fan Club. All vibes reserved.
    </p>
  </footer>
);

export default Footer;
