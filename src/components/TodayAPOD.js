import React from "react";

function TodayAPOD(props) {

    return (
        <div className="hero-img-container">
            {props.media_type
                ? <iframe height={'800px'} width={'800px'} style={{borderRadius: '50%'}} src={`${props.url}&autoplay=1`} title={props.title} frameborder="0" allowFullScreen />
                : <img src="" alt="APOD" />}
            
            <div className="TodayAPOD-info">
                {/* <h4>Photo of the Day</h4>
                <p>It is the largest and most complex star forming region in the entire galactic neighborhood. Located in the Large Magellanic Cloud, a small satellite galaxy orbiting our Milky Way galaxy</p> */}
            </div>
        </div>
    );
}

export default TodayAPOD