import { Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          Built by <a href="https://blockfrost.io" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">Blockfrost.io</a> and the community.
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Twitter size={18} /></a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Github size={18} /></a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><MessageCircle size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
