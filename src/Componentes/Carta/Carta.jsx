import React from "react";
import { useParams } from "react-router-dom";
import Pcard from "../Pcard/Pcard";


const Carta=(props)=>{
    const {id}=useParams()
    const lista=props.pokemonList
    const filtrada=lista.filter((pokemons)=>pokemons.id.toString()===id.toString())
    console.log("lista")
    console.log(filtrada)

    return(        
        <Pcard filtrada={filtrada}/>      
    )
}
export default Carta;
//vamos un brake hasta 21:10