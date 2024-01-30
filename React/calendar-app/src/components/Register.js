import { useState } from "react";
import './Register.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
    const roles =["User"];
    const [email,setEmail] = useState("");
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const navigate =useNavigate();

    var [emailError,setEmailError]=useState("");
    var checkUSerData = ()=>{
        if(email=='')
        {
            setEmailError("Email cannot be empty");
            return false;
        }
           
        if(password=='')
            return false;
        return true;
    }
    const signUp = (event)=>{
        event.preventDefault();
        var checkData = checkUSerData();
        if(checkData==false)
        {
            alert('please check yor data')
            return;
        }
        
        axios.post("https://localhost:7117/api/User",{
            email: email,
            firstname:firstname,
            lastname:lastname,
            role:"User",
            password:password
    })
        .then((userData)=>{
            var token = userData.data.token;
            localStorage.setItem("token",token);
            localStorage.setItem("email",email);
            navigate("/login");
            window.location.reload();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className="login">
        <div>
            <form className="registerForm">
            <label className="form-control">Email</label>
            <input type="text" className="form-control" value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}/>
           <label className="alert alert-danger">{emailError}</label>
           <br/>
            <label className="form-control">Password</label>
            <input type="password" className="form-control" value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                     <br/>
            <label className="form-control">FirstName</label>
            <input type="text" className="form-control" value={firstname}
                    onChange={(e)=>{setFirstName(e.target.value)}}/>
             <br/>
            <label className="form-control">LastName</label>
            <input type="text" className="form-control" value={lastname}
                    onChange={(e)=>{setLastName(e.target.value)}}/>
             <br/>
            <button className="btn btn-primary button" onClick={signUp}>Sign Up</button>
            <button className="btn btn-danger button">Cancel</button>
            <br/>
            <br/>
            <strong>Already have an account?  <a href="/Login">Login</a>.</strong>
            </form>
            </div>
            </div>
    );
}

export default Register;