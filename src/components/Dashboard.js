import React from 'react';
import SalesLineChart from './SalesLineChart';
import SalesPieChart from './SalesPieChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Inventory</li>
          <li>Order</li>
          <li>Returns</li>
          <li>Customers</li>
          <li>Shipping</li>
          <li>Channel</li>
          <li>Integration</li>
          <li>Calculators</li>
          <li>Reports</li>
          <li>Account</li>
        </ul>
      </div>
      <div className="content">
        <h2>Dashboard</h2>
        <div className="charts">
          <div className="chart-line">
            <SalesLineChart />
          </div>
          <div className="chart-pie">
            <SalesPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
