import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getUserBalance } from 'redux/session/session-selectors';
import { BASE_COLORS } from '../../constans/constans';

import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip);

const options = {
  cutout: '70%',
};

export default function StatisticsChart({ statChartData = {} }) {
  const { categoriesSummary } = statChartData;
  const [data, setData] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [labels, setLabels] = useState('');

  const donut = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: data,
        backgroundColor: backgroundColor,

        borderWidth: 0,
      },
    ],
  };

  useState(() => {
    const nameArr = categoriesSummary.map(item => item.total);
    const colorsArr = categoriesSummary.map((_, index) => BASE_COLORS[index]);
    const labelsArr = categoriesSummary.map(item => item.name);
    setData(nameArr);
    setBackgroundColor(colorsArr);
    setLabels(labelsArr);
  });

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

  return <Doughnut plugins={plugins} options={options} data={donut} />;
}
