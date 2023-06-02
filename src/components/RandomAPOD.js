import React from "react";

function RandomAPOD(props) {

    return (
        <div className="text">
            <h2>date dropdown</h2>
            <div className="date-btn">
                <label for="start">Start date: </label>
                <input 
                    type="date" 
                    id="start" 
                    value="01/01/01" />
                <label for="start"> End date: </label>
                <input 
                    type="date" 
                    id="end" 
                    value="02/02/02" />
                <button>Submit</button>
                {/* {console.log(start.value);} */}
            </div>
            <div className="img-date-container">
                <div className="image">
                </div>
            </div>
        </div>    
    );
}

export default RandomAPOD