import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';


const Pcard =(props)=>{   
        const lista=props.filtrada[0]
        const [pokemon,setPokemon] = useState(lista); 
    
      
    return(
        
        <>
        <div className={`Modal-grid ${lista.PrimaryType}`}> {/* Grilla General del Pokemon*/}
            <div className="modal-name"> {/*Grilla que contiene la informacion de la parte de arriba */}
                <div className="modal-1row">

                    <Link to={`/`} key={lista.id}> {/* link para que retroceda al menu principal */}
                        <img src="./Imagenes/arrow-left.svg" className="white" alt="" />
                    </Link>

                    <div>{lista.name}</div> {/* Nombre del Pokemon*/}

                    <div className="marginNumber"> {/* numero del pokemon*/}
                        #{lista.id}
                    </div>
                </div>

              
                <div className="modal-2row"> {/*grilla que contiene las imagenes del pokemon y las flechas */}
                     
                    <Link to={`/${lista.id}`} className="white arrow izq" > {/*Cambio de pagina al anterior pokemon */}
                        <img src="./Imagenes/frame.svg" className="arrow-right " alt=""/>
                    </Link>{/* si el index es distinto de 0 renderiza la flecha de la izquierda para ir hacia el pok anterio*/}

                    <div className="div-poke-img img"> {/* Imagen del Pokemon  */}
                        <img src={lista.image} className="modal-poke-img" alt="" />
                    </div>
                    
                    
                        
                    <Link to={`/${lista.id}`} className="white arrow der" > {/*Cambio de pagina al siguiente pokemon */}
                        <img src="./Imagenes/frame.svg"  alt="" />
                    </Link>{/* Renderiza si el indice es menor a la cantidad de pokemones */}
                </div>
            </div>
            
            <div className="modal-bottom"> {/* Grilla de la parte blanca de la carta*/}


                <div className={`modal-types`}> {/*grilla con el tipo de pokemon o tipos */}
                    <span className={`modal-type ${lista.PrimaryType}`}>{lista.PrimaryType}</span>
                    <span className={`modal-type ${lista.SecondaryType}`}>{lista.SecondaryType}</span>
                </div>
  
                <div className={`bolder ${lista.PrimaryType} martop`}>  
                    About
                </div>


                <div className="modal-info"> {/*  grilla con la informacion de mi pokemon (no stats)*/}
                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/Weight.svg" alt=""/></div>
                            <div >{lista.weight}</div>    
                        </div>
                        <div className="whm">Weight</div>
                    </div>

                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/height.svg" alt=""/></div>
                            <div>{lista.height}</div>
                        </div>
                        <div className="whm">Height</div>
                    </div>

                    <div className="tworows">
                            <div >
                                <div>{lista.moves1} </div>
                                <div>{lista.moves2} </div>
                            </div>
                            <div className="whm moves">Moves</div>
                    </div>
                </div>
                <div className="modal-description "> {lista.description}</div>{/*DIV CON DESCRIPCION DEL POKEMON */}

                <div className={`bolder  ${lista.PrimaryType}`}>Base stats</div>{/*DIV CON TEXTO DE STATS*/}
                <div className="modal-stats">
                    <div className="line2">
                        <ul className={`about ${lista.PrimaryType}`}> 
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
                            <li>{`${lista.hp}`}</li>
                            <li>{`${lista.atk}`}</li>
                            <li>{`${lista.def}`}</li>
                            <li>{`${lista.satk}`}</li>
                            <li>{`${lista.sdef}`}</li>
                            <li>{`${lista.spd}`}</li>
                        </ul>
                    </div>
                    <div className="modal-range">  {/*DIV CON LAS STATS EN BARRAS DEL POKEMON */}
                        <ProgressBar now={lista.hp} className={`${lista.PrimaryType} progressBar`}  />
                        <ProgressBar now={lista.atk} className={`${lista.PrimaryType} progressBar`}/>
                        <ProgressBar now={lista.def} className={`${lista.PrimaryType} progressBar`}/>
                        <ProgressBar now={lista.satk} className={`${lista.PrimaryType} progressBar`}/>
                        <ProgressBar now={lista.sdef} className={`${lista.PrimaryType} progressBar`}/>
                        <ProgressBar now={lista.spd} className={`${lista.PrimaryType} progressBar`}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Pcard;