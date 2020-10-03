
   export default function NutrientTableEntry(props) {
       console.log('PROPS: ', props);
       
     return (
         <div>
             <div>{props.name}</div>
             <div>{props.value}</div>
         </div>
     )
   }