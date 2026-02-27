/**
 * Stakes Section
 * Shows the pitfalls and risks of AI adoption
 * Hemingway style: Short, punchy sentences. Clear stakes.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Clock, Users, DollarSign, Target } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const failureData = [
  { name: "Lack of Strategy", value: 35, color: "#DC2626" },
  { name: "Poor Data Quality", value: 28, color: "#E04040" },
  { name: "Skills Gap", value: 22, color: "#E85C5C" },
  { name: "No Governance", value: 15, color: "#F07878" },
];

const pitfalls = [
  {
    icon: Target,
    title: "No Clear Strategy",
    description: "AI without direction is expensive experimentation.",
  },
  {
    icon: Users,
    title: "Skills Shortage",
    description: "Talent is scarce. Retention is harder.",
  },
  {
    icon: DollarSign,
    title: "Hidden Costs",
    description: "Infrastructure, training, maintenance. They add up.",
  },
  {
    icon: Clock,
    title: "Time to Value",
    description: "Months become years. Stakeholders lose patience.",
  },
];

export default function StakesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stakes" className="py-24 md:py-40 bg-background" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#DC2626] bg-[#DC2626]/10 rounded-full">
            The Reality
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The Stakes Are High
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most AI initiatives fail. Not because the technology is flawed. 
            Because the approach is broken.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Interactive Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#DC2626]/10">
                <AlertTriangle className="h-5 w-5 text-[#DC2626]" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Why AI Projects Fail
              </h3>
            </div>
            
            <div className="h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={failureData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 114, 128, 0.2)" />
                  <XAxis type="number" stroke="#6B7280" fontSize={12} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    stroke="#6B7280"
                    fontSize={12}
                    width={100}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                    formatter={(value: number) => [`${value}%`, "Failure Rate"]}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {failureData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Source: Industry analysis of enterprise AI implementations
            </p>
          </motion.div>

          {/* Right: Pitfall Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pitfalls.map((pitfall, index) => (
              <motion.div
                key={pitfall.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-border transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-[#DC2626]/10 w-fit mb-4 group-hover:bg-[#00A3E0]/10 transition-colors">
                  <pitfall.icon className="h-5 w-5 text-[#DC2626] group-hover:text-[#00A3E0] transition-colors" />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">
                  {pitfall.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {pitfall.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-[#DC2626]/10 to-[#DC2626]/10 rounded-2xl p-6 md:p-8 border border-[#DC2626]/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="p-3 rounded-full bg-[#DC2626]/20">
              <TrendingDown className="h-6 w-6 text-[#DC2626]" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                The cost of inaction is higher than the cost of action.
              </h4>
              <p className="text-muted-foreground">
                Competitors are moving. Markets are shifting. The window for advantage is closing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
