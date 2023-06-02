import React from "react";

function LastThreeAPOD(props) {

    return (
        <div className="text">
            <h2 className="text">Last Three Picture's of the Day</h2>
            <div className="img-container">
                {props.threeAPOD.map(pic => (
            <div className="image">
                {pic.media_type === 'video'
                    ? <iframe src={pic.url} title={pic.title} style={{borderRadius: '50%'}} height={'546px'} width={'546px'} frameBorder="0" allowFullScreen />
                    : <img src={pic.url} alt={pic.title} />}
            </div>
        ))}
            </div>
        </div>    
    );
}

export default LastThreeAPOD