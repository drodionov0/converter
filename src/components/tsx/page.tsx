import styles from '../css/page.module.scss'
import Convert from './convert';
import Courses from './courses';


function Page(){
    return(
        <div className={styles}>
            <Convert />
            <Courses />
        </div>
    );
}

export default Page;