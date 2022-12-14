import React from "react";
import { Link } from "react-router-dom";
const Formulario=()=>{
    return(
     <div className="formulario">
        <div className="form-go-home">
            <Link to={`/home`}  className="arrow-container-form"> {/* link para que retroceda al menu principal */}
                <img src="./Imagenes/arrow-left.svg" className="white arrow-size" alt="" />    
            </Link>
            <div className="form-text-home">Regresar</div>
        </div>
        <div className="form-inside">
            <div className="add-form-text">Añade un Pokemon</div>
            <div className="form-inputs">
                <div>
                    <div className="form-cols">
                        <div>Number</div>
                        <div>
                             <input type="text" id='pk-number' name="pk-number" form='pk-number' placeholder="Add a pokemon number" className="input-name"/>
                        </div>
                    </div >
                    <div className="form-cols">
                        <div>Name</div>
                        <div>
                             <input type="text" id='pk-name' name="pk-name" form='pk-name' placeholder="Add a pokemon name" className="input-name"/>
                        </div>
                    </div>
                </div>

                <div>
                    <div>Primary Type :</div>
                    <div>Secondary Type :</div>
                </div>
                
                <div>
                    <div>Weight :</div>
                    <div>Height :</div>
                    <div>Moves :</div>
                </div>

                <div>
                    Description
                </div>
                <div className="form-stats">
                    <div>
                        <div>Hp :</div>
                        <div>Atk :</div>
                        <div>Def :</div>
                    </div>
                    <div>
                        <div>Satk :</div>
                        <div>Sdef :</div>
                        <div>Spd :</div>
                    </div>
                </div>
                
                <div>
                     Image Url :
                </div>
            </div>
        </div>
     </div>   
    )

}

export default Formulario;