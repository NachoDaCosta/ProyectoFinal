import React from "react";
import { Link } from "react-router-dom";


const PokemonList=(props)=>{

    return(
        <>
            <div className="pokeList"> {/*mapeamos a los pokemones y le asignamos un indice*/}
                {props.list.map((pokemon,index)=>{ 
                    return (
                        <Link to={`/${pokemon.id}`} key={pokemon.id}> 
                            {/*nos devuelve el pokemon de la lista de pokemones con un link que va a su id con una key asociada al id */}
                            <div className={`Pokemon-Container ${pokemon.type}`} >
                                <div className="pokemon-number"> 
                                    #{pokemon.id}
                                </div>

                                <div className="pokemon-image">
                                    <img src={pokemon.image} alt=""/>
                                </div>


                                <div className="pokemon-name">
                                    <span>{pokemon.name}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                
                
            </div>
        </>
    )
}

export default PokemonList;
