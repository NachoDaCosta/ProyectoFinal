{/*
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Data from "./Pokemodal.json"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';




const Modal =()=>{

        const params = useParams()
        const [pokemon,setPokemon] = useState(Pokemons.pokemones.find((pokemon)=>pokemon.id===params.id)); {/*Busco al pokemon que coincida con el id del parametro 
        
        const [index, setIndex] = useState (Pokemons.pokemones.indexOf(pokemon))

        useEffect(()=>{
            setPokemon(Pokemons.pokemones.find((pokemon)=>pokemon.id===params.id))
        },[params.id])

        useEffect(()=>{
            setIndex(Pokemons.pokemones.indexOf(pokemon))
        },[pokemon])
        

    return(
        
        <>
        <div className={`Modal-grid ${pokemon.background}`}> {/* Grilla General del Pokemon*
            <div className="modal-name"> {/*Grilla que contiene la informacion de la parte de arriba 
                <div className="modal-1row">

                    <Link to={`/`} key={pokemon.id}> {/* link para que retroceda al menu principal 
                        <img src="./Imagenes/arrow-left.svg" className="white" alt="" />
                    </Link>

                    <div>{pokemon.name}</div> {/* Nombre del Pokemon

                    <div className="marginNumber"> {/* numero del pokemon
                        #{pokemon.id}
                    </div>
                </div>

              
                <div className="modal-2row"> {/*grilla que contiene las imagenes del pokemon y las flechas 
                    {
                        index !==0 &&  ( 
                    <Link to={`/${Pokemons.pokemones[index-1].id}`} className="white arrow izq" > {/*Cambio de pagina al anterior pokemon 
                        <img src="./Imagenes/frame.svg" className="arrow-right " alt=""/>
                    </Link>)}{/* si el index es distinto de 0 renderiza la flecha de la izquierda para ir hacia el pok anterio

                    <div className="div-poke-img img"> {/* Imagen del Pokemon  
                        <img src={pokemon.image} className="modal-poke-img" alt="" />
                    </div>
                    
                    {
                        index <(Pokemons.pokemones.length-1) && (
                    <Link to={`/${Pokemons.pokemones[index+1].id}`} className="white arrow der" > {/*Cambio de pagina al siguiente pokemon 
                        <img src="./Imagenes/frame.svg"  alt="" />
                    </Link>)}{/* Renderiza si el indice es menor a la cantidad de pokemones 
                </div>
            </div>
            
            <div className="modal-bottom"> {/* Grilla de la parte blanca de la carta


                <div className={`modal-types ${pokemon.types}`}> {/*grilla con el tipo de pokemon o tipos 
                    <span className={`modal-type ${pokemon.background}`}>{pokemon.type}</span>
                    <span className={`modal-type ${pokemon.background2}`}>{pokemon.type2}</span>
                </div>
  
                <div className={`bolder ${pokemon.type} martop`}>  
                    About
                </div>


                <div className="modal-info"> {/*  grilla con la informacion de mi pokemon (no stats)
                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/Weight.svg" alt=""/></div>
                            <div >{pokemon.weight}</div>    
                        </div>
                        <div className="whm">Weight</div>
                    </div>

                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/height.svg" alt=""/></div>
                            <div>{pokemon.height}</div>
                        </div>
                        <div className="whm">Height</div>
                    </div>

                    <div className="tworows">
                            <div >{pokemon.moves} </div>
                            <div className="whm moves">Moves</div>
                    </div>
                </div>
                <div className="modal-description "> {pokemon.description}</div>{/*DIV CON DESCRIPCION DEL POKEMON 

                <div className={`bolder  ${pokemon.type}`}>Base stats</div>{/*DIV CON TEXTO DE STATS
                <div className="modal-stats">
                    <div className="line2">
                        <ul className={`about ${pokemon.type}`}> 
                            <li>HP</li>
                            <li>ATK</li>
                            <li>DEF</li>
                            <li>SATK</li>
                            <li>SDEF</li>
                            <li>SPD</li>
                        </ul>
                    </div>
                    <div className="centrado">
                        <ul>  {/*DIV CON LA INFO DE ESTADISTICAS DEL POKEMON
                            <li>{`${pokemon.HP}`}</li>
                            <li>{`${pokemon.ATK}`}</li>
                            <li>{`${pokemon.DEF}`}</li>
                            <li>{`${pokemon.SATK}`}</li>
                            <li>{`${pokemon.SDEF}`}</li>
                            <li>{`${pokemon.SPD}`}</li>
                        </ul>
                    </div>
                    <div className="modal-range">  {/*DIV CON LAS STATS EN BARRAS DEL POKEMON 
                        <ProgressBar now={pokemon.HP} className={`${pokemon.type} progressBar`}  />
                        <ProgressBar now={pokemon.ATK} className={`${pokemon.type} progressBar`}/>
                        <ProgressBar now={pokemon.DEF} className={`${pokemon.type} progressBar`}/>
                        <ProgressBar now={pokemon.SATK} className={`${pokemon.type} progressBar`}/>
                        <ProgressBar now={pokemon.SDEF} className={`${pokemon.type} progressBar`}/>
                        <ProgressBar now={pokemon.SPD} className={`${pokemon.type} progressBar`}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Modal;*/}