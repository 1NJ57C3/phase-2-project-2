import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import EditTaskCard from "./EditTaskCard"


function EditList({ handleUpdateList, handleDeleteList, myListsObj }) {
    const params = useParams()
    const list = myListsObj.find(listObj => listObj.id === parseInt(params.id))
    const [{ title, tasks }, setEditList ] = useState({title: list.listName, tasks: [...list.tasks]})

    function handleMoreTasks(){
        setEditList(state => ({...state, tasks:[...tasks, {taskName: "", completed: false, id: tasks.length}] }))
    }

    function renderTasks() {
        return tasks.map((task, i) => <EditTaskCard key={i} id={i} task={task} tasks={tasks} setEditList={setEditList} list={list} />)
    }
    
    return(
        <div>
            <Link to={"/"}>
                <button>◀ Lists</button>
            </Link>
            <div>
                <h4>{list.listName}</h4> <br />
                {renderTasks()}
                <button onClick={handleMoreTasks}>➕ Task</button>
                <br></br>
                <br></br>
                <div className="updateDeleteContainer">
                    <div className="updateDelete">
                        <Link to={"/"}>
                            <button onClick={() => handleUpdateList({listName: title, tasks: tasks, id: list.id})}>✔ Done</button>
                        </Link>
                        <Link to={"/"}>
                            <button onClick={(e) => handleDeleteList(params.id)}>🗑 List</button>
                        </Link>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    )
}

export default EditList
