const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-16 pb-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Indexed data for high-throughput chains
        </p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Blockfrost <span className="text-primary text-glow-cyan">Labs</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Slice-specific indexed data across Hyperliquid, Solana, Bitcoin and Cardano
        </p>

      </div>

      {/* Slice Animation */}
      <div className="relative z-10 mt-20 text-center max-w-2xl px-6">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          How it <span className="text-primary">Works</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          Independent operators each index specific slices of the chain, so no single provider needs to store everything. You define the slices you need, operators index them, and you query via API. Slice priority is demand-driven: the most requested data gets indexed first.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[920px] mt-10 px-4">
        <iframe
          src={import.meta.env.BASE_URL + "slice-animation.html"}
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
