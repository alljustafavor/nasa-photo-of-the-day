import React, { useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../constants";

function RandomAPOD(props) {
    const [startDate, setStartDate] = useState('0000-00-00')
    const [endDate, setEndDate] = useState('0000-00-00')
    const [media, setMedia] = useState([])

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    }

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    }

    const handleSubmit = () => {
            axios.get(`${BASE_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`)
              .then(res => {
                setMedia(res.data);
              }).then(err => {
                console.error(err);
              })
          }

          const publicDom = '\U+1F16E'

    return (
        <div className="text date-container">
            <h2>Pick the Days!</h2>
            <div className="date-btn">
                <label htmlFor="start" >Start date: </label>
                <input 
                    type="date" 
                    id="start" 
                    value={startDate}
                    onChange={handleStartDateChange} />
                <label htmlFor="end"> End date: </label>
                <input 
                    type="date" 
                    id="end" 
                    value={endDate}
                    onChange={handleEndDateChange} />
                    <div class="button-container">    
                        <button onClick={handleSubmit} >Get Pictures</button>
                    </div>    
                {/* {console.log(start.value);} */}
            </div>
            <div className="img-date-container">
                {media.map(pic => (
                    <div className="date-image">
                        <p>{pic.title} : {pic.date}</p>
                        {pic.media_type === 'video'
                            ? <iframe src={pic.url} title={pic.title} style={{borderRadius: "5%"}} height={'546px'} width={'546px'} frameBorder="0" allowFullScreen />
                            : <img src={pic.url} alt={pic.title} />}
                            {pic.copyright? <p><small>&#169;{pic.copyright}</small></p> : <p><small>Public domain</small></p> }
                               
                    </div>
                ))}     
            </div>
        </div>    
    );
}

export default RandomAPOD