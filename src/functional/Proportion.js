import React from 'react';
import CanvasJSReact from '../canvasjs.react';
import coinbase from '../service/coinbaseService';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Proportion(props) {
    
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Portfolio Proportians"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            // dataPoints: [{y:2, label: 'btc'}],
            dataPoints: formatData()
        }]
    }

    function formatData() {
        let dataPoints = []
        props.forEach(wallet => {
            if(parseFloat(wallet.balance.amount) !== 0) {
                dataPoints.push({y:wallet.balance.amount, label: wallet.currency.code})
            }
        });

        generatePrices(dataPoints)
        if(dataPoints.length !== 0) {  return dataPoints;}
    }

    async function generatePrices(dataPoints) {
        let prices = []
        for (const coin of dataPoints) {
            let price = await coinbase.getCoinPrices(coin.label)
            prices.push({ticker:coin.label,amount:coin.y, price: await price.spot})
        }
        
        console.log(prices)
        proportion(prices)
        return prices
    }

    function proportion(prices) {
        let total = 0
        console.log(prices)
        for (const item in prices) {
            console.log(item)
            total += item.amount*item.price
        }

        console.log(total)
    }

    return(
        <div className="container">
			{true && <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/> }
            {/* {formatData()} */}
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
    );
}

export default Proportion