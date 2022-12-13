import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login=(props)=>{
let navigate=useNavigate()
    function loguear(){
        props.loginUser()
        if (props.isLoggedIn==true){
        navigate('/home')
        } else{
            console.log("no funciona el logueo")
        }
    }

    return (
        
            <div className="login">
                <div className="centrar">
                    <h1 className="register-text lowmr">¡Ingresa!</h1>
                </div>
                
                    <div className="datos" id="formulario">
                        <div className="formu">
                            <label  className="centrar">Ingrese su Email 📧</label>
                            <input type="text" id='email' name="email" placeholder="Tu correo" form='email' className="input_large"/>
                        </div>
                        <div className="formu">
                            <label  className="centrar space">Ingrese su contraseña 🔒</label>
                            <input type="password" id='password' name="password" form='password' placeholder="Tu contraseña" className="input_large"/>
                            
                        </div>
                        <div className="enviar">
                            <input className="submit"  type="button" value="Submit" onClick={loguear}/>
                        </div>
                    </div>
            </div>     

)}



