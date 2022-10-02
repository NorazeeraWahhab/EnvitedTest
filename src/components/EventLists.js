import React, { useContext } from 'react';
import _ from 'lodash';
import Event from './Event';
import EventsContext from '../context/EventsContext';


const EventLists = () => {
    const { events, setEvents } = useContext(EventsContext);
    const handleRemoveEvent = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    return (
        <React.Fragment>
        <div className="event-list">
            {!_.isEmpty(events) ? (
            events.map((event) => (
                <Event key={event.id} {...event} handleRemoveEvent={handleRemoveEvent} />
            ))
            ) : (
            <p className="message">Ooops. Guess there's no events yet scheduled. Go ahead and add one in!</p>
            )}
        </div>
        </React.Fragment>
    );
};

export default EventLists;