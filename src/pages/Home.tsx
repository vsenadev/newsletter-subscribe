import data from '../data/home.json'
import { ReactComponent as CorrectLogo } from '../assets/images/icon-list.svg'
import { ReactComponent as Banner } from '../assets/images/illustration-sign-up-desktop.svg'

export default function Home(){
    return(
        <section>
            <div>
                <div>
                    <h1>Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <div>
                        {
                            data.diferrences.map((element: string) => (
                                <div>
                                    <CorrectLogo/>
                                    <p>{element}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <label>Email address</label>
                        <input
                            placeholder='email@company.com'
                            type='text'
                        />
                    </div>
                    <button>Subscribe to monthly newsletter</button>
                </div>
                <div>
                    <Banner/>
                </div>
            </div>
        </section>
    )
}