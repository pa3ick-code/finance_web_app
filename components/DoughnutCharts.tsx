'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutCharts({accounts = []}: DoughnutChartProps) {
    const data = {
        datasets: [{
            label: "Bank",
            data: [1245,332,564],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
        }],
        labels: ['Acess', 'GTB', 'Zenith']
    }
  return (
      <Doughnut 
        data={data}
        options={{
            cutout: '60%',
            plugins:{
                legend:{
                display: false
            }}
        }}
      />
  );
}
