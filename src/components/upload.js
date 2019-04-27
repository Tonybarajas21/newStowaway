import React from 'react';

class Upload extends React.Component {
  
    checkUploadResult = (resultEvent) => {
    
      if(resultEvent.event === 'success') {
    console.log(this.props.currentUser.id);
    this.props.postPhoto({user_id: this.props.currentUser.id,
    caption: '',
    url:resultEvent.info.secure_url})
    .then(this.props.history.push('/profile'))
    
    }
    
      }
    
      showWidget = (widget) => {
        widget.open()
      }
      render() {
        let widget = window.cloudinary.openUploadWidget({
          cloudName: "dliwukqu1",
          uploadPreset: "Stowaway" })
          // (error, result) => {this.checkUploadResult(result)})
        
        return (
          <div id='photo-form-container'>
           <button onClick={this.showWidget}>Home</button>
          </div>
        )
      }
      
    }

export default Upload