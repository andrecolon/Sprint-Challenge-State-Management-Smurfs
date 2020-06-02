import React, { useState, useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'


const AddSmurf = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [smurf, setSmurf] = useContext(SmurfContext);

    const updateName = e => {
        setName(e.target.value)
    }
    const updateAge = e => {
        setAge(e.target.value)
    } 
    const updateHeight = e => {
        setHeight(e.target.value)
    }
    const addSmurf = e => {
        e.preventDefault();
        setSmurf(prevSmurf => [...prevSmurf, { name: name, age: age, height: height, id: Date() }])

    }
    return (
        <form onSubmit={addSmurf}>
            <input placeholder="Smurf name" type="text" name="name" value={name} onChange={updateName} />
            <input placeholder="Smurf age" type="text" name="age" value={age} onChange={updateAge} />
            <input placeholder="Smurf height" type="text" name="height" value={height} onChange={updateHeight} />
            <button>Submit</button>
        </form>
    )
}

export default AddSmurf
