import React from "react";

function Card(props){
  return (
    <section>
        <div>
          <img src={props.item.image} className="location-image"/>
        </div>
        <div className="description">
          <div className="top">
          <i className="fa-solid fa-location-pin"></i>           
           <p className="location-name">{props.item.location} <span>View on Google Maps</span></p>
          </div>
          <h1 className="location-title">{props.item.title}</h1>
          <p className="date">{props.item.date}</p>
          <p className="information">{props.item.description}</p>
        </div>
    </section>
  );
}

export default Card;