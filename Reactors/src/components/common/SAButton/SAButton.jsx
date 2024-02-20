import React from 'react'

const SAButton = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className={props.style}>{props.name}</button>
  )
}

export default SAButton