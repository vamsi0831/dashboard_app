import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-07-01', sales: 2400, orders: 2400 },
  { date: '2024-07-02', sales: 2210, orders: 2290 },
  { date: '2024-07-03', sales: 2290, orders: 2000 },
  { date: '2024-07-04', sales: 2000, orders: 2181 },
  { date: '2024-07-05', sales: 2181, orders: 2500 },
  { date: '2024-07-06', sales: 2500, orders: 2100 },
  { date: '2024-07-07', sales: 2100, orders: 2300 },
];

const SalesLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
