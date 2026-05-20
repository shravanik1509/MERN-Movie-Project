import { useState } from "react";

function TaskForm({}) {
    const [name,setName] = useState('')
    const [completed,isCompleted] = useState('')

    const handleOnChange = (e) => {
        console.log('Event argument',e)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const formData=new FormData(form)
        console.log('Form data ',formData.getAll("genre") + " " + formData.get("taskname"))
        const formValues = formData.entries()

        console.log(Object.fromEntries(formValues))
    }


    return <div>
        <form name="tasksForm" onSubmit={handleOnSubmit}>
            <h6>
                Tasks Form
                <hr />
            </h6>
            <div>
                <label>
                Task Name: <input type="text" onChange={handleOnChange} name="taskname" className=""></input>
                </label>
                <br />
                <br />
            </div>
            <div>
                <label>
                    Options: 
                    <input type="checkbox" name="genre" onChange={handleOnChange} value="a"></input>
                    <input type="checkbox" name="genre" onChange={handleOnChange} value="b"></input>
                    <input type="checkbox" name="genre" onChange={handleOnChange} value="c"></input>
                </label>
            </div>

            <div>
                <label>
                    Options: 
                    <input type="radio" name="status" onChange={handleOnChange} value="0"></input>
                    <input type="radio" name="status" onChange={handleOnChange} value="1"></input>
                </label>
            </div>

            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
}

export {
    TaskForm
}