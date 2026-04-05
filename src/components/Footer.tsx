import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2 font-['Space_Grotesk'] text-sm font-semibold text-foreground">
          <span className="text-primary">◈</span> Cayley Protocol
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Twitter size={18} /></a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Github size={18} /></a>
          <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Discord</a>
        </div>

        <p className="text-xs text-muted-foreground">© 2026 Cayley Protocol. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
