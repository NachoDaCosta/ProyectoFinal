import React from 'react';

export const Login=(props)=>{

    return (
        
            <div className="login">
                <div className="centrar">
                    <h1 className="register-text lowmr">¡Ingresa!</h1>
                </div>
                
                    <div className="datos" id="formulario">
                        <div className="formu">
                            <label  className="centrar">Ingrese su Email 📧</label>
                            <input type="text" id="email" name="email" placeholder="Tu correo" className="input_large"/>
                        </div>
                        <div className="formu">
                            <label  className="centrar space">Ingrese su contraseña 🔒</label>
                            <input type="password" id="password" name="password" placeholder="Tu contraseña" className="input_large"/>
                            
                        </div>
                        <div className="enviar">
                            <input className='submit' type="button" value="Submit" onClick={props.Login}/>
                        </div>
                    </div>

                
            </div>     

)}



