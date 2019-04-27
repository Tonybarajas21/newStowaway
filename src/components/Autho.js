import React, { Component } from "react"
import "./Autho.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


firebase.initializeApp({
  apiKey: "AIzaSyAKdSF62ISUOHiRqWKlMDnLgWjy2HBpkMM",
  authDomain: "loginauthentication-63674.firebaseapp.com"
})

class Autho extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

//   constructor (props) {
//     super(props);

//     this.state = {
//         videoURL: "https://static.videezy.com/system/resources/previews/000/020/722/original/P1033770.mp4"
//     }
// }


  render() {
    return (
      
            // <div className="fullscreen-bg">
      <div className="App">

      
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      {/* </div> */}
{/*          
            <video className="fullscreen-bg__video" loop autoPlay>
                
        
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                <source src={this.state.videoURL} type="video/webm" />
                Your browser does not support the video tag.
                
            </video> */}

      </div>

    )
  }
}

export default Autho
