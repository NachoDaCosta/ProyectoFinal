import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';


const Pcard =(props)=>{   
    console.log(props.pokemon)     
        const params = useParams()
        const [pokemon,setPokemon] = useState(props.pokemon.find((pokemon)=>pokemon.id===params.id)); 
        
        const [index, setIndex] = useState (props.pokemon.indexOf(pokemon))

        useEffect(()=>{
            setPokemon(props.pokemon.find((pokemon)=>pokemon.id===params.id))
        },[params.id])

        useEffect(()=>{
            setIndex(props.pokemon.indexOf(pokemon))
        },[pokemon])
        

    return(
        
        <>
        <div className={`Modal-grid ${props.pokemon.PrimaryType}`}> {/* Grilla General del Pokemon*/}
            <div className="modal-name"> {/*Grilla que contiene la informacion de la parte de arriba */}
                <div className="modal-1row">

                    <Link to={`/`} key={props.pokemon.id}> {/* link para que retroceda al menu principal */}
                        <img src="./Imagenes/arrow-left.svg" className="white" alt="" />
                    </Link>

                    <div>{props.pokemon.name}</div> {/* Nombre del Pokemon*/}

                    <div className="marginNumber"> {/* numero del pokemon*/}
                        #{props.pokemon.id}
                    </div>
                </div>

              
                <div className="modal-2row"> {/*grilla que contiene las imagenes del pokemon y las flechas */}
                    {
                        index !==0 &&  ( 
                    <Link to={`/${props.pokemon[index-1].id}`} className="white arrow izq" > {/*Cambio de pagina al anterior pokemon */}
                        <img src="./Imagenes/frame.svg" className="arrow-right " alt=""/>
                    </Link>)}{/* si el index es distinto de 0 renderiza la flecha de la izquierda para ir hacia el pok anterio*/}

                    <div className="div-poke-img img"> {/* Imagen del Pokemon  */}
                        <img src={props.pokemon.image} className="modal-poke-img" alt="" />
                    </div>
                    
                    {
                        index <(props.pokemon.length-1) && (
                    <Link to={`/${props.pokemon[index+1].id}`} className="white arrow der" > {/*Cambio de pagina al siguiente pokemon */}
                        <img src="./Imagenes/frame.svg"  alt="" />
                    </Link>)}{/* Renderiza si el indice es menor a la cantidad de pokemones */}
                </div>
            </div>
            
            <div className="modal-bottom"> {/* Grilla de la parte blanca de la carta*/}


                <div className={`modal-types`}> {/*grilla con el tipo de pokemon o tipos */}
                    <span className={`modal-type ${props.pokemon.PrimaryType}`}>{props.pokemon.PrimaryType}</span>
                    <span className={`modal-type ${props.pokemon.SecondaryType}`}>{props.pokemon.SecondaryType}</span>
                </div>
  
                <div className={`bolder ${props.pokemon.PrimaryType} martop`}>  
                    About
                </div>


                <div className="modal-info"> {/*  grilla con la informacion de mi pokemon (no stats)*/}
                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/Weight.svg" alt=""/></div>
                            <div >{props.pokemon.weight}</div>    
                        </div>
                        <div className="whm">Weight</div>
                    </div>

                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/height.svg" alt=""/></div>
                            <div>{props.pokemon.height}</div>
                        </div>
                        <div className="whm">Height</div>
                    </div>

                    <div className="tworows">
                            <div >
                                <div>{props.pokemon.moves1} </div>
                                <div>{props.pokemon.moves2} </div>
                            </div>
                            <div className="whm moves">Moves</div>
                    </div>
                </div>
                <div className="modal-description "> {props.pokemon.description}</div>{/*DIV CON DESCRIPCION DEL POKEMON */}

                <div className={`bolder  ${props.pokemon.PrimaryType}`}>Base stats</div>{/*DIV CON TEXTO DE STATS*/}
                <div className="modal-stats">
                    <div className="line2">
                        <ul className={`about ${props.pokemon.PrimaryType}`}> 
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
                            <li>{`${props.pokemon.HP}`}</li>
                            <li>{`${props.pokemon.ATK}`}</li>
                            <li>{`${props.pokemon.DEF}`}</li>
                            <li>{`${props.pokemon.SATK}`}</li>
                            <li>{`${props.pokemon.SDEF}`}</li>
                            <li>{`${props.pokemon.SPD}`}</li>
                        </ul>
                    </div>
                    <div className="modal-range">  {/*DIV CON LAS STATS EN BARRAS DEL POKEMON */}
                        <ProgressBar now={props.pokemon.HP} className={`${props.pokemon.PrimaryType} progressBar`}  />
                        <ProgressBar now={props.pokemon.ATK} className={`${props.pokemon.PrimaryType} progressBar`}/>
                        <ProgressBar now={props.pokemon.DEF} className={`${props.pokemon.PrimaryType} progressBar`}/>
                        <ProgressBar now={props.pokemon.SATK} className={`${props.pokemon.PrimaryType} progressBar`}/>
                        <ProgressBar now={props.pokemon.SDEF} className={`${props.pokemon.PrimaryType} progressBar`}/>
                        <ProgressBar now={props.pokemon.SPD} className={`${props.pokemon.PrimaryType} progressBar`}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Pcard;