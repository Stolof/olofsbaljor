

export default function Recipe({recipe}){
    const title = recipe.title
    const description = recipe.description.content[0].content[0].value
    const ingredients = recipe.ingredients.content[0].content // [0] // .content[0].content[0].value
    const ingredientsItem = ingredients[0].content[0].content[0].value

    //console.log('RECIPE: ', recipe);
    //console.log('Titel: ', recipe.title);
    //console.log('description: ', recipe.description.content[0].content[0].value);
    console.log('ingredients: ', ingredients);
    console.log('ingredients: ', ingredientsItem);
    //console.log('instructions: ', recipe.instructions);
    

    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <div>
                <h3>Ingredients</h3>
                <ul>
                {recipe.ingredients.content.forEach(element => {
                  <li> {element}</li>  
                })}
                </ul>
                <ul>
                    <li> One</li>
                    <li> One</li>
                    <li> One</li>
                </ul>
            </div>
            <div>

            <h3> How to</h3>
            <p>
                Lorem ipsum
            </p>
            </div>
        </div>
    )
}