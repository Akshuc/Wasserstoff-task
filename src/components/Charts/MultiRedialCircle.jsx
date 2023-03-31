import React from 'react';
import Chart from "react-apexcharts";



let options = {
  chart: {
    height: 270,
    type: "radialBar"
  },
  
  series: [67, 40],
  
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "60%"
      },
     
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "10px"
        },
        value: {
          color: "#111",
          fontSize: "15px",
          show: true
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Total earning", "Total sale"]
};


const MultiRedialCircle = () => {
  return (
    <Chart 
    options={options}
    series={options.series}
    type="radialBar"
    width="200px"
    height="190px"
    />
  )
}

export default MultiRedialCircle