import { useState } from "react";
import './AddEvent.css';

function AddEvent(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [startdatetime,setStartDateTime] = useState("");
    const [enddatetime,setEndDateTime] = useState("");
    const [notificationdatetime,setNotificationDateTime] = useState("");
    const[location,setLocation]=useState("");
    const [isrecurring,setIsRecurring] = useState(false);
    const[recurring_frequency,setRecurring_frequency] = useState("");
    const[shareeventwith,setShareEventWith]=useState("");
    const[access,setAccess]=useState("");
    const[category,setCategory] = useState("");
    const[email,setEmail]=useState("");

    var event;
    var clickAdd = () => {
        alert('You clicked the button');
    
        // Get the current date
        const currentDate = new Date();
    
        // Convert startdatetime to a Date object
        const startDate = new Date(startdatetime);
    
        // Check if the startdatetime is in the past
        if (startDate < currentDate) {
            alert("Cannot add events for past dates.");
            return;
        }
    
        // Proceed to add the event
        event = {
            "title": title,
            "description": description,
            "startdatetime": startdatetime,
            "enddatetime": enddatetime,
            "notificationdatetime": notificationdatetime,
            "location": location,
            "isrecurring": isrecurring,
            "recurring_frequency": recurring_frequency,
            "shareeventwith": shareeventwith,
            "access": access,
            "category": category,
            "email": localStorage.getItem("email")
        };
    
        console.log(event);
    
        fetch('https://localhost:7117/api/Event', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(event)
        }).then(
            () => {
                alert("Event Added");
                window.location.reload();
            }
        ).catch((e) => {
            console.log(e);
        });
    };
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
            <button onClick={clickAdd} className=" btnput ">Add Event</button>
            
       </div>
    );
}


export default AddEvent;