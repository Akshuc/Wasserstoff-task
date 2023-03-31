import React from 'react';
import Chart from "react-apexcharts";


let options = {
    chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005]
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 40, 45, 50, 49, 60, 70, 91, 60, 70, 91, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
      plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'last',
            columnWidth: '40%',
            barHeight: '40%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            colors: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                backgroundBarColors: [],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            }
        }
    },
    fill: {
        colors: ["#DBDFF1"],
        opacity: 0.9,
        type: 'solid',
        gradient: {
            shade: 'dark',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
        }
    }
}

function Column() {
  return (
      <Chart
      options={options}
      series={options.series}
      type="bar"
      height="150px"
    />
  )
}

export default Column