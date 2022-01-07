import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ViewList({ myListsObj }) {
    const params = useParams();
    const list = myListsObj.find(listObj => listObj.id === parseInt(params.id));
    const [ percentDone, setPercentDone ] = useState("")
    
    useEffect(()=>{
        calculatePercentCompleted()
    },[percentDone])
    
    function calculatePercentCompleted() {
        const numerator = list.tasks.filter(task => task.completed === true).length;
        setPercentDone(((numerator / list.tasks.length) * 100).toFixed(0));
    }

    function renderTasks() {
        return list.tasks.map(task => <TaskCard key={task.id} task={task} completion={percentDone} />)
    }

    return(
        <div>
            <Link to={"/"}>
                <button>◀ Lists</button>
            </Link>
            <h3>{list.listName}</h3>
            <div className="listHeaderDetails">
                <p>{list.tasks.length} Tasks</p>
                <p>{percentDone}% Completed</p>
                <Link to={`/${params.id}/editList`}>
                    <button>{"Edit List 📝"}</button>
                </Link>
            </div>
            <div>
                {renderTasks()}
            </div>
        </div>
    )
}

export default ViewList