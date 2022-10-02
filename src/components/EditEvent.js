import React, { useContext } from 'react';
import EventForm from './EventForm';
import { useParams } from 'react-router-dom';
import EventsContext from '../context/EventsContext';

const EditEvent = ({ history }) => {
    const { events, setEvents } = useContext(EventsContext);
    const { id } = useParams();
    const eventToEdit = events.find((event) => event.id === id);

    const handleOnSubmit = (event) => {
        const filteredEvents = events.filter((event) => event.id !== id);
        setEvents([event, ...filteredEvents]);
        history.push('/');
    };

    return (
        <div>
        <EventForm event={eventToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditEvent;