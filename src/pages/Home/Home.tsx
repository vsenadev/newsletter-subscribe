import styles from './Home.module.sass'
import data from '../../data/home.json'
import { ReactComponent as CorrectLogo } from '../../assets/images/icon-list.svg'
import Banner from '../../assets/images/illustration-sign-up-desktop.svg'
import {useState} from "react";
import {validateEmail} from "../../utils/Home";

export default function Home(){
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    console.log(validEmail)
    return(
        <section className={styles.container}>
            <div className={styles.container__box}>
                <div className={styles.container__box_content}>
                    <h1 className={styles.container__box_content_title}>Stay updated!</h1>
                    <p className={styles.container__box_content_description}>Join 60,000+ product managers receiving monthly updates on:</p>
                    <div className={styles.container__box_content_div}>
                        {
                            data.diferrences.map((element: string) => (
                                <div className={styles.container__box_content_div_content} key={element}>
                                    <CorrectLogo/>
                                    <p>{element}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.container__box_content_mail}>
                        <label className={styles.container__box_content_mail_label}>Email address</label>
                        <input
                            className={styles.container__box_content_mail_input}
                            placeholder='email@company.com'
                            type='text'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <button onClick={() => validateEmail(email, setValidEmail)} className={styles.container__box_content_button}>Subscribe to monthly newsletter</button>
                </div>
                <div className={styles.container__box_image}>
                    <img src={Banner} alt='banner'/>
                </div>
            </div>
        </section>
    )
}