import React, { useRef, useState } from 'react';
import Hero from './assets/component/Hero';

const App = () => {
  const [apiData, setApiData] = useState(null);
  const displayData = useRef();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setApiData(data);
  };

  const showData = () => {
    if (displayData.current && apiData) {
      displayData.current.innerText = JSON.stringify(apiData, null, 2);
    }
  };

  return (
    <div>
      <p ref={displayData}></p>
      <button onClick={fetchData}>Call Api</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default App;
