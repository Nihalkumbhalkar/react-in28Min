function ListComponent(){

    const today = new Date();

    const targetDate = new Date(today.getFullYear()+1, today.getMonth(), today.getDay())

    const todoList = [
            { id: '1', task: 'task 1', done: false, targetDate: targetDate},
            { id: '2', task: 'task 2', done: false, targetDate: targetDate},
            { id: '3', task: 'task 3', done: false, targetDate: targetDate},
            { id: '4', task: 'task 4', done: false, targetDate: targetDate}
    ]
    return(
        <div className="listComponent container">
        <h1>List Of the Todos</h1>
        <table className="table">
            <thead>
                <tr>
                    <td>id</td>
                    <td>task</td>
                    <td>done</td>
                    <td>targetDate</td>
                </tr>
            </thead>
            <tbody>
                {
                    todoList.map(
                        todo => (
                            <tr key={todo.id}>
                                <td> {todo.id} </td>
                                <td> {todo.task} </td>
                                <td> {todo.done.toString()}</td>
                               <td>  {todo.targetDate.toDateString()}</td> 
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
        </div>
    )
}

export default ListComponent;