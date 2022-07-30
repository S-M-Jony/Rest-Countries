import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props);
       ///const {population} = props.country;
    return (
        <div className='country'>
            <img src={props.flag} alt="" /> <br/>
            <h1>{props.name}</h1>
            <h4>population : {props.population}</h4>
        </div>
    );
};

export default Country;