import { useState } from "react";

function Schedules(){
    const[eventList,setEventList]=useState([])
    var getEvents=()=>{
        fetch('https://localhost:7117/api/Event/All',{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(
            async(data)=>{
                var myData = await data.json();
                await console.log(myData);
                await setEventList(myData);
            }
        ).catch((e)=>{
            console.log(e)
        })
    }
    //var checkEvents=eventList.length>0?true:false;
    return (
        <div>
          <h1 className="alert alert-info">Events</h1>
          <button className="btn btn-info" onClick={() => getEvents()}> Get All Events </button>
          <br/>
          <br/>
        <ul>
        {eventList.map(event => (
          <li key={event.id}>         
            <strong>{event.title}</strong> - {""} {event.startDateTime}
          </li>
        ))}
        </ul>
        </div>
      );
    }
    
export default Schedules;