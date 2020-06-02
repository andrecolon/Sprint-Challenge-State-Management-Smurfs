import React from 'react'


const Smurf = ({ name, age, height }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{height}</p>
        </div>
    )
}

export default Smurf
