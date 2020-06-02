import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';


const Nav = ({ name, age, height, id }) => {

    const [smurf, setSmurf] = useContext(SmurfContext);
    return (
        <div>
            <h3> Andre's Favorite Smurfs</h3>
            <p>List of Smurfs: {smurf.length} </p> 
            
        </div>
    )
}

export default Nav