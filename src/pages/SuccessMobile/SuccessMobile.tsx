import styles from "./SuccessMobile.module.sass";
import {useContext} from "react";
import {GlobalContext} from "../../store/GlobalState";
import { ReactComponent as SuccessLogo } from '../../assets/images/icon-success.svg';

export default function SuccessMobile(){
    const { email }: any = useContext(GlobalContext);

    return (
        <section className={styles.container}>
            <div className={styles.container__box}>
                <SuccessLogo/>
                <h1 className={styles.container__box_title}>Thanks for subscribing!</h1>
                <p className={styles.container__box_text}>A confirmation email has been sent to <strong>{email}</strong>.
                    Please open it and click the button inside to confirm your subscription</p>
            </div>
            <button className={styles.container__button}>Dismiss message</button>
        </section>

    )
}