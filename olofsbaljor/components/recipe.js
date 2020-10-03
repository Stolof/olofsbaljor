import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getEntry } from '../lib/api'
import NutrientTable from '../components/NutrientTable'
import EnergyPieChart from '../components/EnergyPieChart'
export default function Recipe(props){
    const title = props.recipe.title

    const description = documentToReactComponents(props.recipe.descriptionRt) 
    const ingredientsDisplay = documentToReactComponents(props.recipe.ingredientsRt)
    const instructionsDisplay = documentToReactComponents(props.recipe.instructionsRt)     

    function getEnergyNutrients(nutrients) {
        const energyNutrients = {
            "Calories" : nutrients['Energi (kcal)'],
            "Protein" : nutrients['Protein'],
            "Carbohodydrates" : nutrients['Kolhydrater'],
            "Fat" : nutrients['Fett']
        }
        return  energyNutrients
    }

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
                <NutrientTable recipeTitle={title} nutrients={getEnergyNutrients(props.recipe.nutrients)} />
                <EnergyPieChart title={title + "id"} energyNutrients={getEnergyNutrients(props.recipe.nutrients)}/>
                <NutrientTable recipeTitle={title} nutrients={props.recipe.nutrients} />
            </div>
        </div>
    )
}