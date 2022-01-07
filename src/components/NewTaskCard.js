import React, { useState } from "react";

export default function NewTaskCard({ id, tasks, setNewList }){
    const [ taskInput, setTaskInput ] = useState("")
    
    function handleChange(e){
        setTaskInput(e.target.value);

        const updatedTasks = tasks.map((task, i) => {
            if (i === id ) {
                return e.target.value
            } else {
                return task
            }
        })
        
        setNewList(state => ({...state, tasks: updatedTasks }))
    }

    return(
        <div className="taskCard">
            <h3>Task {id+1}</h3>
            <input className="textInput" type="text" placeholder="Task name" value={taskInput} onChange={(e)=> handleChange(e)} />
        </div>
    )
}