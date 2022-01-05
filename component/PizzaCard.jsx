import styles from "../styles/PizzaCard.module.css"
import Image from 'next/image'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>FARM HOUSE</h1>
            <span className={styles.price}>₹310</span>
            <p className={styles.desc}>
            Includes prosciutto, ricotta, roasted yellow peppers, basil, pistachios and balsamic vinegar
            </p>
        </div>
    )
}

export default PizzaCard
