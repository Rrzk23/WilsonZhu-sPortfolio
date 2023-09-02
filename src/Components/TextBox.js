import "./TextBox.css"
import React from 'react'

const TextBox = ({id, content, isTextArea, isRequired, value, onChange}) => {
  if (isTextArea) {
    return (
      <div class = "form-row">
      <label for= {id} class = 'form-label'>{content}</label>
      <textarea 
        type='text' 
        class = 'form-control' 
        id = {id}
        value={value} 
        onChange={onChange}
      />
      </div>
    )
  }
  return (
    <div class = "form-row">
    <label for= {id} class = 'form-label'>{content}</label>
    <input type='text' class = 'form-control' id = {id} required = {isRequired}
    
      value={value} 
      onChange={onChange}
    />
    </div>
  )
}

export default TextBox