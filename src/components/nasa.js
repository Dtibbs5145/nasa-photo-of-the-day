import React from 'react';

const NASA = (props) => {
    
    return(
        <div>
            <h3>NASA Component</h3>
            <p>{props.nasaData.date}</p>
            <img src={props.nasaData.hdurl} />
            <p>Explanation</p>
        </div>
    )
};

export default NASA;