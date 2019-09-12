import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NASA from './components/nasa';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=zw9nIOurM3I9DDNtlnwgIPke2IDKeDKG1cR5pqZK')
    .then(res => {
      console.log(res.data);
      setData(res.data)
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1>NASA Project :)</h1>
      <NASA nasaData={data} />
    </div>
  );
}

export default App;
