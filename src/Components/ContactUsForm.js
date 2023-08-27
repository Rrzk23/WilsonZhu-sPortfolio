import "./ContactUsForm.css"
import React from 'react'
import TextBox from "./TextBox"

const ContactUsForm = () => {
  return (
<div className=  "contactUsContainer"> 

<h1>Contact Me !</h1>
<form class = "form-box">

    <TextBox id = 'firstName' content = 'First Name'/>
    <TextBox id = 'lastName' content = 'Last Name'/>
    <TextBox id = 'email' content = 'E-mail'/>
    <TextBox id = 'phoneNumber' content = 'Phone Number'/>
    <TextBox id = 'comments' content = 'Any things you would like to say to me :)'/>
 
</form>
<button>a</button>
</div>
  )
}

export default ContactUsForm