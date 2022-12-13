import React from "react"
import Navbar from "./Nav"
import Pokemon from "./Pokemon"
import { useState, useEffect } from 'react';


const Home = (props) => {
    const [orderByNumber,setOrderByNumber] = useState(true)
    const [orderedList,setOrderedList] = useState(props.pokemonList)
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    
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
  
    return(
  
        <div className="pokemon-conteiner-home">
            <Navbar inputSearch={inputSearch} 
            setInputSearch={setInputSearch} 
            orderByNumber={orderByNumber} 
            changeOrder={changeOrder}
          />  
            <div className="pokeList" >
            {
              orderedList.filter(pokemon=> pokemon.name.toLowerCase().includes(inputSearch.toLowerCase())).map((pokemon,index)=>{
                return(
                  
                      <Pokemon pokemon={pokemon} key={pokemon.id}/>    
                      )
              })
            }
            </div>
        </div>) 
}
    


export default Home;