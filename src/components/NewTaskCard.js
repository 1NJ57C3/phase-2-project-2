import React, { useEffect, useState } from "react";

export default function NewTaskCard({ id, tasks, setNewList }){
    const [ taskInput, setTaskInput ] = useState("")
    
    function handleChange(e){
        setTaskInput(e.target.value);
        /* TASKS prop of destructured Parent state does not seem to work properly when properly linked into secure input loop. These inputs should probably be moved up a level up to fix. */

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
        <div>
            <h3>Task {id+1}</h3>
            <input type="text" placeholder="Task name" value={taskInput} onChange={(e)=> handleChange(e)} />
        </div>
    )
}