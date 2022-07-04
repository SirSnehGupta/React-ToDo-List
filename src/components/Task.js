import React from 'react'
import { FaTimes } from 'react-icons/fa'

export const Task = ({ task, remind, onTaskDelete}) => {
  return (
    <div className={`task ${task.reminder? "reminder":""}`} onDoubleClick={() => remind(task.id)}>
        <h3>{task.text} <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => onTaskDelete(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task;