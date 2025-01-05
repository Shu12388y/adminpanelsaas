'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Line } from 'react-chartjs-2';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import 'chart.js/auto';
import { fetchInfo } from '@/config/fetch';



function AnalysisPage() {
  const [sales, setSales] = useState(0);
  const [users, setUsers] = useState(0);
  const [webpagePerformance, setWebpagePerformance] = useState({
    avgLoadTime: 0,
    bounceRate: 0,
    traffic: 0,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const userInfo = await fetchInfo('/api/analysis/users');
        const saleInfo = await fetchInfo('/api/analysis/orders');
        setUsers(userInfo.data.message);
        setSales(saleInfo.data.message);
        setWebpagePerformance({
          avgLoadTime: 1.8,
          bounceRate: 40,
          traffic: 4500,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

    return () => {
    };
  }, []);

  const trafficData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Traffic',
        data: [500, 600, 700, 550, 800, 750, 900],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold">Dashboard Analysis</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{sales}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{users}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Webpage Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{webpagePerformance.traffic}</p>
          </CardContent>
        </Card>
      </div>

      {/* Webpage Performance */}
      <div className="grid grid-rows-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Average Load Time:{' '}
              <span className="font-bold">
                {webpagePerformance.avgLoadTime}s
              </span>
            </p>
            <p>
              Bounce Rate:{' '}
              <span className="font-bold">
                {webpagePerformance.bounceRate}%
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={trafficData} />
          </CardContent>
        </Card>
      </div>

      {/* Webpage Details Table */}
      <div>
        <h2 className="text-xl font-bold mb-4">Webpage Details</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page URL</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead>Avg Time Spent</TableHead>
            </TableRow>
          </TableHeader>
          {/* <TableBody>
            {pageDetails.map((page) => (
              <TableRow key={page.url}>
                <TableCell>{page.url}</TableCell>
                <TableCell>{page.visits}</TableCell>
                <TableCell>{page.avgTimeSpent}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </div>
    </div>
  );
}

export default AnalysisPage;
