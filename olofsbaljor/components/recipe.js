import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Recipe({recipe}){
    const title = recipe.title

    const description = documentToReactComponents(recipe.descriptionRt) 
    const ingredients = documentToReactComponents(recipe.ingredientsRt)
    const instructions = documentToReactComponents(recipe.instructionsRt)     
    
    /*console.log('Titel: ', title);
    console.log('Description: ', description);
    console.log('ingredients: ', ingredients);
    console.log('instructions: ', instructions);*/

    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <div>
                <h3>Ingredients</h3>
                {ingredients}
            </div>
            <div>
            <h3> How to</h3>
            <p>
                {instructions}
            </p>
            </div>
        </div>
    )
}