import "./ContactUsForm.css"
import React from 'react'
import TextBox from "./TextBox"

const ContactUsForm = () => {
  return (
<div className=  "contactUsContainer"> 


<form class = "form-box">
    <h1 className="form-title">Contact Me !</h1>
    <div className="textBox-row">
    <TextBox id = 'firstName' content = 'First Name' isRequired={true}/>
    <TextBox id = 'lastName' content = 'Last Name' isRequired={true}/>
    </div>
    <div className="textBox-row">
    <TextBox id = 'email' content = 'E-mail' isRequired={true}/>
    <TextBox id = 'phoneNumber' content = 'Phone Number'/>
    </div>
    <div className="textBox-row">
    <TextBox id = 'comments' content = 'Any things you would like to say to me :)' isTextArea={true}/>
    </div>
    <div className="textBox-row">
    <button className="submitButton" type = 'submit'>Submit</button>
    </div>
</form>

</div>
  )
}

export default ContactUsForm