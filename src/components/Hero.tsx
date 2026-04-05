import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Multichain · Decentralized · Open Source
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Decentralized{" "}
          <span className="text-primary text-glow-cyan">Slice Indexing</span>
          {" "}for Every Chain
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Cayley Protocol enables permissionless, multichain data indexing through a novel slice architecture.
          Query any blockchain with zero trust assumptions.
        </p>

        <div className="mt-6">
          <Button size="lg" variant="outline" className="font-semibold text-base px-8 gap-2 border-border hover:bg-secondary">
            <BookOpen size={18} /> Read Docs
          </Button>
        </div>
      </div>

      {/* Slice Animation */}
      <div className="relative z-10 w-full max-w-[920px] mt-16 px-4">
        <iframe
          src="/slice-animation.html"
          className="w-full border-0 rounded-xl"
          style={{ height: '900px', background: 'transparent' }}
          title="Cayley Slice Indexing Animation"
          scrolling="no"
        />
      </div>
    </section>
  );
};

export default Hero;
