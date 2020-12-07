import React from 'react';
import './card.styles.css'

export const Card = (props) => {
    // you can't add word picture in alt
    return (
      <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=150x250`} 
             alt="monster pic"/>        
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
      </div>
    );
    
}


















//  return (
//    <div className="card-container">
//      <img
//        alt="monster pic"
//        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
//      />
//      <h2>{props.monster.name}</h2>
//      <p>{props.monster.email}</p>
//    </div>
//  );