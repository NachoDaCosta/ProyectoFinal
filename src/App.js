
import './App.css';
import {BrowserRouter, Routes, Route, redirect} from 'react-router-dom';
import Home from './Componentes/home';
import Modal from './Componentes/Modal/modal';
import { useState, useEffect } from 'react';
import { Login } from './Componentes/Login/login';



function App() {

  //const [list, SetList] = useState(Data.pokemones);
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
      console.log(data)
       if(data.error===null){
      logueo()
    }
    })
  }

  const logueo=()=>{
    setIsLoggedIn(true)
  }

const getpokemons = () => {
    fetch('http://localhost:8080/pokemons')
      .then(response => response.json())
      .then(data => {
        setPokemons(data)
        console.log(data)
      })
  } 

   useEffect(() => {
    if(isLoggedIn===false){
      redirect("/login")
    }
    else{
      getpokemons()
    }
    

  }, []) 

  return (
     
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/login" element={<Login Login={loginUser}/>}/>
      
    </Routes>
  </BrowserRouter>

  );
}

export default App;


/* 
filter
Modal del pokemon
ruteo*/