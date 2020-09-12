import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Recipe from '../components/recipe'
import { getRecipies } from '../lib/api'

export default function Home({recipies}) {
  // this.props = recipies
  console.log('HOME Cookie', recipies.recipe.titel);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recipe recipe={recipies.recipe}></Recipe>
      </div>
)}

export async function getStaticProps() {
  const recipies = await getRecipies()
  console.log('recipies', recipies);
  
  return {
    props: {recipies}
  }
}