import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getEntry } from '../lib/api'

export default function Recipe({recipe}){
    const title = recipe.title

    const description = documentToReactComponents(recipe.descriptionRt) 
    const ingredientsDisplay = documentToReactComponents(recipe.ingredientsRt)
    const instructionsDisplay = documentToReactComponents(recipe.instructionsRt)     


    /* console.log('value: ', recipe.ingredientsRt.content[0].content[0].content[0].content[1].content[0].value);
    console.log('XXXXXX: ', recipe.ingredientsRt.content[0].content[1].content[0].content);
    console.log('XXXXXX: ', recipe.ingredientsRt.content[0].content[0].content[0].content);

    
    console.log('Titel: ', title);
    console.log('Description: ', description);
    console.log('ingredients: ', ingredients);
    console.log('instructions: ', instructions); */

    return (
        <div id={title}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <div>
                <h3>Ingredients</h3>
                {ingredientsDisplay}
            </div>
            <div>
            <h3> How to</h3>
            <p>
                {instructionsDisplay}
            </p>
            </div>
        </div>
    )
}