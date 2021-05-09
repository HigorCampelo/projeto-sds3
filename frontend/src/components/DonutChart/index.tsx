import axios from 'axios';
import Chart from 'react-apexcharts';
import {BASE_URL} from 'utils/requests';
import {SaleSum} from 'types/sale';
import { useEffect, useState } from 'react';

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({labels:[], series:[]});

    type ChartData ={
        labels: string[];
        series: number[];
    }
    
    // FORMA ERRADA
    //let chartData : ChartData = {labels:[], series:[]}
    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    
    //Se não usar useEffect, teremos um loopinfinito, pois quando o componente passar pelo axios ele tentará
    // renderizar novamente pois quando o useState é atualizado, ele renderiza novamente.
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sum-by-seller`)
         .then((response) => {
               const data = response.data as SaleSum[];
               const myLabels = data.map(x => x.sellerName);
               const mySeries = data.map(x => x.sum);

               setChartData({labels: myLabels, series: mySeries});
               //console.log(chartData);
         });
    }, []);
  

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
           options={{ ...options, labels:chartData.labels}}
           series={chartData.series}
           type="donut"
           height="240"
        />
    );
}

export default DonutChart;