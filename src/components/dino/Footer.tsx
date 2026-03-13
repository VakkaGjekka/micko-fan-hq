const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-center">
      <p className="font-body text-background/80 text-sm">
        This fan club proudly supports <span className="font-bold text-sunny">Swedish Papi</span> — the one and only. 💛
      </p>
      <p className="font-body text-background/40 text-xs mt-2">
        © {new Date().getFullYear()} Swedish Papi Fan Club. All vibes reserved.
      </p>
    </footer>
  );
};

export default Footer;
