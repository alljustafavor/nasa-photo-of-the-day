import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";
import Header from "./components/Header";
import TodayAPOD from "./components/TodayAPOD";
import LastThreeAPOD from "./components/LastThreeAPOD";
import RandomAPOD from "./components/RandomAPOD";
import "./App.css";


function App() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setMedia(res.data);
      }).then(err => {
        console.error(err);
      })
  })

  return (
    <div className="App">
      <Header />
      <TodayAPOD media_type={media.media_type} url={media.url} title={media.title}/>
      <LastThreeAPOD />
      <RandomAPOD />
      
    </div>
  );
}

export default App;