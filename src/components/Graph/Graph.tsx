// import { AreaChart } from "@mantine/charts";
// import { data } from "./data";

// function Graph() {
//   return (
//     <AreaChart
//       h={300}
//       data={data}
//       dataKey="date"
//       yAxisProps={{ domain: [0, 100] }}
//       referenceLines={[
//         { y: 40, label: "Average sales", color: "red.6" },
//         { x: "Mar 25", label: "Report out" },
//       ]}
//       series={[{ name: "Apples", color: "indigo.6" }]}
//     />
//   );
// }

// export default Graph;

import { AreaChart } from "@mantine/charts";
import { Card, Group, Button, Text, Divider } from "@mantine/core";
import { useState } from "react";

const chartData = [
  { month: "Jul", sales: 40 },
  { month: "Aug", sales: 45 },
  { month: "Sep", sales: 50 },
  { month: "Oct", sales: 70 },
  { month: "Nov", sales: 60 },
  { month: "Dec", sales: 350 },
];

export default function SalesGraph() {
  const [filter, setFilter] = useState("monthly");

  return (
    <Card padding={20} radius="lg" withBorder className="w-full bg-gray-100">
      {/* Title + Buttons */}
      <Group justify="space-between">
        <Text fw={700} size="xl">
          Sale Graph
        </Text>
        <Group gap="xs">
          {["weekly", "monthly", "yearly"].map((val) => (
            <Button
              key={val}
              variant={filter === val ? "filled" : "outline"}
              radius="md"
              color={filter === val ? "white" : "#232321"}
              bg={filter === val ? "#232321" : "white"}
              size="xs"
              onClick={() => setFilter(val)}
            >
              {val.toUpperCase()}
            </Button>
          ))}
        </Group>
      </Group>

      <Divider my="sm" color="black" />

      {/* Graph */}
      <AreaChart
        h={300}
        data={chartData}
        dataKey="month"
        series={[{ name: "sales", label: "Sales", color: "blue.6" }]}
        curveType="monotone"
        yAxisProps={{
          tickFormatter: (value: number) => `$${value}`,
        }}
        xAxisProps={{
          tick: { fontWeight: 600 },
        }}
        gridAxis="xy"
      />
    </Card>
  );
}
