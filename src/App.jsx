import React, { useState } from "react";
import ButtonCounter from "./ButtonCounter";
import ProfileCard from "./ProfileCard";
import './App.css' 

function App() {
    
  return (
    <div>
      <ProfileCard/>
      <h2 className="titulo">¡Contador de Botones!</h2>
      <ButtonCounter/>
    </div>
  );
}

export default App;