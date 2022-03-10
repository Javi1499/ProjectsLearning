import React, { useState } from 'react'
import {CREATE_USER} from '../Graphql/Mutations'
import {useMutation} from '@apollo/client';
function CreateUser() {

    const [name, setName] = useState("")
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")

const [createUser, {error}] = useMutation(CREATE_USER);
  return (
    <div className='creatreUser'>
    <input type="text" placeholder='name' onChange={e=>{setName(e.target.value)}}/>
    <input type="text" placeholder='user name' onChange={e=>{setUserName(e.target.value)}}/>
    <input type="text" placeholder='password'onChange={e=>{setPassword(e.target.value)}}/>
    <button onClick={()=>createUser({variables:{name, userName, password}})}>Create user</button>
    </div>
  )
}

export default CreateUser