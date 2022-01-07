import { useParams } from "react-router"
import TaskCard from "./TaskCard"
import { Link } from "react-router-dom"

function ViewList({ myListsObj }) {
    const params = useParams()
    console.log(params)
    const list = myListsObj.find(listObj => listObj.id === parseInt(params.id))
    console.log(list)
    console.log(myListsObj)

    function renderTasks() {
        return list.tasks.map(task => <TaskCard key={list.id} task={task} />)
    }

    function calculatePercentCompleted() {
        const numerator = list.tasks.filter(task => task.completed === true).length
        return ((numerator / list.tasks.length) * 100).toFixed(0)
    }

    return(
        <div>
            <div>
                <h4>{list.listName}</h4>
                <p>{list.tasks.length} Tasks</p>
                <p>{calculatePercentCompleted()}% Completed</p>
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