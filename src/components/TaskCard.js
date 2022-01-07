function TaskCard({ task }) {
    // console.log("TASKCARD...",task)
    return(
        <div>
            <h5>{task.taskName}</h5>
            <p>Completed: {task.completed ? "✅" : "❌"}</p>
        </div>
    )
}

export default TaskCard