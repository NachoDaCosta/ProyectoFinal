import React from "react";
import Pcard from "../Pcard/Pcard";
import { useParams } from "react-router-dom";

const Carta=(props)=>{
    const params = useParams()
    const lista=props.pokemonList
    const filtrada=lista.filter((pokemons)=>pokemons.id===304)
          
    return(
        filtrada.map((item,key)=>{
            return(
                    <Pcard pokemon={item} key={key} lista={filtrada}/>    
                  )
        }
        
    ))
}
export default Carta;