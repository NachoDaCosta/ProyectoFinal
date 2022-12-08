import React from "react";
import Pcard from "../Pcard/Pcard";
import { useParams } from "react-router-dom";

const Carta=(props)=>{
    const params = useParams()
    const auxList=(props.pokemonList.filter((pokemon)=>pokemon.id===params.id))
    console.log("la auxlist es"+auxList)

       
    return(
        auxList.filter((item,key)=>{
            return(
                    <Pcard pokemon={item} key={key} />    
                  )
        }
        
    ))
}
export default Carta;