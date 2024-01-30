import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Year from './Year';
import Popup from 'reactjs-popup';
import AddEvent from './AddEvent';
import PutEvent from './PutEvents';
import './MyCalendar.css';

const localizer = momentLocalizer(moment);

function MyCalendar({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddEventPopup, setShowAddEventPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const openPopup = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
    setShowAddEventPopup(false);
  };

  const handleAddEvent = () => {
    closePopup();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredEvents = events.filter((event) => {
    const includesSearchTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || event.category === selectedCategory;
    return includesSearchTerm && matchesCategory;
  });

  const renderPopup = () => {
    if (showAddEventPopup) {
      return (
        <Popup open={showAddEventPopup} onClose={closePopup} position="right center">
          <AddEvent onAddEvent={handleAddEvent} />
          <button onClick={closePopup}>Close</button>
        </Popup>
      );
    } else if (selectedEvent) {
      return (
        <Popup class="crollspy-example" data-bs-spy="scroll" open={selectedEvent !== null} onClose={closePopup} position="right center">
          <PutEvent event={selectedEvent} />
          <button onClick={closePopup}>Close</button>
        </Popup>
      );
    }

    return null;
  };

  const formatDate = (date, view) => {
    if (view === 'day') {
      return moment(date).format('MM DD, YYYY hh:mm A');
    } else if (view === 'week') {
      return moment(date).format('MM DD, YYYY');
    } else {
      return moment(date).format('MM DD, YYYY hh:mm A');
    }
  };

  const handleSelectSlot = (slotInfo) => {
    const { action } = slotInfo;
    if (action === 'click' || action === 'select') {
      setShowAddEventPopup(true);
    }
  };

  const eventStyle = (event) => {
    const colorMap = {
      work: '#10296d',
      family: '#ed0249',
      personal: '#6f48eb',
    };

    const formattedStartDate = formatDate(event.startDateTime);
    const formattedEndDate = formatDate(event.endDateTime);
    const backgroundColor = colorMap[event.category] || '#10296d';

    return {
      style: {
        backgroundColor,
        color: 'white',
      },
      content: (
        <div>
          <p>{`Start: ${formattedStartDate}`}</p>
          <p>{`End: ${formattedEndDate}`}</p>
        </div>
      ),
    };
  };

  return (
    <div className="calendar">
      <div
        className="search-container">
        <input type="text" placeholder= "🔎Search Events" value={searchTerm} onChange={handleSearchChange} />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="work">Work</option>
          <option value="family">Family</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        defaultView="month"
        startAccessor="startDateTime"
        endAccessor="endDateTime"
        selectable
        onSelectEvent={(event) => openPopup(event)}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={(event) => eventStyle(event)}
        style={{ height: 500, width: 1000 }}
        views={{
          month: true,
          year: Year,
        }}
        messages={{ year: 'Year' }}
        formats={{ dayFormat: 'D', weekdayFormat: 'ddd' }}
      />
      {renderPopup()}
    </div>
  );
}

export default MyCalendar;
