import "./TextBox.css"
import React from 'react'

const TextBox = ({id,content,isTextArea,isRequired}) => {
  if (isTextArea) {
    return (
      <div class = "form-row">
      <label for= {id} class = 'form-label'>{content}</label>
      <textarea type='text' class = 'form-control' id = {id}/>
      </div>
    )
  }
  return (
    <div class = "form-row">
    <label for= {id} class = 'form-label'>{content}</label>
    <input type='text' class = 'form-control' id = {id} required = {isRequired}/>
    </div>
  )
}

export default TextBox