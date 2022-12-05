import React from "react"
import Navbar from "./Nav"
import PokemonList from "./PokemonList"
import { useState, useEffect } from 'react';


const Home = (props) => {

    const [orderByNumber,setOrderByNumber] = useState(true)
    const [orderedList,setOrderedList] = useState(props.list)

  useEffect(()=>{
      let auxList = props.list
      if(!orderByNumber){  /*Si es Distinta al orden numerico nos toma el orden Alfabetico */
        console.log("Ordeno por letra")
        auxList.sort((a,b)=>String(a.name).localeCompare(b.name))
        /*Setea el orden por letra */
      }
      else {
        console.log("Ordeno por numero")
        auxList.sort((a,b)=>a.id - b.id)
        /*Seteo el orden por id */
      }
      console.log(auxList)
      setOrderedList(auxList)  /*seteamos el orden de la lista segun el filtro */
  },[orderByNumber])

  function changeOrder (){  /*Es la funcion para el boton que arrmamos arriba*/
    setOrderByNumber(!orderByNumber)
  }

  const [inputSearch,setInputSearch]=useState("")
  
    return(
        <>
        <Navbar inputSearch={inputSearch} 
          setInputSearch={setInputSearch} 
          changeOrder={changeOrder}
          orderByNumber={orderByNumber} />  {/* es el que recibe el cambio de orden de la lista */}
        <PokemonList list={orderedList.filter((pokemon)=>pokemon.name.toLowerCase().includes(inputSearch.toLowerCase()))}/>        {/* es el que recibe la lista ordenada */}
        </>
    )
}

export default Home;