import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useParams } from "react-router-dom";


const Pcard =(props)=>{  
    const {id}=useParams()
    const [pokemon,setPokemon] = useState(props.pokemonList.find((pokemon)=>pokemon.id==id));
    const [index, setIndex] = useState (null)
    
    function mayus(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    
   
        useEffect(()=>{
            setPokemon(props.pokemonList.find((pokemon)=>pokemon.id==id))
        },[id,props.pokemonList])

        useEffect(()=>{
            if(pokemon){
            setIndex(props.pokemonList.findIndex(candidate =>candidate.id===pokemon.id))

            }
        },[pokemon,props.pokemonList])


        function ceros(n){ //nos añade ceros dependiendo el id del pokemon
            if (pokemon.id<10){
            return("00"+pokemon.id)
        } else if (pokemon.id>9){
            if(pokemon.id<100){
                return("0"+pokemon.id)
            }
            if(pokemon.id>99){
                return(pokemon.id)
            }
        }}
         
      
    return(
        
        <>
        {pokemon && <div className={`Modal-grid ${pokemon.PrimaryType}`}> {/* Grilla General del Pokemon*/}
            <div className="modal-name"> {/*Grilla que contiene la informacion de la parte de arriba */}
                <div className="modal-1row">

                    <Link to={`/home`} key={pokemon.id}> {/* link para que retroceda al menu principal */}
                        <img src="./Imagenes/arrow-left.svg" className="white" alt="" />
                    </Link>

                    <div>{pokemon.name}</div> {/* Nombre del Pokemon*/}

                    <div className="marginNumber"> {/* numero del pokemon*/}
                        #{ceros(pokemon.id) }

                        
                    </div>
                </div>

              
                <div className="modal-2row"> {/*grilla que contiene las imagenes del pokemon y las flechas */}
                {
                    index !=null &&    index !==0 &&  (
                    <Link to={`/${props.pokemonList[index-1].id}`} className="white arrow izq" > {/*Cambio de pagina al anterior pokemon */}
                        <img src="./Imagenes/frame.svg" className="arrow-right " alt=""/>
                    </Link>)}

                    <div className="div-poke-img img">  
                        <img src={pokemon.image} className="modal-poke-img" alt="" />
                    </div>
                    
                    {
                    index !=null &&      index <(props.pokemonList.length-1) && (
                    <Link to={`/${props.pokemonList[index+1].id}`} className="white arrow der" > {/*Cambio de pagina al siguiente pokemon */}
                        <img src="./Imagenes/frame.svg"  alt="" />
                    </Link>)}

                </div>
            </div>
            
            <div className="modal-bottom"> {/* Grilla de la parte blanca de la carta*/}

            {pokemon.SecondaryType==="" ? <div className={`modal-types`}> 
                    <span className={`modal-type ${pokemon.PrimaryType} font-type` }>{mayus(pokemon.PrimaryType)}</span>
                </div>:
                <div className={`modal-types`}> 
                    <span className={`modal-type ${pokemon.PrimaryType}`}>{mayus(pokemon.PrimaryType)}</span>
                    <span className={`modal-type ${pokemon.SecondaryType}`}>{mayus(pokemon.SecondaryType)}</span>
                </div>}
                
  
                <div className={`bolder stats-card-background ${pokemon.PrimaryType} martop`}>  
                    About
                </div>


                <div className="modal-info"> {/*  grilla con la informacion de mi pokemon (no stats)*/}
                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/Weight.svg" alt=""/></div>
                            <div >{pokemon.weight} Kg</div>    
                        </div>
                        <div className="whm">Weight</div>
                    </div>

                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/height.svg" alt=""/></div>
                            <div>{pokemon.height} m</div>
                        </div>
                        <div className="whm">Height</div>
                    </div>

                    <div className="tworows">
                            <div >
                                <div>{pokemon.moves1} </div>
                                <div>{pokemon.moves2} </div>
                            </div>
                            <div className="whm moves">Moves</div>
                    </div>
                </div>
                <div className="modal-description "> {pokemon.description}</div>{/*DIV CON DESCRIPCION DEL POKEMON */}

                <div className={`bolder stats-card-background ${pokemon.PrimaryType}`}>Base stats</div>{/*DIV CON TEXTO DE STATS*/}
                <div className="modal-stats">
                    <div className="line2">
                        <ul className={`stats-card-background ${pokemon.PrimaryType}`}> 
                            <li>HP</li>
                            <li>ATK</li>
                            <li>DEF</li>
                            <li>SATK</li>
                            <li>SDEF</li>
                            <li>SPD</li>
                        </ul>
                    </div>
                    <div className="centrado">
                        <ul>  {/*DIV CON LA INFO DE ESTADISTICAS DEL POKEMON*/}
                            <li>{`${pokemon.hp}`}</li>
                            <li>{`${pokemon.atk}`}</li>
                            <li>{`${pokemon.def}`}</li>
                            <li>{`${pokemon.satk}`}</li>
                            <li>{`${pokemon.sdef}`}</li>
                            <li>{`${pokemon.spd}`}</li>
                        </ul>
                    </div>
                    <div className="modal-range">  {/*DIV CON LAS STATS EN BARRAS DEL POKEMON */}
                        <ProgressBar now={pokemon.hp} className={`${pokemon.PrimaryType} progressBar`}  />
                        <ProgressBar now={pokemon.atk} className={`${pokemon.PrimaryType} progressBar`}/>
                        <ProgressBar now={pokemon.def} className={`${pokemon.PrimaryType} progressBar`}/>
                        <ProgressBar now={pokemon.satk} className={`${pokemon.PrimaryType} progressBar`}/>
                        <ProgressBar now={pokemon.sdef} className={`${pokemon.PrimaryType} progressBar`}/>
                        <ProgressBar now={pokemon.spd} className={`${pokemon.PrimaryType} progressBar`}/>
                    </div>
                </div>
            </div>
        </div>}
    </>
    )

}

export default Pcard;