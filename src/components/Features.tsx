import { Globe, Shield, Layers, Code } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multichain Support",
    description: "Index data across Ethereum, Solana, Arbitrum, and more — all from a single unified protocol.",
  },
  {
    icon: Shield,
    title: "Decentralized Indexing",
    description: "No single point of failure. Indexers operate permissionlessly with cryptographic verification.",
  },
  {
    icon: Layers,
    title: "Slice Architecture",
    description: "Partition blockchain data into efficient slices for fast parallel querying and minimal redundancy.",
  },
  {
    icon: Code,
    title: "Developer-First",
    description: "Simple GraphQL APIs, comprehensive SDKs, and rich documentation to get you building in minutes.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-foreground sm:text-4xl">
            Built for the <span className="text-primary">Multichain</span> Future
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Everything you need to index, query, and build on top of any blockchain.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-xl border border-border/60 bg-card/50 p-8 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all group-hover:via-primary/40" />
              <div className="mb-4 inline-flex rounded-lg border border-border bg-secondary/40 p-3 text-primary">
                <f.icon size={22} />
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
