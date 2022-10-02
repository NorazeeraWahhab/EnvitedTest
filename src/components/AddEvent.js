import React, { useContext } from 'react';
import EventForm from './EventForm';
import EventsContext from '../context/EventsContext';

const AddEvent = ({ history }) => {
    const { events, setEvents } = useContext(EventsContext);
    const handleOnSubmit = (event) => {
        setEvents([event, ...events]);
      history.push('/');
    };
  
    return (
      <React.Fragment>
        <EventForm handleOnSubmit={handleOnSubmit} />
      </React.Fragment>
    );
  };

export default AddEvent;