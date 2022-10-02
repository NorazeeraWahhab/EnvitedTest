import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = (props) => {

    const [event, setEvent] = useState(() => {
        return {
            eventName: props.event ? props.event.eventName : '',
            hostName: props.event ? props.event.hostName : '',
            startDate: props.event ? props.event.startDate : '',
            endDate: props.event ? props.event.endDate : '',
            location: props.event ? props.event.location : '',
            eventPhoto: props.event ? props.event.eventPhoto : ''
        };
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { eventName, hostName, location, eventPhoto, startDate, endDate } = event;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [eventName, hostName, location, eventPhoto, startDate, endDate];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
        const value = `${field}`.trim();
        return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
        const event = {
            id: uuidv4(),
            eventName,
            hostName,
            location,
            eventPhoto,
            startDate,
            endDate
        };
        props.handleOnSubmit(event);
        } else {
        errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            default:
                setEvent((prevState) => ({
                ...prevState,
                [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="eventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
                className="input-control"
                type="text"
                name="eventName"
                value={eventName}
                placeholder="What's your event going to be called?"
                onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group controlId="hostNaeventNameme">
            <Form.Label>Host Name</Form.Label>
            <Form.Control
                className="input-control"
                type="text"
                name="hostName"
                value={hostName}
                placeholder="Who's going to host it?"
                onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
                className="input-control"
                type="text"
                name="location"
                value={location}
                placeholder="Where is it at?"
                onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group controlId="startDate">
            <Form.Label>Start</Form.Label>
            <Form.Control
                className="input-control"
                type="date"
                name="startDate"
                value={startDate}
                placeholder="When does it start?"
                onChange={handleInputChange}
            />
            {/* <DatePicker
                className="input-control"
                filterDate={d => {
                    return new Date() < d;
                }}
                placeholderText="Select Date"
                selected={startDate}
                selectsStart
                showTimeSelect
                isClearable
                dateFormat="MMMM d, yyyy h:mmaa"ss
                startDate={startDate}
                endDate={endDate}
                onChange={handleInputChange}
            /> */}
            </Form.Group>
            <Form.Group controlId="endDate">
            <Form.Label>End</Form.Label>
            <Form.Control
                className="input-control"
                type="date"
                name="endDate"
                value={endDate}
                placeholder="When does it end?"
                onChange={handleInputChange}
            />
            {/* <DatePicker
                filterDate={d => {
                    return new Date() < d;
                }}
                placeholderText="Select Date"
                selected={endDate}
                selectsStart
                showTimeSelect
                isClearable
                dateFormat="MMMM d, yyyy h:mmaa"ss
                startDate={startDate}
                endDate={endDate}
                onChange={handleInputChange}
            /> */}
            </Form.Group>
            <Form.Group controlId="eventPhoto">
            <Form.Label>Upload</Form.Label>
            <Form.Control 
                className="input-control"
                type="file" size="lg" 
                name="eventPhoto"
                value={eventPhoto}
                onChange={handleInputChange}
            />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
            Submit
            </Button>
        </Form>
        </div>
    );
};

export default EventForm;