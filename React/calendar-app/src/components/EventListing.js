import DisplayEvents from "./DisplayEvents";

function EventListing(props){
    return(
        <div>
           {props.eventList.map((event) => (
               <div key={event.eventId} className="alert alert-success">
                 <DisplayEvents event={Event}/>
                </div>))}
        </div>
    )
}

export default EventListing;