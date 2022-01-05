import styles from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h1 className={styles.motto}>
                        Good times call for pizza.
                    </h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        Shop No. 481, Bhopa Road #304.
                        <br /> Muzaffarnagar
                        <br /> 0131 - 22334455
                    </p>
                    <p className={styles.text}>
                        Shop No. 23, Gandhi Colony #304.
                        <br /> Muzaffarnagar
                        <br /> 0131 - 22334456
                    </p>
                    <p className={styles.text}>
                        Shop No. 82, New Mandi #304.
                        <br /> Muzaffarnagar
                        <br /> 0131 - 22334457
                    </p>
                    <p className={styles.text}>
                        Shop No. 58, Mahaveer Chawk #304.
                        <br /> Muzaffarnagar
                        <br /> 0131 - 22334458
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>OPENING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 10:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 9:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
