import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import NutrientTable from '../components/NutrientTable'
import EnergyPieChart from '../components/EnergyPieChart'
import nutrientStyle from '../styles/Nutrients.module.css'
import { useState } from 'react'

export default function Recipe(props){
    const [showNutrients, setShowNutrients] = useState(props.recipe.showNutrients ? true : false)

    const title = props.recipe.title
    const description = documentToReactComponents(props.recipe.descriptionRt) 
    const ingredientsDisplay = documentToReactComponents(props.recipe.ingredientsRt)
    const instructionsDisplay = documentToReactComponents(props.recipe.instructionsRt)

    const nutrients = props.recipe.nutrients
    let firstHalfOfNutrients = {} 
    let secondHalfOfNutrients = {}
    let secondHalf = false

    for (const nutrient in nutrients) {
        if (nutrient === 'Alkohol'){
            secondHalf = true
        }
        if (!secondHalf){
            firstHalfOfNutrients[nutrient] = nutrients[nutrient]
        } else{
            secondHalfOfNutrients[nutrient] = nutrients[nutrient]
        }
    }

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
      <div className={nutrientStyle.container}>
                <h3>Ingredients</h3>
                {ingredientsDisplay}
            </div>
      <div className={nutrientStyle.container}>
                <h3> How to</h3>
                <p>
                    {instructionsDisplay}
                </p>
                </div>
      <div className={nutrientStyle.container}>
                <NutrientTable recipeTitle={title} nutrients={getEnergyNutrients(props.recipe.nutrients)} />
                <EnergyPieChart title={title + "id"} energyNutrients={getEnergyNutrients(props.recipe.nutrients)}/>
            </div>
            <a onClick={() => setShowNutrients(!showNutrients)}>Visa fler näringsämnen</a>
            { showNutrients ? 
      <div className={nutrientStyle.container}>
                <NutrientTable recipeTitle={title} nutrients={firstHalfOfNutrients} />
                <NutrientTable recipeTitle={title} nutrients={secondHalfOfNutrients} />
                </div>
            
        : null }
        </div>
    )
}