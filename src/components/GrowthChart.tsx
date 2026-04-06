import { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    throughput: 150,
    rawGrowth: 394,
    indexedGrowth: 3.94,
    indexedCostMo: 263.5,
    indexedCostYr: 3162,
    yearlyPctIncr: 3637,
    fiveYrGrowth: 236.4,
    fiveYrCost: 15810,
    fiveYrPct: 18185,
  },
  {
    throughput: 200,
    rawGrowth: 526,
    indexedGrowth: 5.26,
    indexedCostMo: 376.4,
    indexedCostYr: 4517,
    yearlyPctIncr: 4855,
    fiveYrGrowth: 315.6,
    fiveYrCost: 22585,
    fiveYrPct: 24277,
  },
  {
    throughput: 250,
    rawGrowth: 657,
    indexedGrowth: 6.57,
    indexedCostMo: 439.2,
    indexedCostYr: 5270,
    yearlyPctIncr: 6065,
    fiveYrGrowth: 394.2,
    fiveYrCost: 26350,
    fiveYrPct: 30323,
  },
  {
    throughput: 300,
    rawGrowth: 788,
    indexedGrowth: 7.88,
    indexedCostMo: 546.4,
    indexedCostYr: 6557,
    yearlyPctIncr: 7274,
    fiveYrGrowth: 472.8,
    fiveYrCost: 32785,
    fiveYrPct: 36369,
  },
  {
    throughput: 350,
    rawGrowth: 920,
    indexedGrowth: 9.2,
    indexedCostMo: 655.9,
    indexedCostYr: 7871,
    yearlyPctIncr: 8492,
    fiveYrGrowth: 552.0,
    fiveYrCost: 39355,
    fiveYrPct: 42462,
  },
];

type MetricKey = "indexedGrowth" | "indexedCostMo" | "fiveYrGrowth" | "fiveYrCost" | "yearlyPctIncr";

const metrics: { key: MetricKey; label: string; unit: string; color: string }[] = [
  { key: "indexedGrowth", label: "Indexed Growth", unit: "TB/mo", color: "hsl(190, 95%, 55%)" },
  { key: "indexedCostMo", label: "Indexed Cost", unit: "$/mo", color: "hsl(160, 80%, 50%)" },
  { key: "fiveYrGrowth", label: "5-yr Cumul. Growth", unit: "TB", color: "hsl(270, 70%, 60%)" },
  { key: "fiveYrCost", label: "5-yr Cumul. Cost", unit: "$", color: "hsl(30, 90%, 55%)" },
  { key: "yearlyPctIncr", label: "Yearly % Incr from 1.3TB", unit: "%", color: "hsl(350, 80%, 55%)" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border/60 bg-card px-4 py-3 shadow-xl text-sm">
      <p className="font-semibold text-foreground mb-2">Throughput: {label} TxkB/s</p>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex justify-between gap-6 text-muted-foreground">
          <span style={{ color: p.color }}>{p.name}</span>
          <span className="font-mono text-foreground">
            {p.dataKey === "yearlyPctIncr" ? `~${p.value.toLocaleString()}%` :
             p.dataKey.includes("Cost") ? `~$${p.value.toLocaleString()}` :
             `~${p.value.toLocaleString()}`}
          </span>
        </div>
      ))}
    </div>
  );
};

const GrowthChart = () => {
  const [activeMetrics, setActiveMetrics] = useState<MetricKey[]>(["indexedGrowth", "fiveYrCost"]);

  const toggle = (key: MetricKey) => {
    setActiveMetrics((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Predicted <span className="text-primary">Growth Patterns</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">
            Based on CIP-0164 for a single indexer — with 100+ Icebreakers in production.
            Click the metrics below to toggle them on the chart.
          </p>
        </div>

        {/* Metric toggles */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {metrics.map((m) => {
            const active = activeMetrics.includes(m.key);
            return (
              <button
                key={m.key}
                onClick={() => toggle(m.key)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border/50 bg-card/40 text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                <span
                  className="mr-2 inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: m.color, opacity: active ? 1 : 0.3 }}
                />
                {m.label} ({m.unit})
              </button>
            );
          })}
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-border/60 bg-card/30 p-6">
          <ResponsiveContainer width="100%" height={420}>
            <ComposedChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(228, 30%, 16%)" />
              <XAxis
                dataKey="throughput"
                tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                tickFormatter={(v) => `${v} TxkB/s`}
                axisLine={{ stroke: "hsl(228, 30%, 16%)" }}
              />
              <YAxis
                tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                axisLine={{ stroke: "hsl(228, 30%, 16%)" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
              />
              {metrics.map((m) =>
                activeMetrics.includes(m.key) ? (
                  m.key === "fiveYrCost" || m.key === "yearlyPctIncr" ? (
                    <Bar
                      key={m.key}
                      dataKey={m.key}
                      name={`${m.label} (${m.unit})`}
                      fill={m.color}
                      fillOpacity={0.7}
                      radius={[4, 4, 0, 0]}
                    />
                  ) : (
                    <Line
                      key={m.key}
                      type="monotone"
                      dataKey={m.key}
                      name={`${m.label} (${m.unit})`}
                      stroke={m.color}
                      strokeWidth={2.5}
                      dot={{ r: 5, fill: m.color, strokeWidth: 0 }}
                      activeDot={{ r: 7, strokeWidth: 2, stroke: "hsl(228, 60%, 4%)" }}
                    />
                  )
                ) : null
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground italic">
          Table 2.1: Predicted growth patterns based on CIP-0164 for a single indexer (we have more than 100+ Icebreakers)
        </p>
      </div>
    </section>
  );
};

export default GrowthChart;
