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
            <h1>Event</h1>
            <br/>
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
            <label className="form-control"  htmlFor="pshareeventwith">ShareEventWith</label>
            <input id="pshareeventwith" type="text" className="form-control" value={shareeventwith} onChange={(e)=>{setShareEventWith(e.target.value)}}/>
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
            <button onClick={clickAdd} className="btn btn-primary">Add Event</button>
        </div>
    );
}

export default AddEvent;