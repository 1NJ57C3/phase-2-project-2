import React, { useEffect, useState } from "react";
import NewTaskCard from "./NewTaskCard";

export default function NewListForm({ taskLists, setTaskLists }){
    const [ { title, tasks }, setNewList ] = useState({title: "", tasks: [""]})

    function handleMoreTasks(){
        setNewList(state => ({...state, tasks:[...tasks, ""] }))
    }

    function renderTasks(){
        return tasks.map((task, i) => <NewTaskCard key={i} id={i} tasks={tasks} setNewList={setNewList} />)
    }

    return(
        <div>
            <input type="text" placeholder="List title..." value={title} onChange={(e)=> setNewList(state => ({...state, title:e.target.value}))} /> <br />
            {renderTasks()}
            <button onClick={handleMoreTasks}>+</button>
        </div>
    )
}