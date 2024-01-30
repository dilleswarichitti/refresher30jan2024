import React, { useState } from 'react';
import axios from 'axios';
import MyCalendar from './MyCalendar'; // Import your calendar component
import './GetAccess.css';

function GetAccess() {
  const [access, setAccess] = useState('');
  const [publicEvents, setPublicEvents] = useState([]);
  const [privateEvents, setPrivateEvents] = useState([]);

  const getEvents = (event) => {
    event.preventDefault();
    console.log(access);

    axios.get('https://localhost:7117/api/event/access', {
      params: {
        Access: access,
      },
    })
      .then((response) => {
        const posts = response.data;
        console.log(posts);

        // Separate events into public and private based on the 'access' property
        const publicEvents = posts.filter(event => event.access === 'public');
        const privateEvents = posts.filter(event => event.access === 'private');
        setPublicEvents(publicEvents);
        setPrivateEvents(privateEvents);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="search-containers">
      <form>
        <br />
        <label className="form-control"  htmlFor="paccess">Access</label>
            <select className="form-select" value={access} onChange={(e) => setAccess(e.target.value)}>
            <option>..Choose Access...</option>  
            <option value="public">Public</option>
            <option value="private">Private</option>
            </select>
        <div className="row">
          <button className="btn btn-success" onClick={getEvents}>Get All Events</button>
        </div>
      </form>
      <div>
        <br/>
      <h2>Public Events</h2>
      {publicEvents.length > 0 ? (
        <MyCalendar events={publicEvents} />
      ) : (
        <div>No public events available yet</div>
      )}
      </div>
      <div>

      <h2>Private Events</h2>
      {privateEvents.length > 0 ? (
        <MyCalendar events={privateEvents} />
      ) : (
        <div>No private events available yet</div>
      )}
    </div>
    </div>
  );
}

export default GetAccess;