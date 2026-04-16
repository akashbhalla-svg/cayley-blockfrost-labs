import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const chainData = [
  { chain: "Hyperliquid", dailyTxns: "561M", rawGrowth: "~3 TB/mo", costSelf: "Not feasible (closed-source)", costVendor: "$6–12K/yr (enterprise only)", gap: "No mid-market API access" },
  { chain: "Solana", dailyTxns: "~65M", rawGrowth: "~1 TB/day", costSelf: "$10–15K/mo (own node)", costVendor: "$499–2,900/mo (Helius)", gap: "$499/mo floor for production" },
  { chain: "Bitcoin", dailyTxns: "~500K", rawGrowth: "~7 GB/mo", costSelf: "$200–500/mo (full node)", costVendor: "Maestro / Alchemy from $49/mo", gap: "Ordinals/Runes indexing gaps" },
  { chain: "Cardano", dailyTxns: "~100K", rawGrowth: "~1.3 TB total", costSelf: "$100–300/mo (full node)", costVendor: "Blockfrost (50%+ market share)", gap: "Served: our home chain" },
];

const headers = [
  { main: "Chain" },
  { main: "Daily Txns" },
  { main: "Raw Data Growth" },
  { main: "Self-hosted Cost" },
  { main: "Vendor Cost" },
  { main: "The Gap" },
];

const GrowthChart = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why <span className="text-primary">Slice Indexing</span>
          </h2>
          <blockquote className="mt-6 text-lg italic text-muted-foreground max-w-2xl mx-auto border-l-4 border-primary/40 pl-5 text-left">
            "On-chain data on high-throughput chains is either free and useless, or expensive and overkill. There is no mid-market, API-first option for teams that need specific data slices, not the entire chain."
          </blockquote>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Data Volume & <span className="text-primary">Cost Landscape</span>
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">
            Current data access costs across target chains
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/30 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/60 bg-primary/10 hover:bg-primary/10">
                {headers.map((h) => (
                  <TableHead key={h.main} className="text-primary font-bold text-xs px-3">
                    <div className="leading-tight">{h.main}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {chainData.map((row) => (
                <TableRow key={row.chain} className="border-border/40 hover:bg-secondary/30">
                  <TableCell className="font-semibold text-foreground">{row.chain}</TableCell>
                  <TableCell className="text-muted-foreground">{row.dailyTxns}</TableCell>
                  <TableCell className="text-muted-foreground">{row.rawGrowth}</TableCell>
                  <TableCell className="text-muted-foreground">{row.costSelf}</TableCell>
                  <TableCell className="text-muted-foreground">{row.costVendor}</TableCell>
                  <TableCell className="text-primary font-medium">{row.gap}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground italic">
          Sources: Hyperliquid L1 docs (~100GB/day raw logs), Helius pricing, Allium/SonarX enterprise tiers
        </p>
      </div>
    </section>
  );
};

export default GrowthChart;
