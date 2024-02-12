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
        axios.delete('https://localhost:7117/api/Event',{
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
            <h1>Events</h1>
        <div class="input-container ic1">
            <input id="title" class="input" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}  />
            <div class="cut"></div>
            <label for="title" class="placeholder">Title</label>
        </div>
        <div class="input-container ic2">
            <input id="description" class="input" type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
            <div class="cut"></div>
            <label for="description" class="placeholder">Description</label>
        </div>
        <div class="input-container ic1">
            <input id="startdatetime" class="input" type="datetime-local" value={startdatetime} onChange={(e)=>{setStartDateTime(e.target.value)}}  />
            <div class="cut"></div>
            <label for="startdatetime" class="placeholder">StartDateTime</label>
        </div>
        <div class="input-container ic2">
            <input id="enddatetime" class="input" type="datetime-local" value={enddatetime} onChange={(e)=>{setEndDateTime(e.target.value)}} />
            <div class="cut"></div>
            <label for="enddatetime" class="placeholder">EndDateTime</label>
        </div>
        <div class="input-container ic1">
            <input id="notificationdatetime" class="input" type="datetime-local" value={notificationdatetime} onChange={(e)=>{setNotificationDateTime(e.target.value)}}  />
            <div class="cut"></div>
            <label for="notificationdatetime" class="placeholder">NotificationDateTime</label>
        </div>
        <div class="input-container ic2">
            <input id="location" class="input" type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
            <div class="cut"></div>
            <label for="location" class="placeholder">Location</label>
        </div>
        <div class="input-container ic2">
            <select id="recurring" class="input"  onChange={(e)=>setIsRecurring(e.target.value === 'true')} >
            <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <div class="cut"></div>
            <label for="recurring" class="placeholder">IsRecurring</label>
        </div>
            {isrecurring && (
            <div>
                <div class="input-container ic2">
            <select id="recurring_frequency" class="input"  onChange={(e)=>setRecurring_frequency(e.target.value)} >
            <option value="everyday">EveryDay</option>
              <option value="everyweek">EveryWeek</option>
              <option value="everymonth">EveryMonth</option>
              <option value="everyyear">EveryYear</option>
            </select>
            <div class="cut"></div>
            <label for="recurring_frequency" class="placeholder">Recurring_frequency</label>
        </div>
            </div>
            )}
            <br/>
            
        <div class="input-container ic2">
            <select id="access" class="input"  onChange={(e)=>setAccess(e.target.value )} >
            <option value="choose here....">choose here....</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
            <div class="cut"></div>
            <label for="access" class="placeholder">Access</label>
        </div>
            <br/>
            <div class="input-container ic2">
            <select id="category" class="input"  onChange={(e)=>setCategory(e.target.value )} >
            <option value="choose here....">choose here....</option>
              <option value="work">Work</option>
              <option value="Family">Family</option>
              <option value="personal">Personal</option>
            </select>
            <div class="cut"></div>
            <label for="category" class="placeholder">Category</label>
        </div>
            <br/> 
            <button onClick={clickAdd} className=" btnput ">Update Event</button>
            <button onClick={Delete} className="btnput">Delete Event</button>
       </div>
    );
}

export default PutEvents;