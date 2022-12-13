import React from "react";
import { Link } from "react-router-dom";


const Pokemon=(props)=>{
    function ceros(n){ //nos añade ceros dependiendo el id del pokemon
            if (props.pokemon.id<10){
            return("00"+props.pokemon.id)
        } else if (props.pokemon.id>9){
            if(props.pokemon.id<100){
                return("0"+props.pokemon.id)
            }
            if(props.pokemon.id>99){
                return(props.pokemon.id)
            }
        }}

    return(
        <>
                <Link to={`/${props.pokemon.id}`} key={props.pokemon.id}> 
                            {/*nos devuelve el pokemon de la lista de pokemones con un link que va a su id con una key asociada al id */}
                            <div className={`Pokemon-Container  white-background ${props.pokemon.PrimaryType} `} >
                                <div className="pokemon-number"> 
                                    #{ceros(props.pokemon.id)}
                                </div>

                                <div>
                                    <img src={props.pokemon.image} className="home-image" alt=""/>
                                </div>


                                <div className="pokemon-name">
                                    <span>{props.pokemon.name}</span>
                                </div>
                            </div>
                </Link>         
        </>
    )
}

export default Pokemon;
