import {GoogleCharts} from 'google-charts'

export default function EnergyPieChart(props) {


    console.log(
    ['Proiten', props.energyNutrients['Protein']*4],
    ['Kolhydrater', props.energyNutrients['Carbohodydrates']*4],
    ['Fett', props.energyNutrients['Fat']*9])
    

    GoogleCharts.load(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
    var data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Energy%', 'näringsämne'],
    ['Proiten', props.energyNutrients['Protein']*4],
    ['Kolhydrater', props.energyNutrients['Carbohodydrates']*4],
    ['Fett', props.energyNutrients['Fat']*9]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'E% per näringsämne', 'width':550, 'height':400};

    // Display the chart inside the <div> element with id="piechart"
    var piechart = new GoogleCharts.api.visualization.PieChart(document.getElementById(props.title));
    piechart.draw(data, options);
    }

    return (
        <div>
            <div id={props.title}></div>
        </div>
    )
}