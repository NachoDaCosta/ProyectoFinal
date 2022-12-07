import React from "react";
import { Link } from "react-router-dom";


const Pokemon=(props)=>{

    return(
        <>
                <Link to={`/${props.pokemon.id}`} key={props.pokemon.id}> 
                            {/*nos devuelve el pokemon de la lista de pokemones con un link que va a su id con una key asociada al id */}
                            <div className={`Pokemon-Container ${props.pokemon.PrimaryType}`} >
                                <div className="pokemon-number"> 
                                    #{props.pokemon.id}
                                </div>

                                <div className="pokemon-image">
                                    <img src={props.pokemon.image} alt=""/>
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
