import React, { useState } from "react";
import './ProfileCard.css' 

function ProfileCard() {
  const [perfiles, setPerfiles] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [perfilCount, setPerfilCount] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "nombre") {
      setNombre(value);
    } else if (name === "apellido") {
      setApellido(value);
    } else if (name === "edad") {
      setEdad(value);
    }
  };

  const agregarPerfil = () => {
    const nuevoPerfil = {
      nombre: nombre,
      apellido: apellido,
      edad: edad
    };
    setPerfiles([...perfiles, nuevoPerfil]);
    // Incrementa el contador de perfiles
    setPerfilCount(perfilCount + 1);
    // Limpia los campos después de agregar el perfil
    setNombre("");
    setApellido("");
    setEdad("");
  };

  return (
    <div className="container_profile">
      <h1 className="titulo">Perfiles</h1>
      <div className="form">
        <input
          className="input-field"
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
        />
        <input
          className="input-field"
          type="text"
          name="apellido"
          value={apellido}
          onChange={handleInputChange}
          placeholder="Apellido"
        />
        <input
          className="input-field"
          type="text"
          name="edad"
          value={edad}
          onChange={handleInputChange}
          placeholder="Edad"
        />
        <button className="btn" onClick={agregarPerfil}>Agregar Perfil</button>
      </div>

      {perfiles.map((perfil, index) => (
        <div className="profile" key={index}>
          <h2 className="perfilTitulo">Perfil</h2>
          <h3>Nombre: <span className="datos_usuario">{perfil.nombre}</span></h3>
          <h3>Apellido: <span className="datos_usuario"> {perfil.apellido}</span></h3>
          <h3>Edad: <span className="datos_usuario"> {perfil.edad}</span></h3>
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;