import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Featured from '../component/Featured'
import PizzaList from '../component/PizzaList'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Nehal's Pizza</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured/>
      <PizzaList/>
     
    </div>
  )
}
