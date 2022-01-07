import { useState, useEffect } from "react"


function EditTaskCard({ id, task, tasks, setEditList, list}) {
    const [ taskObj, setTaskObj ] = useState(task)

    console.log("EDITTASKCARD/id... ",id)
    console.log("EDITTASKCARD/task... ",task)
    console.log("EDITTASKCARD... ",list)


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
            <input className="textInput" type="text" placeholder="Task name" value={taskObj.taskName} onChange={(e)=> handleNameChange(e)} />
            <p onClick={handleCompletedChange}>Completed: {task.completed ? <button>✅</button> : <button>❌</button>}</p> {/* The weird render behavior seems to happen because of the state's shared/piggybacking setup */}
        </div>
    )
}

export default EditTaskCard