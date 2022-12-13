import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login=(props)=>{
    const navigate=useNavigate()
    

    return (
        
            <div className="login">
                <div className="centrar">
                    <h1 className="register-text lowmr">¡Ingresa!</h1>
                </div>
                
                    <div className="datos" id="formulario">
                        <div className="formu">
                            <label  className="centrar">Ingrese su Email 📧</label>
                            <input type="text" id="email" name="email" placeholder="Tu correo" form='email' className="input_large"/>
                        </div>
                        <div className="formu">
                            <label  className="centrar space">Ingrese su contraseña 🔒</label>
                            <input type="password" id="password" name="password" form='password' placeholder="Tu contraseña" className="input_large"/>
                            
                        </div>
                        <div className="enviar">
                            <input className="submit"  type="button" value="Submit" onClick={props.loginUser}/>
                        </div>
                    </div>

                
            </div>     

)}



