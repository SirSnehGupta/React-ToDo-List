import Task  from "./Task";

export const Tasks = ({tasks, onReminder, onDelete}) => {
  return (
    <>
      {tasks.map(task => (<Task key={task.id} task={task} remind={onReminder} onTaskDelete={onDelete}/>))}
    </>
  )
}

export default Tasks;