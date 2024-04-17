import { useEffect, useState } from 'react';
import styles from '../css/page.module.scss';

function Convert(){

    var myHeaders = new Headers();
    myHeaders.append("apikey", "gbAuflq1LDfrQliJCAuU3jYn63ZSgdLl");

    interface MyObj extends RequestInit {
        headers: any;
      }
    
      var requestOptions: MyObj = {
        method: 'GET',
        headers: myHeaders
      };
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('rub');
    const [toCurrency, setToCurrency] = useState('usd');
    const [exchangeRate, setExchangeRate] = useState(0);

    useEffect(() => {
        if (fromCurrency && toCurrency) {
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${fromCurrency}&from=${toCurrency}&amount=${setAmount}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    setExchangeRate(data.rates[toCurrency]);
                })
                .catch(error => console.error('Error fetching exchange rate:', error));
        }
    }, [fromCurrency, toCurrency]);

    const handleAmountChange = (e: any) => {
        setAmount(e.target.value)
    }

    const handleFromCurrencyChange  = (e: any) => {
        setFromCurrency(e.target.value)
    }
    const handleToCurrencyChange  = (e: any) => {
        setToCurrency(e.target.value)
    }

    const converted:number = amount * exchangeRate;

    let zero = 0;

    


    return(
        <div className={styles}>
            <div className={styles.page}>
                <span>
                    <input placeholder='Количество' className={styles.inp} type='number' value={amount} onChange={handleAmountChange} defaultValue={zero}></input>
                    <select className={styles.vl} value={fromCurrency} onChange={handleFromCurrencyChange}>
                        <option value='rub'>RUB</option>
                        <option value='usd'>USD</option>
                        <option value='eur'>EUR</option>
                    </select>
                    <button className={styles.sel}>⇆</button>
                    {exchangeRate !== 0 && (
                        <input placeholder='Converted Amount' className={styles.inp} id='val' value={converted}></input>
                    )}
                    <input placeholder='Количество' className={styles.inp} id='val' defaultValue={zero} value={converted}  ></input>
                    <select className={styles.vl} value={toCurrency} onChange={handleToCurrencyChange}>
                        <option value='rub'>RUB</option>
                        <option value='usd'>USD</option>
                        <option value='eur'>EUR</option>
                    </select>
                </span>
            </div>
        </div>
    );
}

export default Convert;