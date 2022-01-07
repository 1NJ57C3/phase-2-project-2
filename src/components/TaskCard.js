function TaskCard({ task }) {
    // console.log("TASKCARD...",task)
    return(
        <div className="taskCard">
            <h4>{task.taskName}</h4>
            <p>Completed: {task.completed ? "✅" : "❌"}</p>
        </div>
    )
}

export default TaskCard