import styles from '../css/page.module.scss'
import Convert from './convert';


function Page(){
    return(
        <div className={styles}>
            <Convert />
        </div>
    );
}

export default Page;