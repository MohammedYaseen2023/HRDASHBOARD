
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";


// export default function TestChart() {
//     const state = {
//         options: {
//             chart: {
//                 id: "basic-bar"
//             },
//             xaxis: {
//                 categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//             }
//         },
//         series: [
//             {
//                 name: "series-1",
//                 data: [30, 40, 45, 50, 49, 60, 70, 91]
//             }
//         ]
//     };


//     return (<div className="app">
//         <div className="row">
//             <div className="mixed-chart">
//                 <Chart
//                     options={state.options}
//                     series={state.series}
//                     type="bar"
//                     width="500"
//                 />
//             </div>
//         </div>
//     </div>)
// };

export default function ChartPieAttend() {

const seriesData=[44, 55, 41]
const lablesData=['الحضور', 'الانصراف', 'المتأخرين']
    const state = {

        series: seriesData,//[44, 55, 41, 17, 15],
        options: {
            labels: lablesData,
            chart: {
                type: 'donut',
            } ,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                    width: 200
                    },
                    legend: {
                        direction: 'row',
                        position: { vertical: 'bottom', horizontal: 'middle' },

                    }
                }
            }]
        },
    };

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" />
        </div>
    );

}
