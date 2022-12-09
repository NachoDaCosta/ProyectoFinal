import './App.css';
import {BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Home from './Componentes/home';
import { useState, useEffect } from 'react';
import { Login } from './Componentes/Login/login';
import Carta from './Componentes/Carta/Carta';




function App() {

const [user, setUser] = useState([])
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [pokemons,setPokemons]=useState([])




 const loginUser = () => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: document.getElementById('email').value, password: document.getElementById('password').value })
    }
    fetch('http://localhost:8080/auth/login', requestOption)
    .then(response => response.json())
    .then(data => {
      setUser(data)
       if(data.error===null){
      logueo()
      //navigate("/home")
    }
    })
  }

  const logueo=()=>{
    setIsLoggedIn(true)
  }

const getpokemons = () => {
  console.log("entro aca")
    fetch('http://localhost:8080/pokemones')
      .then(response => response.json())
      .then(data => {
        console.log("es el data",data)
        setPokemons(data)
      })
  } 


   useEffect(() => {
    getpokemons()
  }, []) 

  return (

  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home pokemonList={pokemons}/>}/>
      <Route exact path="/login" element= {<Login Login={loginUser}/>} />
      <Route path="/:id" element={<Carta pokemonList={pokemons}/>} />
    </Routes>
  </BrowserRouter>

  );
}


export default App;
