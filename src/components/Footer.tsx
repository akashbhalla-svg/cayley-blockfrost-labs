import { Github, MessageCircle } from "lucide-react";

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          Built by <a href="https://blockfrost.io" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">Blockfrost.io</a> and the community.
        </div>

        <div className="flex items-center gap-5">
          <a href="https://x.com/blockfrost_io/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground"><XIcon size={18} /></a>
          <a href="https://github.com/blockfrost/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground"><Github size={18} /></a>
          <a href="https://discord.gg/BfFRuU4Yq2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground"><MessageCircle size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
