import React from "react";

function TodayAPOD(props) {

    return (
        <div className="hero-img-container">
            <img src={props.thumbnail_url} />
            <div className="TodayAPOD-info">
                <h4>Photo of the Day</h4>
                <p>It is the largest and most complex star forming region in the entire galactic neighborhood. Located in the Large Magellanic Cloud, a small satellite galaxy orbiting our Milky Way galaxy</p>
            </div>
        </div>
    );
}

export default TodayAPOD