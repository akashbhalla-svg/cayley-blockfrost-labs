import { useState } from "react";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const singleData = [
  { throughput: 150, rawGrowth: 394, indexedGrowth: 3.94, indexedCostMo: 263.5, indexedCostYr: 3162, yearlyPct: 3637, fiveYrGrowth: 236.4, fiveYrCost: 15810, fiveYrPct: "~18,185%" },
  { throughput: 200, rawGrowth: 526, indexedGrowth: 5.26, indexedCostMo: 376.4, indexedCostYr: 4517, yearlyPct: 4855, fiveYrGrowth: 315.6, fiveYrCost: 22585, fiveYrPct: "~24,277%" },
  { throughput: 250, rawGrowth: 657, indexedGrowth: 6.57, indexedCostMo: 439.2, indexedCostYr: 5270, yearlyPct: 6065, fiveYrGrowth: 394.2, fiveYrCost: 26350, fiveYrPct: "~30,323%" },
  { throughput: 300, rawGrowth: 788, indexedGrowth: 7.88, indexedCostMo: 546.4, indexedCostYr: 6557, yearlyPct: 7274, fiveYrGrowth: 472.8, fiveYrCost: 32785, fiveYrPct: "~36,369%" },
  { throughput: 350, rawGrowth: 920, indexedGrowth: 9.2, indexedCostMo: 655.9, indexedCostYr: 7871, yearlyPct: 8492, fiveYrGrowth: 552.0, fiveYrCost: 39355, fiveYrPct: "~42,462%" },
];

const headers = [
  { main: "Throughput", unit: "(TxkB/s)" },
  { main: "Raw Growth", unit: "(GB/mo)" },
  { main: "Indexed Growth", unit: "(TB/mo)" },
  { main: "Indexed Cost", unit: "($/mo)" },
  { main: "Indexed Cost", unit: "($/yr)" },
  { main: "Yearly % Incr", unit: "from 1.3TB", tooltip: "Current Blockfrost dataset." },
  { main: "5-yr Cumul. Growth", unit: "(TB)" },
  { main: "5-yr Cumul. Cost", unit: "($)" },
  { main: "5-yr %", unit: "from current" },
];

const fmt = (n: number, prefix = "") => `~${prefix}${n.toLocaleString()}`;

const GrowthChart = () => {
  const [tab, setTab] = useState<"single" | "network">("single");
  const multiplier = tab === "network" ? 100 : 1;

  const rows = singleData.map((r) => ({
    throughput: r.throughput,
    rawGrowth: fmt(r.rawGrowth),
    indexedGrowth: `~${(r.indexedGrowth * multiplier).toLocaleString()}`,
    indexedCostMo: fmt(r.indexedCostMo * multiplier, "$"),
    indexedCostYr: fmt(r.indexedCostYr * multiplier, "$"),
    yearlyPct: `~${(r.yearlyPct * multiplier).toLocaleString()}%`,
    fiveYrGrowth: `~${(r.fiveYrGrowth * multiplier).toLocaleString()}`,
    fiveYrCost: fmt(r.fiveYrCost * multiplier, "$"),
    fiveYrPct: r.fiveYrPct,
  }));

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why Do We <span className="text-primary">Need It</span>
          </h2>
          <blockquote className="mt-6 text-lg italic text-muted-foreground max-w-2xl mx-auto border-l-4 border-primary/40 pl-5 text-left">
            "At Blockfrost, we see that 99% of users consume just 1% of the dataset. Requiring every indexer to store 100% of the data will hurt decentralization over time — we need to solve this before it becomes a problem."
          </blockquote>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Predicted Cardano <span className="text-primary">Growth Patterns</span> after Leios Scaling
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">
            Based on <a href="https://cips.cardano.org/cip/CIP-0164" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">CIP-0164</a>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setTab("single")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              tab === "single"
                ? "bg-primary/15 border border-primary/40 text-primary"
                : "bg-card/40 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            Single Indexer
          </button>
          <button
            onClick={() => setTab("network")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              tab === "network"
                ? "bg-primary/15 border border-primary/40 text-primary"
                : "bg-card/40 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            Entire Network (100+ Icebreakers)
          </button>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/30 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/60 bg-primary/10 hover:bg-primary/10">
                {headers.map((h) => (
                  <TableHead key={h.main + h.unit} className="text-primary font-bold text-xs px-3">
                    <div className="leading-tight">{h.main}</div>
                    <div className="text-[10px] font-medium text-primary/60 flex items-center gap-1">
                      {h.unit}
                      {"tooltip" in h && h.tooltip && (
                        <TooltipProvider delayDuration={200}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info size={10} className="inline-block cursor-help opacity-60 hover:opacity-100 transition-opacity" />
                            </TooltipTrigger>
                            <TooltipContent side="top" className="text-xs">
                              {h.tooltip}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.throughput} className="border-border/40 hover:bg-secondary/30">
                  <TableCell className="font-semibold text-foreground">{row.throughput}</TableCell>
                  <TableCell className="text-muted-foreground">{row.rawGrowth}</TableCell>
                  <TableCell className="text-muted-foreground">{row.indexedGrowth}</TableCell>
                  <TableCell className="text-muted-foreground">{row.indexedCostMo}</TableCell>
                  <TableCell className="text-muted-foreground">{row.indexedCostYr}</TableCell>
                  <TableCell className="text-muted-foreground">{row.yearlyPct}</TableCell>
                  <TableCell className="text-muted-foreground">{row.fiveYrGrowth}</TableCell>
                  <TableCell className="text-muted-foreground">{row.fiveYrCost}</TableCell>
                  <TableCell className="text-muted-foreground">{row.fiveYrPct}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground italic">
          Table 1: Predicted growth patterns based on <a href="https://cips.cardano.org/cip/CIP-0164" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">CIP-0164</a> for a {tab === "single" ? "single indexer" : "network of 100+ Icebreakers"}
        </p>
      </div>
    </section>
  );
};

export default GrowthChart;
