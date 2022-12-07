import React from "react";
import { Link } from "react-router-dom";


const PokemonList=(props)=>{

    return(
        <>
            <div className="pokeList"> {/*mapeamos a los pokemones y le asignamos un indice*/}
                {props.ListOfPokemons.map((pokemon,index)=>{ 
                    return (
                        <Link to={`/${pokemon.id}`} key={props.ListOfPokemons.id}> 
                            {/*nos devuelve el pokemon de la lista de pokemones con un link que va a su id con una key asociada al id */}
                            <div className={`Pokemon-Container ${props.ListOfPokemons.type}`} >
                                <div className="pokemon-number"> 
                                    #{props.ListOfPokemons.id}
                                </div>

                                <div className="pokemon-image">
                                    <img src={props.ListOfPokemons.image} alt=""/>
                                </div>


                                <div className="pokemon-name">
                                    <span>{props.ListOfPokemons.name}</span>
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
