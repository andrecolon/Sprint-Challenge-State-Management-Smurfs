import React, { useContext } from 'react'
import Smurf from './Smurf'
import { SmurfContext } from '../contexts/SmurfContext'

const SmurfList = () => {

    const [smurf, setSmurf] = useContext(SmurfContext);
    return (
        <div>
            <ul>
                {smurf.map(smurfy => (
                    <Smurf name={smurfy.name} age={smurfy.age} height={smurfy.height} key={smurfy.id} />
                ))}
            </ul>
        </div>
    )
}

export default SmurfList