import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Slice?",
    answer:
      "Slice is a decentralized indexing protocol that partitions blockchain data into efficient slices for fast parallel querying and minimal redundancy.",
  },
  {
    question: "Which blockchains are supported?",
    answer:
      "Slice currently targets Cardano, with plans to expand to other chains in the future.",
  },
  {
    question: "How does Slice differ from existing indexers?",
    answer:
      "Unlike centralized indexers, Slice operates permissionlessly with cryptographic verification and no single point of failure. Its slice architecture enables horizontal scaling.",
  },
  {
    question: "What is an Icebreaker?",
    answer:
      "An Icebreaker is a node in the Slice network that indexes a portion of the blockchain data and serves queries for its assigned slices.",
  },
  {
    question: "Is Slice open source?",
    answer:
      "Yes. Slice is built in the open and welcomes community contributions. Check our GitHub for the latest code and documentation.",
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
      </div>
    </section>
  );
};

export default Features;
