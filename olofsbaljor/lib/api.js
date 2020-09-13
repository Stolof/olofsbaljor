import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

async function getrecipes() {
    const recipe = await client.getEntry('55yRqa9P6hQZgaR6kEzgwh')
    return parseForm(recipe)
  }

async function getAllrecipes() {
    const recipes = await client.getEntries()
    return recipes
  }

function parseForm(recipe) {
    return {
        recipe: recipe.fields,
    }
}


module.exports = {
    getrecipes: getrecipes,
    getAllrecipes: getAllrecipes
}