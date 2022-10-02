import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddEvent from '../components/AddEvent';
import EventLists from '../components/EventLists';
import EditEvent from '../components/EditEvent';
import useLocalStorage from '../hooks/useLocalStorage';
import EventsContext from '../context/EventsContext';

const AppRouter = () => {
    const [events, setEvents] = useLocalStorage('events', []);
  
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <EventsContext.Provider value={{ events, setEvents }}>
              <Switch>
                <Route component={EventLists} path="/" exact={true} />
                <Route component={AddEvent} path="/add" />
                <Route component={EditEvent} path="/edit/:id" />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            </EventsContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    );
  };

export default AppRouter;