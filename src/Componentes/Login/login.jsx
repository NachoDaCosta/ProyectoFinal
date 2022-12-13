import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login=(props)=>{
    
const [user, setUser] = useState([])


const logueo=()=>{
    props.setIsLoggedIn(true)
    
  }

    
    
let navigate=useNavigate()
    


 const loginUser = () => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: document.getElementById('email').value, password: document.getElementById('password').value })
    }
    fetch('http://localhost:8080/auth/login', requestOption)
    .then(response => response.json())
    .then(data => {
      setUser(data)
       if(data.error===null){
      logueo()
      navigate("/home")
      console.log("hice un logueo"+ logueo)
    }
    })
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
                            <input className="submit"  type="button" value="Submit" onClick={loginUser(user)}/>
                        </div>
                    </div>

                
            </div>     

)}



