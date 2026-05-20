import { useState } from 'react'
import { saveMovie } from '../api'

function MovieForm({ }) {

    const [title, setTitle] = useState('')

    const handleOnTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const movieObject = {
            title
        }

        saveMovie(movieObject)
    }


    return <div className='form-container'>
        <form onSubmit={handleOnSubmit}>
            <label>
                
                    Movile title
                
                <input value={title} type="text"
                    onChange={handleOnTitleChange}
                    name="title"></input>
                {
                    showMovieError && <div className='error-message'>Movie title is required</div>
                }
            </label>

            <div>
                <button type="submit">Save</button>
                <button type="reset">Reset</button>
            </div>
        </form>

    </p>
  </div >
}

export {
    MovieForm
}