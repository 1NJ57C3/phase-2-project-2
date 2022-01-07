import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import NewEditTaskCard from "./NewEditTaskCard"


function EditList({ handleUpdateList, handleDeleteList, myListsObj }) {
    const params = useParams()
    console.log(params)
    const list = myListsObj.find(listObj => listObj.id === parseInt(params.id))
    console.log(list)
    console.log(myListsObj)

    const [ { title, tasks }, setEditList ] = useState({title: list.listName, tasks: [...list.tasks]})

    function handleMoreTasks(){
        setEditList(state => ({...state, tasks:[...tasks, {taskName: "", completed: false}] }))
    }

    function renderTasks() {
        return tasks.map((task, i) => <NewEditTaskCard key={i} id={i} task={task} setEditList={setEditList} list={list} />)
    }
    
    return(
        <div>
            <h4>{list.listName}</h4> <br />
            {renderTasks()}
            <button onClick={handleMoreTasks}>+</button>
            <Link to={"/"}>
                <button onClick={() => handleUpdateList(title, tasks)}>Update List</button>
            </Link>
            <Link to={"/"}>
                <button onClick={() => handleDeleteList(title, tasks)}>Delete List</button>
            </Link>
        </div>
    )
}


export default EditList