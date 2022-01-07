import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import EditTaskCard from "./EditTaskCard"


function EditList({ handleUpdateList, handleDeleteList, myListsObj }) {
    const params = useParams()
    // console.log("EDITLIST... ",params)
    const list = myListsObj.find(listObj => listObj.id === parseInt(params.id))
    console.log(list)
    console.log(myListsObj)
    // console.log("EDITLIST... ",list)
    // console.log("EDITLIST... ",myListsObj)

    const [{ title, tasks }, setEditList ] = useState({title: list.listName, tasks: [...list.tasks]})

    function handleMoreTasks(){
        setEditList(state => ({...state, tasks:[...tasks, {taskName: "", completed: false}] }))
    }

    function renderTasks() {
        return tasks.map((task, i) => <EditTaskCard key={i} id={i} task={task} setEditList={setEditList} list={list} />)
    }
    
    return(
        <div>
            <Link to={"/"}>
                <button>Back to Lists</button>
            </Link>
            <div>
                <h4>{list.listName}</h4> <br />
                {renderTasks()}
                <button onClick={handleMoreTasks}>+</button>
                <Link to={"/"}>
                    <button onClick={() => handleUpdateList({listName: title, tasks: tasks, id: list.id})}>Update List</button>
                </Link>
                <Link to={"/"}>
                    <button onClick={(e) => handleDeleteList(params.id)}>🗑</button>
                </Link>
            </div>
        </div>
    )
}


export default EditList