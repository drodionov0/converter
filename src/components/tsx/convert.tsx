import { useEffect, useState } from 'react';
import styles from '../css/page.module.scss';

function Convert(){

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('rub');
    const [toCurrency, setToCurrency] = useState('usd');
    const [exchangeRate, setExchangeRate] = useState(0);

    

    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
            .then(data => {
                const rates = data.Valute;
                
                if (rates[toCurrency.toUpperCase()]) {
                    const exchangeRate = rates[toCurrency.toUpperCase()].Value;
                    setExchangeRate(exchangeRate);
                } else {
                    console.error("Валюта не найдена");
                }
            })
            .catch(error => console.error(error));
    }, [toCurrency]);

    const handleAmountChange = (e: any) => {
        setAmount(e.target.value)
    }

    const handleFromCurrencyChange  = (e: any) => {
        setFromCurrency(e.target.value)
    }
    const handleToCurrencyChange  = (e: any) => {
        setToCurrency(e.target.value)
    }

    const converted = amount * exchangeRate || 0;

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

                    <input placeholder='Количество' className={styles.inp} id='val' value={converted}  ></input>
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