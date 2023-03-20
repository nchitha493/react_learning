import classes from './Card.module.css'

// import styled from '.AddUser.module.css'
const Card = props=>{


 return(  
    <div className={`${props.className} ${classes.card}`}>
        {props.children}
    </div>
    )
}

export default Card;