import React,{useState, createContext} from 'react'
import Person from './Person'

export const NameContext = createContext()
export const AgeContext = createContext()

const App = () => {

  let [name, setName] = useState("Ana")
  let age = 10;

  return (
    <>
    <h1>This is my App Component</h1>

    <NameContext.Provider value={ [name, setName, age] }>
      
      <Person />

    </NameContext.Provider>

    
    </>
  )
}

export default App