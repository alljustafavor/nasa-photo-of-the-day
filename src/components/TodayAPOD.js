import React from "react";

function TodayAPOD(props) {

    return (
        <div className="hero-img-container">
            {props.media_type === 'video'
                ? <iframe className="content" height={'450px'} width={'450px'} style={{borderRadius: '50%'}} src={`${props.url}?playlist=${props.url}&autoplay=1&controls=1&mute=1&loop=1`} title={props.title} frameborder="0" allowFullScreen />
                : <img className="content" src={props.url} alt="APOD" />}
            
            <div className="TodayAPOD-info">
                <h2>Photo/Video of the Day</h2>
                <h3>{props.title}</h3>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
}

export default TodayAPOD