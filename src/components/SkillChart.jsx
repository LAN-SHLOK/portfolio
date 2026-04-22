import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillChart = () => {
  const data = {
    labels: [
      'Frontend Dev',
      'Backend Dev',
      'Data Science',
      'Machine Learning',
      'System Design',
      'Cloud Architecture',
    ],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [95, 88, 92, 85, 80, 75],
        backgroundColor: 'rgba(0, 242, 255, 0.2)',
        borderColor: '#00f2ff',
        borderWidth: 2,
        pointBackgroundColor: '#00f2ff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00f2ff',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#888',
          font: {
            family: 'monospace',
            size: 10,
          },
        },
        ticks: {
          display: false,
          stepSize: 20,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-full p-4 glass-card rounded-3xl">
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillChart;
