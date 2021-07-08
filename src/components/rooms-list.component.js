import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Room = props => (
    <tr>
      <td>{props.room.roomNo}</td>
      <td>{props.room.guest}</td>
      <td>{props.room.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.room._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRoom(props.room._id) }}>delete</a>
      </td>
    </tr>
  )

export default class RoomsList extends Component {
    constructor(props) {
        super(props);

        this.deleteRoom = this.deleteRoom.bind(this);
        this.state = {rooms: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/rooms/')
          .then(response => {
            this.setState({ rooms: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      deleteRoom(id) {
        axios.delete('http://localhost:5000/rooms/'+id)
          .then(res => { console.log(res.data)});
    
        this.setState({
          rooms: this.state.rooms.filter(el => el._id !== id)
        })
      }

      roomList() {
        return this.state.rooms.map(currentroom => {
          return <Room room={currentroom} deleteRoom={this.deleteRoom} key={currentroom._id}/>;
        })
      }

    render() {
        return(
        <div>
             <h3>Booked rooms</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>roomNo</th>
              <th>guest</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.roomList() }
          </tbody>
        </table>
        </div>
        )
    }
}