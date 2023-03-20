

import classes from './UserList.module.css'
import Card from "../UI/Card"
const UserList = props=>{

    const deleteUserHandler= (id) => (event) =>{
        event.preventDefault()
        props.deleteUser(id)
    }


 return(  
        <Card className={classes.users}>
            {props.item.length === 0 && <div>No Users in the list</div>}
            <ul>
                {props.item.map((it)=>{
                    return(     
                    <li key={it.id} onClick={deleteUserHandler(it.id)}>
                        {it.username} ({it.age})Years
                    </li>)
                })}
            </ul>
        </Card>
    )
}

export default UserList