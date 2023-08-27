
import React from 'react'

const TextBox = ({id,content}) => {
  return (
    <div class = "form-row">
    <label for= {id} class = 'form-label'>{content}</label>
    <input type='text' class = 'form-control' id = {id}/>
    </div>
  )
}

export default TextBox