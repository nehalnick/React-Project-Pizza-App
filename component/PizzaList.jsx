import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"


const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                We serve large varieties of Pizza's accros the town both veg and non-veg. 
                Made with Next Level Hygiene. Delivered with Next Level Safety.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
            </div>
        </div>
    )
}

export default PizzaList
