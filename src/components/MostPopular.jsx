import React, { useRef, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const MostPopular = ({ chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chartInstance.destroy();
    }
  }, [chartData]);

  return (
    <div>
      <h2>Genre Popularity</h2>
      <Bar ref={chartRef} data={chartData} />
    </div>
  );
};

export default MostPopular;
