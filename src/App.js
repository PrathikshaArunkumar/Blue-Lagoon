import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import RoomsList from "./components/rooms-list.component";
import EditRoom from "./components/edit-room.component";
import CreateRoom from "./components/create-room.component";
import HotelDetails from "./components/hotel-details.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={RoomsList} />
      <Route path="/hotel" component={HotelDetails} />
      <Route path="/edit/:id" component={EditRoom} />
      <Route path="/create" component={CreateRoom} />
      </div>
    </Router>
  );
}

export default App;
