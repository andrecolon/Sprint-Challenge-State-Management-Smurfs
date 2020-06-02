import React from "react";
import Nav from './components/Nav'
import SmurfList from './components/SmurfList';
import { SmurfProvider } from './contexts/SmurfContext'
import AddSmurf from './components/AddSmurf'

function App() {
  
    return (
      <SmurfProvider>
        <div className="App">
       <Nav />
          <AddSmurf />
        <SmurfList /> 

          </div>
      </SmurfProvider>
      
    );
  
}

export default App;
