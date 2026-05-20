import { useState } from "react"

function Counter() {

    let [counter,setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return <div>
        <p>Counter is {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}

function AboutMe() {
    return <span>
        I'm at workshop
    </span>
}

function MyName() {
    const date=new Date()

    const [showAboutMe,setShowAboutMe] = useState(false)

    const greeting = date.getHours() >= 12  ?
    ' Afternoon' : 'Morning'

    const handleOnClick = () => {
        if(showAboutMe) {
            setShowAboutMe(false)
        } else {
            setShowAboutMe(true)
        }
    }

    const buttonText = showAboutMe ? "Hide AboutMe" : "Show AboutMe"

  return <span>
    Hello Sudhakar B. Good {greeting}
    <br />
    <button onClick={handleOnClick}>{buttonText}</button>
    <br />
    {showAboutMe &&  <AboutMe />}
    <Counter>s
    </Counter>
  </span>
}


export { MyName }