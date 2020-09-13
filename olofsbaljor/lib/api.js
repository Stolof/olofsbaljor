import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

async function getEntry(id) {
    const recipe = await client.getEntry(id)
    return parseForm(recipe)
  }

async function getAllRecipes() {
    const recipes = await client.getEntries({'content_type': 'recipe'})
    return recipes
  }

function parseForm(recipe) {
    return {
        recipe: recipe.fields,
    }
}

async function getNutrientForAllRecipes(recipes){
  let nutrientsPerRecipe = {}
  recipes.forEach(recipe => {
    const ingredients = recipe.fields.ingredients
    getNutrientsForRecipe(ingredients).then((recipeNutrien) => {
      console.log('Nutrient: ', recipeNutrien);
      
      nutrientsPerRecipe[recipe.fields.title] = recipeNutrien
    })
  });
  return nutrientsPerRecipe
}

const getNutrientsForRecipe = async function(ingredients){
  let recipeNutrients = {}
  ingredients.forEach(i => {
    const productId = i.fields.id
    // const productName = i.fields.name
    getNutrientsForProduct(productId).then((productNutrients) => {
      console.log('productNutrient:' );
      productNutrients.forEach(nutrient => {
        console.log('Nutrient: ', nutrient.name);
        
        recipeNutrients[nutrient.name] = nutrient.value
      });
    })
  });
  return recipeNutrients
}

async function getNutrientsForProduct(productId){
  const livsmedelkollenAPI = 'https://api.livsmedelkollen.se/foodstuffs/'
  try {
    const res = await fetch(livsmedelkollenAPI + "881",{
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    const nutrients = await res.json()
    return nutrients
  } catch (err) {
    console.log('ERROR: ', err);
  }
  return 'Hej'
}


module.exports = {
  getEntry: getEntry,
  getAllRecipes: getAllRecipes,
  getNutrientForAllRecipes: getNutrientForAllRecipes,
}