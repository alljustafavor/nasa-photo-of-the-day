import React from "react";

function LastThreeAPOD(props) {

    return (
        <div className="text">
            <h2>Last Three Picture's of the Day</h2>
            <div className="img-container">
                <div className="image">
                    <img src={props.url} />
                </div>
                <div className="image">
                <img src={props.url} />
                </div>
                <div className="image">
                <img src={props.url} />
                </div>
            </div>
        </div>    
    );
}

export default LastThreeAPOD