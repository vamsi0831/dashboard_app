import React from 'react';
import LineChart from './components/SalesLineChart';
import PieChart from './components/SalesPieChart';

import './App.css'

const App = () => {
  const lineChartData = {
    labels: ['2024-08-01', '2024-08-02', '2024-08-03'],
    datasets: [
      {
        label: 'Sales vs Orders',
        data: [150, 200, 250],
        borderColor: 'rgba(75,192,192,1)',
        fill: false
      }
    ]
  };

  const pieChartData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#FF6384', '#36A2EB']
      }
    ]
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <LineChart data={lineChartData} />
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default App;
