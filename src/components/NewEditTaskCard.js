import { useState } from "react"


function NewEditTaskCard({ id, task, setEditList, list}) {
    const [taskObj, setTask] = useState(task)
    
    function handleNameChange(e) {
        setTask({...taskObj, taskName: e.target.value})
        const updatedTasks = list.tasks.map((task, i) => {
            if (i === id) {
                return taskObj
            } else {
                return task
            }
        })
        setEditList(state => ({...state, tasks:[...updatedTasks]}))
    }

    function handleCompletedChange() {
        setTask({...taskObj, completed: !taskObj.completed})
        const updatedTasks = list.tasks.map((task, i) => {
            if (i === id) {
                return taskObj
            } else {
                return task
            }
        })
        setEditList(state => ({...state, tasks:[...updatedTasks]}))
    }
    
    return(
        <div>
            <h3>Task {id+1}</h3>
            <input type="text" placeholder="Task name" value={taskObj.taskName} onChange={(e)=> handleNameChange(e)} />
            <p onClick={handleCompletedChange}>Completed: {task.completed ? "✅" : "❌"}</p> fix me!!!!!!
        </div>
    )
}

export default NewEditTaskCard