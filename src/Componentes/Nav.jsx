import React from "react";

const Navbar =(props)=> {


    console.log(props.inputSearch)
    return(

      
        <div className="NavBar"> {/*Div contenedor */}

            <div className="nav-first-row"> {/*Div con logo y texto*/}
                <div className="nav-columns ">
                    <div className="centrado">
                        <img src="./Imagenes/Pokeballblack.png" alt="" className="nav-logo" onClick={console.log(props.isLoggedIn)}/>
                    </div>

                    <div>Pokedéx</div>
                    
                    
                </div>
                
                <div className="nav-columns2">{/*Div con el filter */}
                    <div className="hashtag centrado" onClick={()=>props.changeOrder()}>{props.orderByNumber ? '#' : 'AZ'} </div>
                    <div><img src="./Imagenes/Arrow.svg" alt=""  className="nav-filter"/></div>
                </div>

                
                
            </div>

            <div className="nav-second-row"> {/*Div con filter */}
            <input type="search" placeholder="Buscar" className="finder" onChange={(e)=>props.setInputSearch(e.target.value)+props.setIswriting(!props.iswriting) }/>

            </div>
        </div>
    )
}
export default Navbar;