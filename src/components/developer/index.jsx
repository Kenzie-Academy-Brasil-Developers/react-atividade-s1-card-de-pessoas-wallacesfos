import React from 'react';


export default function developer(props){
    console.log(props)
    return(
        <div className="dev-card">
            <h2 className="dev-name">Dev: {props.name}</h2>
            <h4 className="dev-h4">age: {props.age}</h4>
            <h4 className="dev-h4">country: {props.country}</h4>
        </div>
    )
}