"use client"

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { PopulationChartProps, PopulationData } from "@/types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PopulationChart({
  populationData,
}: PopulationChartProps) {
  const years = populationData.map(
    (dataPoint: PopulationData) => dataPoint.year
  );
  const values = populationData.map(
    (dataPoint: PopulationData) => dataPoint.value
  );

  const data = {
    labels: years,
    datasets: [
      {
        label: "Population over Years",
        data: values,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const, 
      },
      title: {
        display: true,
        text: "Historical Population Data",
      },
    },
  };

  return <Line data={data} options={options} />;
}
