import React, { Component, StyleSheet, Text, View, Image, } from 'react';
import "../utils/profile/profile.css";
import Register from "./Register";

// import images from "./images.json"



var user = {
  basicInfo: {
    name: "Karen",
    location: "Bear Lake, UT",
    price: "$45/hr",
    photo: "https://www.in-depthoutdoors.com/wp-content/uploads/2018/08/Boat-16.jpg",
    bio: "Morning and evening fishing adventures every saturday and sunday. Onboard fishfinder and limited tackle. Limit 3 passengers. Cooler available."
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


class KarenProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user.basicInfo} />
      </div>
    )
  }
}

// React.render(<UserProfile />, document.getElementById('root'))

export default KarenProfile
