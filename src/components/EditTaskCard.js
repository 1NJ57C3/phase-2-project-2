import { useState, useEffect } from "react"

function EditTaskCard({ id, task, tasks, setEditList, list}) {
    const [ taskObj, setTaskObj ] = useState(task)

    useEffect(() => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === id) {
                return taskObj
            } else {
                return task
            }
        })
        setEditList(state => ({...state, tasks:[...updatedTasks]}))
    },[taskObj])
    
    function handleNameChange(e) {
        setTaskObj({...taskObj, taskName: e.target.value})
    }

    function handleCompletedChange() {
        setTaskObj({...taskObj, completed: !taskObj.completed})
    }
    
    return(
        <div className="taskCard">
            <h3>Task {id+1}</h3>
            <input className="textInput" type="text" placeholder={"Task..."} value={taskObj.taskName} onChange={handleNameChange} />
            <p onClick={handleCompletedChange}>Completed: {task.completed ? <button>✅</button> : <button>❌</button>}</p>
        </div>
    )
}

export default EditTaskCard
