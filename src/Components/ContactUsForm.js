import "./ContactUsForm.css"
import React , {useState}from 'react'
import TextBox from "./TextBox"
import {sendEmail} from "../functions/submit"
import validator from 'validator';

const ContactUsForm = () => {
  // initial state for the form
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    comments: ''
});
// where every time a user input something. updating the name of that element with the new value
const handleInputChange = (e) => {
  const { id, value } = e.target;
  if (id === 'email' && !validator.isEmail(value)) {
    setEmailError("please enter valid email")
  }
  else if(validator.isEmail(formData.email)) {
    setEmailError('');
  }
  setFormData(prevState => ({
      ...prevState,
      [id]: value
  }));
  
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!emailError) {
    // 如果验证通过，发送数据到后端
    await sendEmail(formData);
  } else {
    alert("Please enter valid email before submit!");
  }

};

  return (
    <div className=  "contactUsContainer"> 



    <form class = "form-box" onSubmit={handleSubmit}>
        <h1 className="form-title">Contact Me !</h1>
        <div className="textBox-row">
        <TextBox id = 'firstName' content = 'First Name' isRequired={true} value={formData.firstName} onChange={handleInputChange}/>
        <TextBox id = 'lastName' content = 'Last Name' isRequired={true} value={formData.lastName} onChange={handleInputChange}/>
        </div>
        <div className="textBox-row">
        <TextBox id = 'email' content = 'E-mail' isRequired={true} value={formData.email} onChange={handleInputChange}/>
        
        <TextBox id = 'phoneNumber' content = 'Phone Number'value={formData.phoneNumber} onChange={handleInputChange}/>
        </div>
        <div className="textBox-row">
        <TextBox id = 'comments' content = 'Any things you would like to say to me :)' isTextArea={true} value={formData.comments} onChange={handleInputChange}/>

        </div>
        <div className="textBox-row">
        {emailError && <span className="emailError">{emailError}</span>}
        <button className="submitButton" type = 'submit' >Submit</button>
        </div>
    </form>

    </div>
  )
}

export default ContactUsForm