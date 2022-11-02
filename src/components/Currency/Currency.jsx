import { useEffect, useState } from 'react';
import s from 'components/Currency/Currency.module.scss';
// import { ReactComponent as Wave } from 'assets/images/vawe.svg';

export default function Currency() {
  const [rates, setRates] = useState([]);

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
        </tbody>
      </table>
      {/* <Wave className={s.icon} /> */}
    </div>
  );
}
