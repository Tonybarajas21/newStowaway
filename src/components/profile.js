import React, { Component, StyleSheet, Text, View, Image, } from 'react';
import "../utils/profile/profile.css";
import Register from "./Register";

// import images from "./images.json"



var user = {
  basicInfo: {
    name: "Dev Profile",
    location: "Salt Lake City, UT",
    photo: "https://www.smorganlaw.com/wp-content/uploads/2017/05/Boat-200x200.jpg",
    bio: "This site was developed by Igor Baveda, Tony Barajas, Kevin Townsley, and Devin Udy. University of Utah Coding Bootcamp"
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


class UserProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user.basicInfo} />
      </div>
    )
  }
}

// React.render(<UserProfile />, document.getElementById('root'))

export default UserProfile





