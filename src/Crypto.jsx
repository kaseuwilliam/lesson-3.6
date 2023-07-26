import React, {useContext} from 'react'
import { NameContext } from './App'

const Crypto = () => {

    let [name, setName, age] = useContext(NameContext)

  return (
    <>
    
    <h4>This is the Crypto Component: {name} and my age is {age}</h4>

    <button onClick={e=>{setName("Gina")}}>Change Name</button>
    
    </>
  )
}

export default Crypto