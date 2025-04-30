"use client";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation'; // Import the annotation plugin

// Register the necessary Chart.js components and the annotation plugin
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, annotationPlugin);

const ComparisonGraph = ({ skill }) => {
  const graphData = [
    { percentile: 10, students: 50 },
    { percentile: 20, students: 80 },
    { percentile: 30, students: 120 },
    { percentile: 50, students: 200 },
    { percentile: 70, students: 150 },
    { percentile: 90, students: 60 },
  ];

  const averagePercentile = 72;

  const labels = graphData.map((data) => `${data.percentile}%`);
  const studentCounts = graphData.map((data) => data.students);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Students',
        data: studentCounts,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            xMin: labels.indexOf(`${skill.percentile}%`),
            xMax: labels.indexOf(`${skill.percentile}%`),
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            label: {
              content: `Your Percentile: ${skill.percentile}%`,
              enabled: true,
              position: 'top',
              backgroundColor: 'rgba(54, 162, 235, 0.8)',
              yAdjust: -10,
            },
          },
          {
            type: 'line',
            xMin: labels.indexOf(`${averagePercentile}%`) !== -1
              ? labels.indexOf(`${averagePercentile}%`)
              : labels.reduce((prev, curr, idx) => {
                  const currPercentile = parseInt(curr);
                  const prevPercentile = parseInt(labels[prev]);
                  return Math.abs(currPercentile - averagePercentile) < Math.abs(prevPercentile - averagePercentile) ? idx : prev;
                }, 0),
            xMax: labels.indexOf(`${averagePercentile}%`) !== -1
              ? labels.indexOf(`${averagePercentile}%`)
              : labels.reduce((prev, curr, idx) => {
                  const currPercentile = parseInt(curr);
                  const prevPercentile = parseInt(labels[prev]);
                  return Math.abs(currPercentile - averagePercentile) < Math.abs(prevPercentile - averagePercentile) ? idx : prev;
                }, 0),
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            label: {
              content: `Average: ${averagePercentile}%`,
              enabled: true,
              position: 'top',
              backgroundColor: 'rgba(255, 99, 132, 0.8)',
              yAdjust: 10,
            },
          },
        ],
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Percentile',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-medium">Comparison Graph (HTML)</h3>
      <p className="text-sm text-gray-600">
        You scored {skill.percentile}% percentile, which is{' '}
        {skill.percentile < averagePercentile ? 'lower' : 'higher'} than the average
        percentile {averagePercentile}% of all engineers who took this assessment.
      </p>
      <div className="mt-4">
        <div className="h-64">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;