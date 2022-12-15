import './App.css';
import {BrowserRouter, Routes, Route, useNavigate  } from 'react-router-dom';
import Home from './Componentes/home';
import { useState, useEffect } from 'react';
import { Login } from './Componentes/Login/login';
import Pcard from './Componentes/Pcard/Pcard';
import Formulario from './Componentes/Formulario';




function App() {
  const [pokemons,setPokemons]=useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([])
  

   

  const logout=()=>{
    setIsLoggedIn(false)
    console.log("Cerré la sesion ")
  }

const getpokemons = () => {
    fetch('http://localhost:8080/pokemones')
      .then(response => response.json())
      .then(data => {
        setPokemons(data)
      })
  } 

   useEffect(() => {
    getpokemons()
  }, []) 

  return (

  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home 
      pokemonList={pokemons} 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn} 
      logout={logout}/>}/>
      
      <Route path="/:id" element={<Pcard 
      pokemonList={pokemons}/>} /> {/*Pokemon individual */}
      
      <Route path="/login" element= {<Login 
      setUser={setUser} 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn} />} />


      <Route path="/addpokemon" element={<Formulario />} />
      
    </Routes>
  </BrowserRouter>

  );
}


export default App;
