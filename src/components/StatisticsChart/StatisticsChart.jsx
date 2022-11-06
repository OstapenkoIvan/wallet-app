import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getUserBalance } from 'redux/session/session-selectors';

// import exempleDataStat from 'assets/exempleDataStat';
import { useSelector } from 'react-redux';
// import chartColorsArr from 'assets/chartColorsArr';

ChartJS.register(ArcElement, Tooltip);

const options = {
  cutout: '70%',
};

export default function StatisticsChart({ statChartData }) {
  const userBalance = useSelector(getUserBalance);

  const plugins = [
    {
      beforeDraw: function (chart) {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        const fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'top';
        const text = `₴ ${userBalance}`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return <Doughnut plugins={plugins} options={options} data={statChartData} />;
}
