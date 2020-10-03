import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Recipe from '../components/recipe'
import { getAllRecipes, getNutrientForAllRecipes } from '../lib/api'

export default function Home({recipes}) {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Olofsbaljor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1> Välkommen till Olofs baljor</h1>
        <p> Detta är en sida innehållande mina favoritbaljväxtrecept</p>
      </div>
      <h2>Baljor</h2>
      <ul>
      { recipes.length > 0 ? recipes.map(
        r => (
            <li> <a href={"#" + r.fields.title}>{r.fields.title}</a></li>
        )
      ): null }
      </ul>
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
  let recipes = await getAllRecipes()
  recipes = recipes.items
  // console.log('recipes', recipes);
  /* const ingredients = recipes[0].fields.ingredientsRt
  console.log('Product: ', ingredients.content[0].content[0].content[0].content[1]);
  console.log('value: ', ingredients.content[0].content[0].content[0].content[1].content[0].value);
  const id = ingredients.content[0].content[0].content[0].content[1].data.target.fields.id
  console.log('Id: ', id); */
  

  const nutrientsPerRecipe = await getNutrientForAllRecipes(recipes)
  console.log('Value in recipe: ', nutrientsPerRecipe )
  // const result = await Promise.all(Object.values(nutrientsPerRecipe))

  return {
    props: {recipes}
  }
}