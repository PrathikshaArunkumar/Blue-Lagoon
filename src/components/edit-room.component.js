import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditRoom extends Component {
    constructor(props){
        super(props);

        this.onChangeRoomNo = this.onChangeRoomNo.bind(this);
        this.onChangeGuest = this.onChangeGuest.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            roomNo: '',
            guest: '',
            date: new Date(),
            users:[]
        }
    }  

    componentDidMount() {

        axios.get('http://localhost:5000/rooms/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                roomNo: response.data.roomNo,
                guest: response.data.guest,
               
                date: new Date(response.data.date)
              })   
            })
            .catch(function (error) {
              console.log(error);
            })

            axios.get('http://localhost:5000/rooms/')
            .then(response => {
              if (response.data.length > 0) {
                this.setState({
                  users: response.data.map(room => room.roomNo),
                })
              }
            })
            .catch((error) => {
              console.log(error);
            })
      
        }

    onChangeRoomNo(e) {
        this.setState({
            roomNo: e.target.value
        });
    }

    onChangeGuest(e) {
        this.setState({
           guest: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const room = {
            roomNo: this.state.roomNo,
            guest: this.state.guest,
            date: this.state.date
        }

        console.log(room);

        axios.post('http://localhost:5000/rooms/update/'+ this.props.match.params.id, room)
        .then( res => console.log(res.data));

        window.location='/';
    }

      render() {
        return(
        <div>
            <h3>Edit booking</h3>
            <form onSubmit={this.onSubmit}>
           
            <img src="https://i.ibb.co/0sqSkQG/room-100.jpg" alt="room-100" width="300" height="300"></img>
            <p>ROOM NO:100</p>
            <img src="https://i.ibb.co/KLFSsd0/room-101.jpg" alt="room-101" width="300" height="300"></img>
            <p>ROOM NO:101</p>
            <img src="https://i.ibb.co/9rg9dKb/room-103.jpg" alt="room-102" width="300" height="300"></img>
            <p>ROOM NO:102</p>
            <img src="https://i.ibb.co/xjX1NM2/room-104.jpg" alt="room-103" width="300" height="300"></img>
            <p>ROOM NO:103</p>
            <img src="https://i.ibb.co/sp47mRr/room-105.jpg" alt="room-104" width="300" height="300"></img>
            <p>ROOM NO:104</p>
            <img src="https://i.ibb.co/9gPQtL7/room-106.jpg" alt="room-105" width="300" height="300"></img>
            <p>ROOM NO:105</p>
    
  
                <div className="form-group">
                    <label>RoomNo: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.roomNo}
                        onChange={this.onChangeRoomNo}>
                        {
                            this.state.users.map(function(user){
                                return <option
                                key={user}
                                value={user}>{user}
                                </option>
                            })
                        }
                        </select>
                </div>
                <div className="form-group">
                    <label>Guest: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.guest}
                        onChange={this.onChangeGuest}
                        />
                 </div>
                 <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                 </div>

                 <div className="form-group">
                     <input type="submit" value="Edit booking" className="btn btn-primary" />
                 </div>
            </form>
        </div>
        )
    }
}