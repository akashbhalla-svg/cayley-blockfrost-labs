import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-foreground">
          <span className="text-primary">◈</span> Cayley
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Docs</a>
          <Button size="sm" className="glow-cyan font-semibold">
            Launch App
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 md:hidden">
          <a href="#features" className="text-sm text-muted-foreground">Features</a>
          <a href="#" className="text-sm text-muted-foreground">How It Works</a>
          <a href="#" className="text-sm text-muted-foreground">Docs</a>
          <Button size="sm" className="glow-cyan font-semibold w-fit">Launch App</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
