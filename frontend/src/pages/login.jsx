import { useState } from "react"
import '../styles/login.css'
const Login = () => {
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const submit = () =>{
        // send request to db 
        // authenticate 
        // if username and password are valid : 
        window.location = '/admin'  
     }
    return (
        <div className="login-form">
            <h1>Login</h1>
               <input 
                    type = "text"
                    placeholder = "username"
                    value = {username}
                    onChange = {(e)=>setUsername(e.target.value)}
               />
                <input 
                    type = "password"
                    placeholder = "password"
                    value = {password}
                    onChange = {(e)=>setPassword(e.target.value)}
               />

               <button onClick={()=>submit()}>Login</button>
        </div>
    )
}

export default Login
