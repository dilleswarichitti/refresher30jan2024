import { useState } from "react";
import './AddEvent.css';

function DeleteEvent(){
    const [Id,setId] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    //const[categoryId,setCategoryId] = useState("");
    const[email,setEmail]=useState("");
    var event;
    var clickAdd = ()=>{
        alert('You clicked the button');
       event={
        "Id":Id,
        "title":title,
        "description":description,
       // "categoryId":categoryId,
       "email":email
        }
        console.log(event);
        fetch('https://localhost:7117/api/Event',{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(event)
        }).then(
            ()=>{
                alert("Event Deleted");
            }
        ).catch((e)=>{
            console.log(e)
        })
    }

    return(
        <div className="inputcontainer">
            <h1>Event</h1>
            <br/>
            <label className="form-control" for="pId">Id</label>
            <input id="pId" type="number" className="form-control" value={Id} onChange={(e)=>{setId(e.target.value)}}/>
            <br/>
            
            <label className="form-control" for="ptitle">Title</label>
            <input id="ptitle" type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <br/>
            <label className="form-control" htmlFor="pdescription">Description</label>
            <textarea id="pdescription" className="form-control" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            <br/>
            <label className="form-control"  for="pemail">Email</label>
            <input id="pemail" type="text" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <button onClick={clickAdd} className="btn btn-primary">Delete Event</button>
        </div>
    );
}

export default DeleteEvent;