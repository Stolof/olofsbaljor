import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Recipe from '../components/recipe'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recipe></Recipe>
      </div>
)}

export async function getStaticProps() {

  return {
    props: {}
  }
}