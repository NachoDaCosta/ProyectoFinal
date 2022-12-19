import React from "react"
import Navbar from "./Nav"
import Pokemon from "./Pokemon"
import { useState, useEffect } from 'react';
import Añadir from "./añadir/Añadir";
import { Link } from "react-router-dom";
import Cargando from "./Cargando/Cargando";


const Home = (props) => {
    const [orderByNumber,setOrderByNumber] = useState(true)
    const [orderedList,setOrderedList] = useState(props.pokemonList)
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    const [iswriting,setIswriting]=useState(false)
    const [loading,setLoading]=useState(false)
  const [inputSearch,setInputSearch]=useState("")
    
  useEffect(()=>{
    setLoading(true)
    setTimeout( ()=>{
      setLoading(false)
      },1500)
  },[])

  

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
    if (inputSearch=="" && isLoggedIn==true){
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

          {loading ? (<Cargando />):(
            <div className="home-second-row">
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
              
              <div className="div-logout" >
                <Link to='/home/favorites' className="div-favorites">
                  <img src="https://i.pinimg.com/originals/17/d0/74/17d0747c12d59dd8fd244e90d91956b9.png" alt="" className="fav-icon"/>
                  <span>Favorites</span>
                </Link>
                <Link to='/login' >
                <span className="logout" onClick={props.logout}>{isLoggedIn ? 'Logout' : 'Ingresa'}
                </span>
                </Link>
              </div>
            </div>)}
          
        </div>) 
}
    


export default Home;