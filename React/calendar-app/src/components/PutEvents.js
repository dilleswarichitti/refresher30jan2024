import { useState } from "react";
import './AddEvent.css';
import axios from "axios";

function PutEvents({event}){
    const[Id,setId]=useState(event.id);
    const [title,setTitle] = useState(event.title);
    const [description,setDescription] = useState(event.description);
    const [startdatetime,setStartDateTime] = useState(event.startDateTime);
    const [enddatetime,setEndDateTime] = useState(event.endDateTime);
    const [notificationdatetime,setNotificationDateTime] = useState(event.notificationDateTime);
    const[location,setLocation]=useState(event.location);
    const [isrecurring,setIsRecurring] = useState(false);
    const[recurring_frequency,setRecurring_frequency] = useState(event.recurring_frequency);
    const[access,setAccess]=useState(event.access);
    const[category,setCategory] = useState(event.category);

    var event;
    var clickAdd = ()=>{
        console.log(event)
        alert('You clicked the button');
       event={
        "Id":event.id,
        "title":title,
        "description":description,
        "startdatetime":startdatetime,
        "enddatetime" : enddatetime,
        "notificationdatetime" : notificationdatetime,
        "location" : location,
        "isrecurring":isrecurring,
        "recurring_frequency" : recurring_frequency,
        "category":category,
        "access":access,
        "email": localStorage.getItem("email")
        }
        console.log(event);
        fetch('https://localhost:7117/api/Event',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(event)
        }).then(
            ()=>{
                alert("Event Updated");
                window.location.reload();
            }
        ).catch((e)=>{
            console.log(e)
        })
    }
    const Delete=()=>{
        console.log(Id)
        axios.delete('https://localhost:7117/api/event',{
            params:{
                Id:event.id
            }
        })
        .then((response)=>{
            console.log(response);
            alert("Event Deleted...!");
            window.location.reload();
        })
        .catch((err)=>{
            alert("could not delete");
            console.log(err);
        })
    } 

    return(
        <div className="inputcontainer">
            <h1>Event</h1>
            <br/>
            {/*<label className="form-control" htmlFor="pId">Id</label>
            <input id="pId" type="number" className="form-control" value={Id} onChange={(e)=>{setId(e.target.value)}}/>
            <br/>*/}
            <label className="form-control" htmlFor="ptitle">Title</label>
            <input id="ptitle" type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <br/>
            <label className="form-control" htmlFor="pdescription">Description</label>
            <textarea id="pdescription" className="form-control" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            <br/>
            <label className="form-control"  htmlFor="pstartdatetime">StartDateTime</label>
            <input id="pstartdatetime" type="datetime-local" className="form-control" value={startdatetime} onChange={(e)=>{setStartDateTime(e.target.value)}}/>
            <br/>
            <label className="form-control"  htmlFor="penddatetime">EndDateTime</label>
            <input id="penddatetime" type="datetime-local" className="form-control" value={enddatetime} onChange={(e)=>{setEndDateTime(e.target.value)}}/>
            <br/>  
            <label className="form-control"  htmlFor="notificationdatetime">NotificationDateTime</label>
            <input id="notificationdatetime" type="datetime-local" className="form-control" value={notificationdatetime} onChange={(e)=>{setNotificationDateTime(e.target.value)}}/>
            <br/>
            <label className="form-control"  htmlFor="plocation">Location</label>
            <input id="plocation" type="text" className="form-control" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
            <br/>
            <label className="form-boolean">IsRecurring</label>
            <select className="form-boolean" onChange={(e) => setIsRecurring(e.target.value === 'true')}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <br/>
            {isrecurring && (
            <div>
                <br/>
            <div className="form-group">
            <label for="recurring_frequency">Recurring_frequency</label>
            <select id="recurring_frequency" className="form-select" value={recurring_frequency}
              onChange={(e) => setRecurring_frequency(e.target.value)}>
              <option> Choose Recurrence--- </option>
              <option value="everyday">EveryDay</option>
              <option value="everyweek">EveryWeek</option>
              <option value="everymonth">EveryMonth</option>
              <option value="everyyear">EveryYear</option>
            </select>
            </div>
            </div>
            )}
            <br/>
            <label className="form-control"  htmlFor="paccess">Access</label>
            <select className="form-select" value={access} onChange={(e) => setAccess(e.target.value)}>
            <option> Choose Access--- </option>  
            <option value="public">Public</option>
            <option value="private">Private</option>
            </select>
            <br/>
            <label className="form-control"  htmlFor="pcategory">Category</label>
            <select className="form-select" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <option> Choose Category--- </option>  
            <option value="work">Work</option>
            <option value="family">Family</option>
            <option value="personal">Personal</option>
            </select>
            <br/> 
            <button onClick={clickAdd} className="btn btn-primary">Update Event</button>
            <button onClick={Delete} className="btn btn-danger">Delete Event</button>
       </div>
    );
}

export default PutEvents;