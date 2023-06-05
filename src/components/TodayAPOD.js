import React from "react";
import styled, { keyframes } from "styled-components";

const StyledTodayAPOD = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: 5rem;
    height: 20vh;

    .TodayAPOD-info {
        &:hover {
            transform: scale(1.1);
            transition: all 0.2s ease-in-out;
        }
    }

    img {
        display: none;
        &:hover {
            img {
                display: flex;
            }
            transition: all 0.2s ease-in-out;
    }
`

function TodayAPOD(props) {

    return (
        <StyledTodayAPOD>
            {props.media_type === 'video'
                ? <iframe height={'450px'} width={'450px'} style={{borderRadius: '50%'}} src={`${props.url}?playlist=${props.url}&autoplay=1&controls=1&mute=1&loop=1`} title={props.title} frameborder="0" allowFullScreen />
                : <img src={props.url} alt="APOD" />}
            
            <div className="TodayAPOD-info">
                <h2>Photo/Video of the Day</h2>
                <h3>{props.title}Doggo ipsum shoober very good</h3>
                <p>{props.explanation}Snoot long water shoob aqua doggo adorable doggo, ur givin me a spook long bois. Dat tungg tho bork many pats smol borking doggo with a long snoot for pats he made many woofs heckin good boys, wrinkler he made many</p>
            </div>
        </StyledTodayAPOD>
    );
}

export default TodayAPOD