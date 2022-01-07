import React, { useEffect, useState } from "react";

export default function NewTaskCard({ id, tasks, setNewList }){

    function handleChange(e){
        const updatedTasks = tasks.map((task, i) => {
            if (i === id ) {
                return e.target.value
            } else {
                return task
            }
        })
        setNewList(state => ({...state, tasks: updatedTasks }))
    }

    //add controlled value to input

    return(
        <div>
            <h3>Task {id+1}</h3>
            <input type="text" placeholder="Task name" onChange={(e)=> handleChange(e)} />
        </div>
    )
}