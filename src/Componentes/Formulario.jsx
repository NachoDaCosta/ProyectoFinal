import React from "react";
import { Link } from "react-router-dom";
const Formulario=()=>{
    return(
     <div className="formulario">
        <div className="form-go-home">
            <Link to={`/home`}  className="arrow-container-form"> {/* link para que retroceda al menu principal */}
                <img src="./Imagenes/arrow-left.svg" className="white arrow-size" alt="" />    
            </Link>
            <div className="form-text-home">Return</div>
        </div>
        <div className="form-inside">
            <div className="add-form-text">Add a Pokemon</div>
            <div className="form-inputs">
                <div>
                    <div className="form-cols">
                        <div>Number:</div>
                        <div>
                             <input type="text" id='pk-number' name="pk-number" form='pk-number' placeholder="Add a pokemon number" className="input-name"/>
                        </div>
                    </div >
                    <div className="form-cols">
                        <div>Name:</div>
                        <div>
                             <input type="text" id='pk-name' name="pk-name" form='pk-name' placeholder="Add a pokemon name" className="input-name"/>
                        </div>
                    </div>
                </div>

                <div>
                <div className="form-cols-type">
                        <div>Primary Type:</div>
                        <div>
                             <input type="text" id='pk-ptype' name="pk-ptype" form='pk-ptype' placeholder="Pokemon Primary Type" className="input-type"/>
                        </div>
                    </div>
                    <div className="form-cols-type">
                        <div>Secondary Type:</div>
                        <div>
                             <input type="text" id='pk-stype' name="pk-stype" form='pk-stype' placeholder="Pokemon Secondary Type" className="input-type"/>
                        </div>
                    </div>
                </div>
                
                <div className="form-4rows">
                    <div className="form-cols">
                        <div>Weight:</div>
                        <div>
                             <input type="text" id='pk-weight' name="pk-weight" form='pk-weight' placeholder="Add a value" className="input-name"/>
                        </div>
                    </div >
                    <div className="form-cols">
                        <div>Height:</div>
                        <div>
                             <input type="text" id='pk-height' name="pk-height" form='pk-height' placeholder="Add a value" className="input-name"/>
                        </div>
                    </div >
                    <div className="form-cols">
                        <div>Move1:</div>
                        <div>
                             <input type="text" id='pk-move1' name="pk-move" form='pk-move' placeholder="Add a value" className="input-name"/>
                        </div>
                    </div >   
                    <div className="form-cols">
                        <div>Move2:</div>
                        <div>
                             <input type="text" id='pk-move2' name="pk-move" form='pk-move' placeholder="Add a value" className="input-name"/>
                        </div>
                    </div >
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