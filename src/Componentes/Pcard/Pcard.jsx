import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useParams } from "react-router-dom";


const Pcard =(props)=>{   
    const params=useParams()
        const pokemonfiltered=props.filtrada[0]
        console.log(pokemonfiltered,"hola")
        function ceros(n){ //nos añade ceros dependiendo el id del pokemon
            if (pokemonfiltered.id<10){
            return("00"+pokemonfiltered.id)
        } else if (pokemonfiltered.id>9){
            if(pokemonfiltered.id<100){
                return("0"+pokemonfiltered.id)
            }
            if(pokemonfiltered.id>99){
                return(pokemonfiltered.id)
            }
        }}
        const [pokemon,setPokemon] = useState(props.lista.find((pokemon)=>pokemon.id===params.id));
        const [index, setIndex] = useState (props.lista.indexOf(pokemon))

        useEffect(()=>{
            setPokemon(props.lista.find((pokemon)=>pokemon.id===params.id))
        },[params.id])

        useEffect(()=>{
            setIndex(props.lista.indexOf(pokemon))
        },[pokemon])
        console.log(index)
         
      
    return(
        
        <>
        <div className={`Modal-grid ${pokemonfiltered.PrimaryType}`}> {/* Grilla General del Pokemon*/}
            <div className="modal-name"> {/*Grilla que contiene la informacion de la parte de arriba */}
                <div className="modal-1row">

                    <Link to={`/home`} key={pokemonfiltered.id}> {/* link para que retroceda al menu principal */}
                        <img src="./Imagenes/arrow-left.svg" className="white" alt="" />
                    </Link>

                    <div>{pokemonfiltered.name}</div> {/* Nombre del Pokemon*/}

                    <div className="marginNumber"> {/* numero del pokemon*/}
                        #{ceros(pokemonfiltered.id) }

                        
                    </div>
                </div>

              
                <div className="modal-2row"> {/*grilla que contiene las imagenes del pokemon y las flechas */}
                     {
                        index !==0 &&(
                     
                    <Link to={`/${pokemonfiltered.id}`} className="white arrow izq" > {/*Cambio de pagina al anterior pokemon */}
                        <img src="./Imagenes/frame.svg" className="arrow-right " alt=""/>
                    </Link>)}{/* si el index es distinto de 0 renderiza la flecha de la izquierda para ir hacia el pok anterio*/}

                    <div className="div-poke-img img"> {/* Imagen del Pokemon  */}
                        <img src={pokemonfiltered.image} className="modal-poke-img" alt="" />
                    </div>
                    
                    
                {   
                index <(props.lista.length-1) && (
                    <Link to={`/${props.lista[index+1].id}`} className="white arrow der" > 
                        <img src="./Imagenes/frame.svg"  alt="" />
                    </Link>)}{/* Renderiza si el indice es menor a la cantidad de pokemones */}
                </div>
            </div>
            
            <div className="modal-bottom"> {/* Grilla de la parte blanca de la carta*/}

            {pokemonfiltered.SecondaryType==="" ? <div className={`modal-types`}> 
                    <span className={`modal-type ${pokemonfiltered.PrimaryType} font-type` }>{pokemonfiltered.PrimaryType}</span>
                </div>:
                <div className={`modal-types`}> 
                    <span className={`modal-type ${pokemonfiltered.PrimaryType}`}>{pokemonfiltered.PrimaryType}</span>
                    <span className={`modal-type ${pokemonfiltered.SecondaryType}`}>{pokemonfiltered.SecondaryType}</span>
                </div>}
                
  
                <div className={`bolder stats-card-background ${pokemonfiltered.PrimaryType} martop`}>  
                    About
                </div>


                <div className="modal-info"> {/*  grilla con la informacion de mi pokemon (no stats)*/}
                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/Weight.svg" alt=""/></div>
                            <div >{pokemonfiltered.weight} Kg</div>    
                        </div>
                        <div className="whm">Weight</div>
                    </div>

                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/height.svg" alt=""/></div>
                            <div>{pokemonfiltered.height} m</div>
                        </div>
                        <div className="whm">Height</div>
                    </div>

                    <div className="tworows">
                            <div >
                                <div>{pokemonfiltered.moves1} </div>
                                <div>{pokemonfiltered.moves2} </div>
                            </div>
                            <div className="whm moves">Moves</div>
                    </div>
                </div>
                <div className="modal-description "> {pokemonfiltered.description}</div>{/*DIV CON DESCRIPCION DEL POKEMON */}

                <div className={`bolder stats-card-background ${pokemonfiltered.PrimaryType}`}>Base stats</div>{/*DIV CON TEXTO DE STATS*/}
                <div className="modal-stats">
                    <div className="line2">
                        <ul className={`stats-card-background ${pokemonfiltered.PrimaryType}`}> 
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
                            <li>{`${pokemonfiltered.hp}`}</li>
                            <li>{`${pokemonfiltered.atk}`}</li>
                            <li>{`${pokemonfiltered.def}`}</li>
                            <li>{`${pokemonfiltered.satk}`}</li>
                            <li>{`${pokemonfiltered.sdef}`}</li>
                            <li>{`${pokemonfiltered.spd}`}</li>
                        </ul>
                    </div>
                    <div className="modal-range">  {/*DIV CON LAS STATS EN BARRAS DEL POKEMON */}
                        <ProgressBar now={pokemonfiltered.hp} className={`${pokemonfiltered.PrimaryType} progressBar`}  />
                        <ProgressBar now={pokemonfiltered.atk} className={`${pokemonfiltered.PrimaryType} progressBar`}/>
                        <ProgressBar now={pokemonfiltered.def} className={`${pokemonfiltered.PrimaryType} progressBar`}/>
                        <ProgressBar now={pokemonfiltered.satk} className={`${pokemonfiltered.PrimaryType} progressBar`}/>
                        <ProgressBar now={pokemonfiltered.sdef} className={`${pokemonfiltered.PrimaryType} progressBar`}/>
                        <ProgressBar now={pokemonfiltered.spd} className={`${pokemonfiltered.PrimaryType} progressBar`}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Pcard;