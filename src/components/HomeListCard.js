import { Link } from "react-router-dom"

function HomeListCard({ list }) {
    
    function calculatePercentCompleted() {
        const numerator = list.tasks.filter(task => task.completed === true).length;
        return ((numerator / list.tasks.length) * 100).toFixed(0)
    }

    return(
        <Link to={`/${list.id}`}>
            <div className= "homeListCard">
                <h4 className="listTitle">{list.listName}</h4>
                <div className="listDetails" >
                    <p className="taskCount">{list.tasks.length} Tasks</p>
                    <p>{calculatePercentCompleted()}% Completed</p>
                </div>
            </div>
        </Link>
    )
}

export default HomeListCard