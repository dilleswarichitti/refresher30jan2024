import React from 'react';

const DisplayEvents = ({ event }) => (
  <div>
    <div className="alert alert-success">
                  <h6>Event title: {event.title}</h6>
                  <br />
                  Event description: {event.description}
                  <br />
                  Event start datetime: {event.startDateTime}
                  <br />
                  Event end datetime: {event.endDateTime}
                  <br />
                  Event notification datetime: {event.notificationDateTime}
                  <br />
                  Event location: {event.location}
                  <br />
                  Event IsRecurring: {event.isRecurring ? 'Yes' : 'No'}
                  <br />
                  Event recurring frequency: {event.recurring_frequency}
                  <br />
                  Event ShareEventWith: {event.shareEventWith}
                  <br />
                  Event Access: {event.access}
                  <br />
                  Event categoryId: {event.categoryId}
                  <br />
                  Event email: {event.email}
                </div>
  </div>
);

export default DisplayEvents;
