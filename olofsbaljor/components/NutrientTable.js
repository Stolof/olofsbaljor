   
import  NutrientTableEntry from './NutrientTableEntry'
   export default function NutrientTable(props) {
     return (
         <div>
             <div>
                 <h2> Näringsinnehåll: {props.recipeTitle}</h2>
             </div>
             <div>
                 <div>
                     <div>Näringsämne</div>
                     <div>Mängd</div>
                 </div>
                 { 
                       Object.keys(props.nutrients).map( (key) => 
                         <NutrientTableEntry name={key} value={props.nutrients[key]} />
                      )
                 }
             </div>
         </div>
     )
   }
    