import style from '../css/course.module.scss';
import usa from '../attaches/160px-Flag_of_the_United_States_(Pantone).svg.png';
import euro from '../attaches/Flag_of_Europe.svg.png'
import { useEffect, useState } from 'react';


interface CurrencyData {
    Valute: {
      USD: {
        Value: number;
      },
      EUR: {
        Value: number;
      }
    }
  }


function Courses(){
    

      const [apiData, setApiData] = useState<CurrencyData | null>(null);

    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then((res) => res.json())
        .then((data) => setApiData(data));

    }, [apiData]);


    return(
        <div className={style.page}>

                <div className={style.cours}>
                    <img src={usa} alt='flagusa' width='50px' />
                    <p>1 рубль = { apiData?.Valute?.USD?.Value } USD</p>
                </div>

                <div className={style.cours}>
                    <img src={euro} alt='flageuro' width='50px' />
                    <p>1 рубль = { apiData?.Valute?.EUR?.Value } EUR</p>
                </div>
        </div>
    );
}

export default Courses;