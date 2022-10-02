import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Event = ({
    id,
    eventName,
    hostName,
    location,
    eventPhoto,
    startDate,
    endDate,
    handleRemoveEvent
}) => {
    const history = useHistory();
    
    return (
        <Card style={{ width: '30rem' }} className="event">
        <Card.Body>
            <Card.Title className="event-title">{eventName}</Card.Title>
            <div className="event-details">
            <div>Host Name: {hostName}</div>
            <div>Location: {location} </div>
            <div>Poster: <img src={eventPhoto} className="eventPhoto"></img> </div>
            <div>Start Date{startDate} </div>
            <div>End Date{endDate} </div>
            </div>
            <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
                Edit
            </Button>{' '}
            <Button variant="danger" onClick={() => handleRemoveEvent(id)}>
            Delete
            </Button>
        </Card.Body>
        </Card>
    );
};

export default Event;