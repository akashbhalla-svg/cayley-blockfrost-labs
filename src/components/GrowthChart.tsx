import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const data = [
  { throughput: 150, rawGrowth: "~394", indexedGrowth: "~3.94", indexedCostMo: "~$263.50", indexedCostYr: "~$3,162", yearlyPct: "~3,637%", fiveYrGrowth: "~236.4", fiveYrCost: "~$15,810", fiveYrPct: "~18,185%" },
  { throughput: 200, rawGrowth: "~526", indexedGrowth: "~5.26", indexedCostMo: "~$376.40", indexedCostYr: "~$4,517", yearlyPct: "~4,855%", fiveYrGrowth: "~315.6", fiveYrCost: "~$22,585", fiveYrPct: "~24,277%" },
  { throughput: 250, rawGrowth: "~657", indexedGrowth: "~6.57", indexedCostMo: "~$439.20", indexedCostYr: "~$5,270", yearlyPct: "~6,065%", fiveYrGrowth: "~394.2", fiveYrCost: "~$26,350", fiveYrPct: "~30,323%" },
  { throughput: 300, rawGrowth: "~788", indexedGrowth: "~7.88", indexedCostMo: "~$546.40", indexedCostYr: "~$6,557", yearlyPct: "~7,274%", fiveYrGrowth: "~472.8", fiveYrCost: "~$32,785", fiveYrPct: "~36,369%" },
  { throughput: 350, rawGrowth: "~920", indexedGrowth: "~9.20", indexedCostMo: "~$655.90", indexedCostYr: "~$7,871", yearlyPct: "~8,492%", fiveYrGrowth: "~552.0", fiveYrCost: "~$39,355", fiveYrPct: "~42,462%" },
];

const headers = [
  "Throughput (TxkB/s)",
  "Raw Growth (GB/mo)",
  "Indexed Growth (TB/mo)",
  "Indexed Cost ($/mo)",
  "Indexed Cost ($/yr)",
  "Yearly % Incr from 1.3TB",
  "5-yr Cumul. Growth (TB)",
  "5-yr Cumul. Cost ($)",
  "5-yr % from current state",
];

const GrowthChart = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why Do We <span className="text-primary">Need It</span>
          </h2>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Predicted <span className="text-primary">Growth Patterns</span>
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">
            Based on CIP-0164 for a single indexer — with 100+ Icebreakers in production.
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/30 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/60 bg-primary/10 hover:bg-primary/10">
                {headers.map((h) => (
                  <TableHead key={h} className="text-primary font-bold text-xs whitespace-nowrap">
                    {h}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
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
          Table 2.1: Predicted growth patterns based on CIP-0164 for a single indexer (we have more than 100+ Icebreakers)
        </p>
      </div>
    </section>
  );
};

export default GrowthChart;
