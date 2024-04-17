import styles from '../css/page.module.scss';

function Convert(){
    return(
        <div className={styles}>
            <div className={styles.page}>
                <span>
                    <input placeholder='Количество'></input>
                    <select>
                        <option>RUB</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    <button className={styles.sel}>⇆</button>
                    <input placeholder='Количество'></input>
                    <select>
                        <option>RUB</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </span>
            </div>
        </div>
    );
}

export default Convert;