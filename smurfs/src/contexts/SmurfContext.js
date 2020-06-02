import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'


export const SmurfContext = createContext();


export const SmurfProvider = props => {
    const [smurf, setSmurf] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3333/smurfs/")
        .then(response => {
            console.log(response);
            setSmurf(response.data);
        })
        .catch( err => console.log(err))
    }, []);
    
   
    return (
        <SmurfContext.Provider value={[smurf, setSmurf]}>
            {props.children}
        </SmurfContext.Provider>
    )
}

