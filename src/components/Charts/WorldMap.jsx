import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import data from '../../Utilities/WorldMapData';
import features from "../../Utilities/WorldMapFeatures"

const WorldMap = () => {
  return (
    <ResponsiveChoropleth
        data={data}
        features={features.features}
        margin={{ top: 0, right: 20, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={98}
        projectionTranslation={[ 0.55, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'white',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'white',
                color: 'white',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'squares',
                type: 'patternSquares',
                colors: "#eed312"
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'squares'
            }
        ]}
        legends={[]}
    />
  )
}

export default WorldMap