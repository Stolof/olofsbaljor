import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Recipe from '../components/recipe'
import { getAllrecipes } from '../lib/api'

export default function Home({recipes}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { recipes.length > 0 ? recipes.map(
        r => (
          <div>
          <Recipe recipe={r.fields}></Recipe>
          </div>
        )
      ): null
      }
      </div>
)}

export async function getStaticProps() {
  let recipes = await getAllrecipes()
  recipes = recipes.items
  console.log('recipes', recipes);
  
  return {
    props: {recipes}
  }
}