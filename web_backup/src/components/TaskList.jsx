const TaskList = ({
    tasks,
    taskInput,
    setTaskInput,
    handleTaskSubmit,
    handleDeleteTask,
    handleTaskCompletion
}) => {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <form onSubmit={handleTaskSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese una nueva tarea"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <p className={task.completed ? 'line-through' : ''}>{task.text}</p>
                        <div>
                            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
                        </div>
                        <div>
                            <button onClick={() => handleTaskCompletion(index)}>
                                {task.completed ? 'Desmarcar' : 'Realizada'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
