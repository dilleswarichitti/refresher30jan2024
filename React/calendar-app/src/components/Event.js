import './Event.css';
function Event(){
    var event = {
        title:"technical",
        description:"discussion",
        startdatetime : "2023-12-01 09:00:00",
        enddatetime: "2023-12-01 06:00:00",
        notificationdatetime : "2023-12-01 09:00:00",
        location: "Chennai",
        isrecurring:false,
        recurring_frequency:"",
        shareeventwith:"ayeshajasmeen79@gmail.com",
        access:"public",
        categoryId:1,
        email:"dilluchitti@gmail.com"
    }
    return(
        <div className="event">
            <h1>Event</h1>
            <br/>
            Event title : {event.title}
            <br/>
            Event description : {event.description}
            <br/>
            Event startdatetime : {event.startdatetime}
            <br/>
            Event enddatetime : {event.enddatetime}
            <br/>
            Event notificationdatetime : {event.notificationdatetime}
            <br/>
            Event location : {event.location}
            <br/>
            Event IsRecurring : {event.IsRecurring}
            <br/>
            Event recurring_frequency : {event.recurring_frequency}
            <br/>
            Event shareeventwith : {event.shareeventwith}
            <br/>
            Event access : {event.access}
            <br/>
            Event categoryId : {event.categoryId}
            <br/>
            Event email : {event.email}
        </div>
    );
}
export default Event;