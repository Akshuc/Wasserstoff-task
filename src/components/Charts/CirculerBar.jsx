import React from 'react';
import Chart from "react-apexcharts";
import data from '../../Utilities/UsersData/UserData';

let options = {
  chart: {
    height: 270,
    type: "radialBar"
  },
  
  series: [67],
  
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
          show: false,
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
  labels: ["Progress"]
};

const CirculerBar = () => {
  return (
    <div style={{display: "flex"}}>
      <Chart 
      options={options}
      series={options.series}
      type="radialBar"
      width="120px"
      height="120px"
      />
      <div style={{width: "90px", textAlign: 'left', paddingTop: '30px', paddingBottom: "30px"}}>
      <h5>{data[0].Active}</h5>
      <h5>Active users</h5>

      
      </div>
    </div>
  )
}

export default CirculerBar