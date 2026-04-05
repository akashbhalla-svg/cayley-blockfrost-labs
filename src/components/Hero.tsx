import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Multichain · Decentralized · Open Source
        </div>

        <h1 className="font-['Space_Grotesk'] text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Decentralized{" "}
          <span className="text-primary text-glow-cyan">Slice Indexing</span>
          {" "}for Every Chain
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Cayley Protocol enables permissionless, multichain data indexing through a novel slice architecture.
          Query any blockchain with zero trust assumptions.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="glow-cyan font-semibold text-base px-8 gap-2">
            Get Started <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="font-semibold text-base px-8 gap-2 border-border hover:bg-secondary">
            <BookOpen size={18} /> Read Docs
          </Button>
        </div>

        {/* Decorative element */}
        <div className="mt-20 mx-auto w-full max-w-2xl">
          <div className="relative rounded-xl border border-border/60 bg-card/50 p-px">
            <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="rounded-xl bg-card/80 p-8">
              <div className="grid grid-cols-3 gap-4">
                {["Ethereum", "Solana", "Arbitrum"].map((chain) => (
                  <div key={chain} className="flex flex-col items-center gap-2 rounded-lg border border-border/40 bg-secondary/30 p-4">
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                    <span className="text-xs text-muted-foreground">{chain}</span>
                    <div className="h-1 w-full rounded-full bg-border">
                      <div className="h-1 rounded-full bg-primary/40" style={{ width: `${60 + Math.random() * 35}%` }} />
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
};

export default Hero;
