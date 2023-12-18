import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../store/GlobalState";
import { ReactComponent as CorrectLogo } from '../../assets/images/icon-list.svg'
import {useNavigate} from "react-router-dom";
import {validateEmail} from "../../utils/Home.utils";
import styles from "./HomeMobile.module.sass";
import Banner from "../../assets/images/illustration-sign-up-mobile.svg";
import {GetDifferences} from "../../request/Home.request";
import {IDifferences} from "../../interface/IDifferences";

export default function HomeMobile(){
    const { email, setEmail, validEmail, setValidEmail, called, setCalled }: any = useContext(GlobalContext);
    const [data, setData] = useState<IDifferences>()
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setCalled(true)

        if (validateEmail(email)) {
            setValidEmail(true)
            navigate("/success");
        }
    };

    useEffect(() => {
        GetDifferences(setData)
    }, []);

    return (
        <div className={styles.container__box}>
            <div className={styles.container__box_image}>
                <img src={Banner} alt='banner'/>
            </div>
            <div className={styles.container__box_content}>
                <h1 className={styles.container__box_content_title}>Stay updated!</h1>
                <p className={styles.container__box_content_description}>Join 60,000+ product managers receiving
                    monthly updates on:</p>
                <div className={styles.container__box_content_div}>
                    {
                        data?.differences.map((element: string) => (
                            <div className={styles.container__box_content_div_content} key={element}>
                                <CorrectLogo/>
                                <p>{element}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.container__box_content_mail}>
                    <div className={styles.container__box_content_mail_div}>
                        <label className={styles.container__box_content_mail_div_label}>Email address</label>
                        {
                            (!validEmail && called) && (
                                <span
                                    className={styles.container__box_content_mail_div_error}>Valid email required</span>
                            )
                        }
                        <span></span>
                    </div>
                    <input
                        className={styles.container__box_content_mail_input}
                        style={!validEmail ? {backgroundColor: "hsla(4,100%,67%,0.21);color: hsl(4, 100%, 67%)"} : {}}
                        placeholder='email@company.com'
                        type='text'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <button onClick={handleButtonClick} className={styles.container__box_content_button}>Subscribe to
                    monthly newsletter
                </button>
            </div>
        </div>
    )
}