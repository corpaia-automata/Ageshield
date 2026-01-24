const Footer = () => {
  return (
    <footer className="px-6 py-8 text-center">
      <p className="text-xs text-muted-foreground font-sans max-w-2xl mx-auto">
        AgeShield™ is a preventive health optimisation programme. It does not replace primary, acute, or emergency medical care. Individual outcomes may vary.
      </p>
      <p className="mt-4 text-xs text-muted-foreground/60 font-sans">
        © {new Date().getFullYear()} Mendiv. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
