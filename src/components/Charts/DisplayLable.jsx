import React, { useState, useEffect } from 'react';
import { CirclePacking } from '@ant-design/plots';

const DisplayLable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24m0nDoQYqH/basic-packing.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    autoFit: true,
    height: 600,
    padding: 50,
    data,
    sizeField: 'r',
    
    color: '#C500F6-#00CAF6-#0811E2',
    label: {
      formatter: ({ name }) => {
        return name !== 'root' ? name : '';
      },
      offsetY: 8,
      style: {
        fontSize: 12,
        textAlign: 'center',
        fill: 'white',
      },
    },
    legend: false,
  };

  return <CirclePacking {...config} />;
};

export default DisplayLable;