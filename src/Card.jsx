import React from "react";

function Card(props){
    return(
        <>
            <div className="card">
                <img src={props.imageLink} alt ="shows_image"/>
                <h3>{props.showsTitle}</h3>
                <a href={props.showLink}><button>Click Here</button></a>
            </div>
        </>
    )
}

export default Card;