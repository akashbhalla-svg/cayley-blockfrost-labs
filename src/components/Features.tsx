import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a Slice?",
    answer:
      "Within project Cayley, we call a slice a subset of data being indexed for fast parallel querying and minimal redundancy.",
  },
  {
    question: "Which blockchains are supported?",
    answer:
      "Cayley plans to support Cardano and Bitcoin by end of 2026.",
  },
  {
    question: "What is the Icebreakers program?",
    answer:
      "The Icebreakers program is an ongoing incentivized testing initiative, running for over a year, featuring a network of Cardano node operators who participate by sharing their node resources. These operators facilitate access to data stored on the Cardano blockchain, aiming to decentralize Blockfrost by leveraging the existing community infrastructure.",
  },
  {
    question: "How does project Cayley relate to Icebreakers?",
    answer:
      "Project Cayley is the result of learnings from the Icebreakers program. The insights gained from running a decentralized network of node operators directly shaped the design and architecture of Cayley.",
  },
  {
    question: "Is Cayley open source?",
    answer:
      "Yes. As with everything we do, Cayley will be completely open source. Check our GitHub for the latest code and documentation.",
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
