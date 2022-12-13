import './App.css';
import {BrowserRouter, Routes, Route, useNavigate  } from 'react-router-dom';
import Home from './Componentes/home';
import { useState, useEffect } from 'react';
import { Login } from './Componentes/Login/login';
import Pcard from './Componentes/Pcard/Pcard';




function App() {
  let navigate=useNavigate
  const [pokemons,setPokemons]=useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([])

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
      setIsLoggedIn(true)
    }
    })
  }


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
      loginUser={loginUser}   
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn} />} />
      
    </Routes>
  </BrowserRouter>

  );
}


export default App;
