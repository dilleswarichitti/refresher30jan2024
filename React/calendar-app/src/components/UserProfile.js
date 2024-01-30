import axios from "axios";
import { useEffect, useState } from "react";
import './UserProfile.css';

function UserProfile(){
    const [user,setUser]=useState({});

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
            console.log(posts);
            setUser(posts);
            console.log(user);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

return(
    <div className="User">
    <div>
        <form className="registerForms">
            <label className="form-control">Email</label>
            <input type="text" className="form-control" value={user.email} disabled/>
           <br/>
            <label className="form-control">FirstName</label>
                <input type="text" className="form-control" value={user.firstName} disabled/>
             <br/>
            <label className="form-control">LastName</label>
                <input type="text" className="form-control" value={user.lastName} disabled/>
             <br/>
            <label className="form-control">Role</label>
                <input type="text" className="form-control" value={user.role} disabled/>
            <br/>
            
        </form>
    </div>
    </div>
)
    
}

export default UserProfile;