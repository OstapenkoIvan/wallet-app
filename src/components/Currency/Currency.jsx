import { useEffect, useState } from 'react';

import s from 'components/Currency/Currency.module.scss';

export default function Currency() {
  const [rates, setRates] = useState([]);
  const [value, setValue] = useState(100);
  const [exchangeType, setExchangeType] = useState('UAHUSD');

  useEffect(() => {
    const fetchCurrency = async () => {
      const data = await (
        await fetch(
          `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`
        )
      ).json();

      setRates(data);
    };
    fetchCurrency().catch(console.error);
  }, []);

  const usdBuy = rates.length > 0 ? Number(rates[0].buy).toFixed(2) : 0;
  const eurBuy = rates.length > 0 ? Number(rates[1].buy).toFixed(2) : 0;
  const usdSale = rates.length > 0 ? Number(rates[0].sale).toFixed(2) : 0;
  const eurSale = rates.length > 0 ? Number(rates[1].sale).toFixed(2) : 0;

  const calculateExchange = (value, exchangeType) => {
    switch (exchangeType) {
      case 'UAHUSD':
        if (!value) {
          break;
        }
        return Number(value / usdBuy).toFixed(2);
      case 'UAHEUR':
        if (!value) {
          break;
        }
        return Number(value / eurBuy).toFixed(2);
      case 'USDUAH':
        if (!value) {
          break;
        }
        return Number(value * usdSale).toFixed(2);
      case 'EURUAH':
        if (!value) {
          break;
        }
        return Number(value * eurSale).toFixed(2);
      default:
        break;
    }
  };

  const result = calculateExchange(value, exchangeType);
  return (
    <div className={s.thumb}>
      <table className={s.tables}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{usdBuy}</td>
            <td>{usdSale}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{eurBuy}</td>
            <td>{eurSale}</td>
          </tr>
          <tr>
            <td>
              <input
                className={s.inputField}
                name="value"
                type="number"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </td>
            <td>
              <select
                className={s.selectField}
                name="exchangeType"
                value={exchangeType}
                onChange={e => setExchangeType(e.target.value)}
              >
                <option value="UAHUSD">UAH {'>'} USD</option>
                <option value="UAHEUR">UAH {'>'} EUR</option>
                <option value="USDUAH">USD {'>'} UAH</option>
                <option value="EURUAH">EUR {'>'} UAH</option>
              </select>
            </td>
            <td>
              <span className={s.resultField}>{result}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
