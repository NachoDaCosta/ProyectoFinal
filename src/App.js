
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/home';
import Modal from './Componentes/Modal/modal';
import { useState, useEffect } from 'react';
import Data from "./Pokeinfo.json"
const info=Data

function App() {

  const [list, SetList] = useState(Data.pokemones); 

  return (
     
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home list={list}/>}/>{/* Link a La Pagina principal*/}
      <Route path="/:id" element={<Modal/>}/>{/* */}{/* link a la carta del pokemon*/}
    </Routes>
  </BrowserRouter>

  );
}

export default App;


/* 
filter
Modal del pokemon
ruteo*/