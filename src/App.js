import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";
import Header from "./components/Header";
import TodayAPOD from "./components/TodayAPOD";
import LastThreeAPOD from "./components/LastThreeAPOD";
import RandomAPOD from "./components/RandomAPOD";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  const [media, setMedia] = useState([]);
  const [threeAPOD, setThreeAPOD] = useState([]);

  const date = new Date();

  // let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month - 1}-${31}`;
  let currentDateMinus3 = `${year}-${month-1}-${31 - 2}`

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setMedia(res.data);
      }).then(err => {
        console.error(err);
      })
  }, [])
  useEffect(() => {
    axios.get(`${BASE_URL}?start_date=${currentDateMinus3}&end_date=${currentDate}&api_key=${API_KEY}`)
      .then(res => {
        setThreeAPOD(res.data);
      }).then(err => {
        console.error(err);
      })
  }, [currentDate, currentDateMinus3])
  


  return (
    <div className="App">
      <Header />
      <TodayAPOD media_type={media.media_type} url={media.url} title={media.title} explanation={media.explanation}/>
      <LastThreeAPOD threeAPOD={threeAPOD} />
      <RandomAPOD currentDate={currentDate} API_KEY={API_KEY} BASE_URL={BASE_URL}/>
      <Footer />
    </div>
  );
}

export default App;