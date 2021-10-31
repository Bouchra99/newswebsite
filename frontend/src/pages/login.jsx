import { useState } from "react"
import '../styles/login.css'
const Login = () => {
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const submit = () =>{
      
        if(username!=="" && password!==""){
           const admin ={username,password};
            const options = {
                method : 'POST',
                mode : 'cors',
                headers : {'Content-Type':'application/json'},
                body: JSON.stringify(admin)
              
            }
            fetch('http://localhost:8080/api/v2/authenticate',options).then(

                    res => {
                      
                       // console.log(res)
                        if(res.status === 401 ){
                            window.alert("invalid username or password")
                        }else if(res.status ===200 ){
                            res.json().then(
                                // body => console.log(body.token)
                                body => localStorage.setItem('token', body.token)
                            )
                            window.location = "/admin" 
                        }else{
                            window.location = "/login"
                        }  
                       
                    }).catch(
                        err => {
                            console.log(err.message)
                    })
            
            
        } else {
            window.alert("Insert username & password")}
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
