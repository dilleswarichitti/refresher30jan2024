import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import './UserProfile.css';

function UserProfile(){
    const [user,setUser]=useState({});
    const[oldpass,setOldpass]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setRePassword]=useState("");
    const [fname,setFName]=useState("");
    const [lname,setLName]=useState("");
    const [role,setRole]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = ()=>{
        axios.get('https://localhost:7117/api/user',{
            params: {
                Email : localStorage.getItem("email")
            }
          })
          .then((response) => {
            const posts = response.data[0];
            setUser(posts);
            setFName(posts.firstName);
            setLName(posts.lastName);
            setRole(posts.role);
            setOldpass(posts.password);
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }

    const submit=()=>{
        if(password===repassword || password===""){
          if(password===""){
            setPassword(oldpass);
          }
            axios.put('https://localhost:7117/api/User/UpdateUser',{
                email: localStorage.getItem("email"),
                firstName: fname,
                lastName: lname,
                password: password,
              })
          .then((response) => {
            alert("password updated");
            navigate("/events");
            })
            .catch(function (error) {
                alert("error");
            })
        }
        else{
            alert("Password does not match");
            setPassword("");
            setRePassword("");
        }
    }

return(
    <div className="user">
        <div class="form">
      <div class="title">User Profile</div>
      <div class="subtitle">Let's update your account!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" value={fname} onChange={(e)=>{setFName(e.target.value)}}  />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" value={lname} onChange={(e)=>{setLName(e.target.value)}} />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" value={user.email} disabled />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email </label>
      </div>
      <div class="input-container ic2">
        <input id="password" class="input" type="password" placeholder=" " value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <div class="cut"></div>
        <label for="password" class="placeholder">Password</label>
      </div>
      <div class="input-container ic2">
        <input id="repassword" class="input" type="password" placeholder=" "  value={repassword} onChange={(e)=>{setRePassword(e.target.value)}} />
        <div class="cut"></div>
        <label for="repassword" class="placeholder">Re-Password</label>
      </div>
      
      <button type="text" onClick={submit} class="submit">Update</button>
    </div>
    </div>
)
    
}

export default UserProfile;