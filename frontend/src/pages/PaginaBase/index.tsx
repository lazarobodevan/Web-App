import {Outlet} from "react-router-dom"
import Header from "../../components/header";
import styles from './style.module.scss'

export default function BasePage(){
    return(
        <main>
            <Header/>
            <section className={styles.content}>
                <Outlet/>
            </section>
        </main>
    )
}