import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ViewList({ myListsObj }) {
    const params = useParams();
    // console.log("VIEWLIST/params...",params);
    const list = myListsObj.find(listObj => listObj.id === parseInt(params.id));
    // console.log("VIEWLIST/list... ",list);
    // console.log("VIEWLIST/myListObj... ",myListsObj);
    const [ percentDone, setPercentDone ] = useState("")
    
    function calculatePercentCompleted() {
        const numerator = list.tasks.filter(task => task.completed === true).length;
        setPercentDone(((numerator / list.tasks.length) * 100).toFixed(0));
        // console.log("PERCENTAGE... ",numerator," / ",list.tasks.length)
    }

    function renderTasks() {  /*!!  <TASKCARD /> KEY ERROR WAS FROM HERE  !!*/
        return list.tasks.map(task => <TaskCard key={task.id} task={task} completion={percentDone} />) /* !!  LIST IS TASK SHARED PARENT'S ID - TASKS NEEDED UNIQUE IDS  !! */
    }
    
    useEffect(()=>{
        calculatePercentCompleted()
    },[percentDone])


    return(
        <div>
            <div>
                <h4>{list.listName}</h4>
                <p>{list.tasks.length} Tasks</p>
                <p>{percentDone}% Completed</p>
                <Link to={`/${params.id}/editList`}>
                    <button>{"📝"}</button>
                </Link>
            </div>
            <div>
                {renderTasks()}
            </div>
        </div>
    )
}

export default ViewList