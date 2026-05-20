function Task({name,isCompleted}) {
    return <p>
        {name} - {isCompleted ? 'Yes' : 'No'}
    </p>
}

export {
    Task
}