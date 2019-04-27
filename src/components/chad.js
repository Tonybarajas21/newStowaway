import React, { Component, StyleSheet, Text, View, Image, } from 'react';
import "../utils/profile/profile.css";
import Register from "./Register";

// import images from "./images.json"



var user = {
  basicInfo: {
    name: "Chad",
    location: "Los Angeles, CA",
    price: "$150/hr",
    photo: "https://www.smorganlaw.com/wp-content/uploads/2017/05/Boat-200x200.jpg",
    bio: "Hey bro, I'm Chad! I'd love to take you and your friends out for a fun day on the lake! Onboard we have seating for up to 6 passengers, a cooler, stereo, and wakeboard!"
  }
}





class Avatar extends React.Component {
  render() {
    var image = this.props.image,
        style = {
          width: this.props.width || 75,
          height: this.props.height || 75
        }; 
    
    if (!image) return null;
    
    return (
     <div className="avatar" style={style}>
           <img src={this.props.image} /> 
      </div>
    );
  }
}

class MainPanel extends React.Component {  
  render() {
    var info = this.props.info;
    if (!info) return null;

    return (
     <div>
        <div className="top">
            <Avatar 
               image={info.photo} 
               width={100}
               height={100}
            /> 
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>
            <h3>{info.price}</h3>
        </div>
        
        <div className="bottom">
          <h4>Captain:</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}


class ChadProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user.basicInfo} />
      </div>
    )
  }
}

// React.render(<UserProfile />, document.getElementById('root'))

export default ChadProfile
