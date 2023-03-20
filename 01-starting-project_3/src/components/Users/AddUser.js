

import classes from './AddUser.module.css'
import Card from "../UI/Card"
import Button from '../UI/Button/Button'
import { useState } from 'react'
const AddUser = props=>{
    const [username,setUsername]=useState("")
    const [age,setAge]= useState("")
    const addUserHandler= (event)=>{
        event.preventDefault()
        if(!(age.trim().length && username.trim().length) ){
            props.sendError({
                title:"error",
                message:"Please Enter some values"
            })
            return 
        }
        if(age < 1){
            props.sendError({
                title:"error",
                message:"Please Give age in positive Number"
            })
            return 
        }
        if(age > 120){
            props.sendError({
                title:"error",
                message:"Please Give age below 120"
            })
            return 
        }
        props.userDetails({
            id:Math.random(),username,age
        })
        setUsername("")
        setAge("")
    }
    const usernameHandler = event=>{
        setUsername(event.target.value)
    }
    const ageHandler = event=>{
        setAge(event.target.value)
    }
    
 return(  
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">username</label>
                <input id='username' value={username} onChange={usernameHandler} type="text"></input>
                <label htmlFor="age">age (Years)</label>
                <input id='age' value={age} onChange={ageHandler} type="number"></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser