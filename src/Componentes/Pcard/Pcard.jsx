import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';


const Pcard =(props)=>{   
        const lista=props.lista
        console.log(lista)
        const params = useParams()
        console.log(lista)
        const [pokemon,setPokemon] = useState(props.lista.find((pokemon)=>pokemon.id===304)); 
        const [index, setIndex] = useState (props.lista.indexOf(pokemon))

        useEffect(()=>{
            setPokemon(props.lista.find((pokemon)=>pokemon.id===304))
        },[params.id])

        useEffect(()=>{
            setIndex(props.lista.indexOf(pokemon))
        },[pokemon])
        

    return(
        
        <>
        <div className={`Modal-grid ${props.lista.PrimaryType}`}> {/* Grilla General del Pokemon*/}
            <div className="modal-name"> {/*Grilla que contiene la informacion de la parte de arriba */}
                <div className="modal-1row">

                    <Link to={`/`} key={props.lista.id}> {/* link para que retroceda al menu principal */}
                        <img src="./Imagenes/arrow-left.svg" className="white" alt="" />
                    </Link>

                    <div>{props.lista.name}</div> {/* Nombre del Pokemon*/}

                    <div className="marginNumber"> {/* numero del pokemon*/}
                        #{props.lista.id}
                    </div>
                </div>

              
                <div className="modal-2row"> {/*grilla que contiene las imagenes del pokemon y las flechas */}
                    {
                        index !==0 &&  ( 
                    <Link to={`/${props.lista.id}`} className="white arrow izq" > {/*Cambio de pagina al anterior pokemon */}
                        <img src="./Imagenes/frame.svg" className="arrow-right " alt=""/>
                    </Link>)}{/* si el index es distinto de 0 renderiza la flecha de la izquierda para ir hacia el pok anterio*/}

                    <div className="div-poke-img img"> {/* Imagen del Pokemon  */}
                        <img src={props.lista.image} className="modal-poke-img" alt="" />
                    </div>
                    
                    {
                        index <(props.lista) && (
                    <Link to={`/${props.lista.id}`} className="white arrow der" > {/*Cambio de pagina al siguiente pokemon */}
                        <img src="./Imagenes/frame.svg"  alt="" />
                    </Link>)}{/* Renderiza si el indice es menor a la cantidad de pokemones */}
                </div>
            </div>
            
            <div className="modal-bottom"> {/* Grilla de la parte blanca de la carta*/}


                <div className={`modal-types`}> {/*grilla con el tipo de pokemon o tipos */}
                    <span className={`modal-type ${props.lista.PrimaryType}`}>{props.lista.PrimaryType}</span>
                    <span className={`modal-type ${props.lista.SecondaryType}`}>{props.lista.SecondaryType}</span>
                </div>
  
                <div className={`bolder ${props.lista.PrimaryType} martop`}>  
                    About
                </div>


                <div className="modal-info"> {/*  grilla con la informacion de mi pokemon (no stats)*/}
                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/Weight.svg" alt=""/></div>
                            <div >{props.lista.weight}</div>    
                        </div>
                        <div className="whm">Weight</div>
                    </div>

                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/height.svg" alt=""/></div>
                            <div>{props.lista.height}</div>
                        </div>
                        <div className="whm">Height</div>
                    </div>

                    <div className="tworows">
                            <div >
                                <div>{props.lista.moves1} </div>
                                <div>{props.lista.moves2} </div>
                            </div>
                            <div className="whm moves">Moves</div>
                    </div>
                </div>
                <div className="modal-description "> {props.lista.description}</div>{/*DIV CON DESCRIPCION DEL POKEMON */}

                <div className={`bolder  ${props.lista.PrimaryType}`}>Base stats</div>{/*DIV CON TEXTO DE STATS*/}
                <div className="modal-stats">
                    <div className="line2">
                        <ul className={`about ${props.lista.PrimaryType}`}> 
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
                            <li>{`${props.lista.HP}`}</li>
                            <li>{`${props.lista.ATK}`}</li>
                            <li>{`${props.lista.DEF}`}</li>
                            <li>{`${props.lista.SATK}`}</li>
                            <li>{`${props.lista.SDEF}`}</li>
                            <li>{`${props.lista.SPD}`}</li>
                        </ul>
                    </div>
                    <div className="modal-range">  {/*DIV CON LAS STATS EN BARRAS DEL POKEMON */}
                        <ProgressBar now={props.lista.HP} className={`${props.lista.PrimaryType} progressBar`}  />
                        <ProgressBar now={props.lista.ATK} className={`${props.lista.PrimaryType} progressBar`}/>
                        <ProgressBar now={props.lista.DEF} className={`${props.lista.PrimaryType} progressBar`}/>
                        <ProgressBar now={props.lista.SATK} className={`${props.lista.PrimaryType} progressBar`}/>
                        <ProgressBar now={props.lista.SDEF} className={`${props.lista.PrimaryType} progressBar`}/>
                        <ProgressBar now={props.lista.SPD} className={`${props.lista.PrimaryType} progressBar`}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Pcard;