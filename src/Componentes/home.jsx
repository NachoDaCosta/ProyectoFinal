import React from "react"
import Navbar from "./Nav"
import Pokemon from "./Pokemon"
import { useState, useEffect } from 'react';
import Añadir from "./añadir/Añadir";
import { Link } from "react-router-dom";


const Home = (props) => {
    const [orderByNumber,setOrderByNumber] = useState(true)
    const [orderedList,setOrderedList] = useState(props.pokemonList)
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    const [iswriting,setIswriting]=useState(false)
    
  const [inputSearch,setInputSearch]=useState("")
    
  useEffect(()=>{
    const auxList = props.pokemonList
    if(!orderByNumber){  /*Si es Distinta al orden numerico nos toma el orden Alfabetico */
        console.log("Ordeno por letra")
        auxList.sort((a,b)=>String(a.name).localeCompare(b.name))
      }
      else  if(orderByNumber){
        console.log("Ordeno por numero")
        auxList.sort((a,b)=>a.id - b.id)
      }
      console.log(auxList)
      setOrderedList(Object.assign([],auxList))  /*seteamos el orden de la lista segun el filtro */
  },[orderByNumber,props.pokemonList])


  function changeOrder (){  
    setOrderByNumber(!orderByNumber)
  }
  function check(inputSearch){
    if (inputSearch==""){
      return(
        <Añadir/>
      )
    }
  }

    return(
  
        <div className="pokemon-conteiner-home" >
            <Navbar inputSearch={inputSearch} 
            isLoggedIn={isLoggedIn}
            setInputSearch={setInputSearch} 
            orderByNumber={orderByNumber} 
            changeOrder={changeOrder}
            iswriting={iswriting}
            setIswriting={setIswriting}
          />  
            <div className="pokeList" >
              {check(inputSearch)}
            
            {
              orderedList.filter(pokemon=> pokemon.name.toLowerCase().includes(inputSearch.toLowerCase())).map((pokemon,index)=>{
                return(
                  
                      <Pokemon pokemon={pokemon} key={pokemon.id}/>    
                      )
              })
            }
            </div>
            
            <div className="div-logout" onClick={props.logout}>
              <Link to='/login' >
              <span className="logout">Cerrar session</span>
              </Link>
            </div>
        </div>) 
}
    


export default Home;