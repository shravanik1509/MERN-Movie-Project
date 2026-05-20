import {Task} from './Task'

function Tasks() {
    const tasksList= [
        {
            name:'Do My Name component',
            is_completed:true
        },
        {
            name:'Abount Me',
            is_completed:true
        },
        {
            name:'Counter',
            is_completed:true
        },
        {
            name:'Taks',
            is_completed: false
        }

    ]

    return <div>
        {tasksList.map(taskObject => {
            return <Task key={taskObject.name} 
            name={taskObject.name}
            isCompleted={taskObject.is_completed}
            >

            </Task>
        })}
    </div>
}

export {
    Tasks
}