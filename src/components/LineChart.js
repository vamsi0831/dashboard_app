import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const options = {
    scales: {
      x: { type: 'time', time: { unit: 'day' } },
      y: { beginAtZero: true }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
