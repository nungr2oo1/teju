import { useState } from "react";

function Login(){
    

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if(userName == "" || password == ""){
            alert("Please enter a username and password");
        }

        const user = "admin";
        const pass = "123456";

        if(userName == user && password == pass){
            localStorage.setItem("isLoggedIn", true);
            window.location.reload();
        }else{
            alert("Invalid username or password");
        }
    }

    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={userName} onChange={(e)=>setUserName(e.target.value)} /><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;