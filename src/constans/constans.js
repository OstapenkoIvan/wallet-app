export const BASE_URL = 'https://wallet.goit.ua/api/';

export const PRIVATE_URL =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

// export const MONTH = [
//   { monthName: 'January', monthNumber: 1 },
//   { monthName: 'February', monthNumber: 2 },
//   { monthName: 'March', monthNumber: 3 },
//   { monthName: 'April', monthNumber: 4 },
//   { monthName: 'May', monthNumber: 5 },
//   { monthName: 'June', monthNumber: 6 },
//   { monthName: 'July', monthNumber: 7 },
//   { monthName: 'August', monthNumber: 8 },
//   { monthName: 'September', monthNumber: 9 },
//   { monthName: 'October', monthNumber: 10 },
//   { monthName: 'November', monthNumber: 11 },
//   { monthName: 'December', monthNumber: 12 },
// ];
export const MONTH = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
  getKeyByValue: function (value) {
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        if (this[prop] === value) return prop;
      }
    }
  },
};

export const MONTH_NAMES = Object.keys(MONTH);

export const YEARS = [];

for (let i = 2000; i <= 2030; i += 1) {
  YEARS.push(i);
}

export const BASE_COLORS = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];
