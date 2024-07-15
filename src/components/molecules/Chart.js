import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Chart.css';

const generateRandomData = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

const Chart = () => {
  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First Dataset',
        data: generateRandomData(),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const regenerateData = () => {
    setData({
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: generateRandomData(),
        },
      ],
    });
  };

  return (
    <div className="molecule-chart">
      <Line data={data} />
      <button onClick={regenerateData} className="regenerate-button">Regenerate Chart</button>
    </div>
  );
};

export default Chart;