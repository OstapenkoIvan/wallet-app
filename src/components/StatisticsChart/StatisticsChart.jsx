import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getUserBalance } from 'redux/session/session-selectors';

// import exempleDataStat from 'assets/exempleDataStat';
import { useSelector } from 'react-redux';
// import chartColorsArr from 'assets/chartColorsArr';

ChartJS.register(ArcElement, Tooltip);

// const statChartData = {
//   labels: [],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [],
//       backgroundColor: [
//         '#FED057',
//         '#FFD8D0',
//         '#FD9498',
//         '#C5BAFF',
//         '#6E78E8',
//         '#4A56E2',
//         '#81E1FF',
//         '#24CCA7',
//         '#00AD84',
//         '#00AD34',
//         '#60AD20',
//       ],

//       borderWidth: 0,
//     },
//   ],
// };

// statChartData.labels = exempleDataStat.categoriesSummary.map(el => {
//   if (el.type === 'EXPENSE') {
//     return el.name;
//   } else {
//     // eslint-disable-next-line
//     return;
//   }
// });

// statChartData.datasets[0].data = exempleDataStat.categoriesSummary.map(el => {
//   if (el.type === 'EXPENSE') {
//     return el.total;
//   } else {
//     // eslint-disable-next-line
//     return;
//   }
// });

// statChartData.datasets[0].backgroundColor = chartColorsArr;

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
