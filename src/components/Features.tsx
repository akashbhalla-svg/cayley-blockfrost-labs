import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a slice?",
    answer:
      "A slice is a specific subset of on-chain data — for example, perpetual trade history on Hyperliquid, or decoded program state on Solana. Instead of indexing the entire chain, you define and query only the slices you need.",
  },
  {
    question: "Which blockchains are supported?",
    answer:
      "Blockfrost Labs supports Hyperliquid, Solana, Bitcoin and Cardano. Blockfrost already serves 50%+ of Cardano's API traffic with 5+ years of operating history — Labs extends the same infrastructure to high-throughput chains.",
  },
  {
    question: "How does slice indexing differ from full-chain indexing?",
    answer:
      "Full-chain indexers store everything — terabytes of data per month, most of which goes unused. Slice indexing lets you select specific data types (trades, order books, liquidations, program state) and only that data is indexed and served. You pay for what you use, not what you don't.",
  },
  {
    question: "What does the pricing look like?",
    answer:
      "Mid-market pricing starting at $250/month per chain for slice-specific API access. Multi-chain bundles from $400/month. Positioned between free public RPCs and $6-12K/year enterprise contracts.",
  },
  {
    question: "What is Cayley?",
    answer:
      "Cayley is our open-source slice indexing engine — the technology that powers Blockfrost Labs. It enables selective, demand-driven data indexing across multiple chains through a single API surface.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border/60 bg-card/50 px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 text-center text-xs text-muted-foreground italic">
          This is a live FAQ — use the channels below to ask questions and we'll keep adding them here. Check back often for updates!
        </p>
      </div>
    </section>
  );
};

export default Features;
