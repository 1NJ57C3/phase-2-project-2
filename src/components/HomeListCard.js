import { Link } from "react-router-dom"

function HomeListCard({ list }) {
    return(
        <Link to={`/${list.id}`}>
            <div>
                <h4>{list.listName}</h4>
                <p>{list.tasks.length} Tasks</p>
                <p>% Completed</p>
            </div>
        </Link>
    )
}

export default HomeListCard