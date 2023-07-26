import React,{useContext} from 'react'
import Account from './Account'
import { NameContext } from './App'

const Person = () => {

    let userName= useContext(NameContext)[0]

  return (
    <>
    
    <h2>This is my Person Component: {userName}</h2>

    <Account />
    
    </>
  )
}

export default Person