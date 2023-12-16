import styles from './Success.module.sass';
import { ReactComponent as SuccessLogo } from '../../assets/images/icon-success.svg';
import {useContext} from "react";
import {GlobalContext} from "../../store/GlobalState";

export default function Success(){
    const { email }: any = useContext(GlobalContext);

    return(
        <section className={styles.container}>
            <div className={styles.container__box}>
                <SuccessLogo/>
                <h1 className={styles.container__box_title}>Thanks for subscribing!</h1>
                <p className={styles.container__box_text}>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription</p>
                <button className={styles.container__box_button}>Dismiss message</button>
            </div>
        </section>
    )
}