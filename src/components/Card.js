import React from "react";

export default function Card(props){
    return(
    <div className="card">
            <div className="card--image">
                <img src={props.item.imageUrl} className="card--image" />
            </div>
            <div className="card--details">
                <div className="card--head">
                   
                    <p className="loc-name"> <img id="locicon" src="../images/map-icon.png" />{props.item.location}    <a id="google-maps" href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                   
                </div>                     
                <h2>{props.item.title}</h2>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p className="description">{props.item.description}</p>
                
            </div>
    </div>
    )
}