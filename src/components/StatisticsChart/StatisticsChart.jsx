import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#FED057',
        '#FFD8D0',
        '#FD9498',
        '#C5BAFF',
        '#6E78E8',
        '#4A56E2',
        '#81E1FF',
        '#24CCA7',
        '#00AD84',
        '#00AD34',
        '#60AD20',
      ],

      borderWidth: 0,
    },
  ],
};

export default function StatisticsChart() {
  return <Doughnut data={data} />;
}

// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// import chartColorsArr from '../../assets/chartColorsArr';
// import exempleDataStat from '../../assets/exempleDataStat';

// export const chartData = {
//   //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: chartColorsArr,
//     },
//   ],
// };

// const dataArr = [];
// const DatasetData = exempleDataStat.categoriesSummary.map(({ total }) => {
//   return dataArr.push(+total);
// });

// console.log(dataArr);

// const StatisticsChart = () => {
//   return (
//     <div>
//       <Doughnut data={chartData} />
//     </div>
//   );
// };

// export default StatisticsChart;
