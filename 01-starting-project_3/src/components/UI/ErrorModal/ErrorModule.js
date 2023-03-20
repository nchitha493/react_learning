

import classes from './ErrorModal.module.css'
import Card from "../Card"
import Button from '../Button/Button'
const ErrorModal = props=>{
    const closeModalHandler = (event) =>{
        props.closeModal()
    }
 return(  
        <div className={classes.backdrop} onClick={closeModalHandler}>
            <Card className={classes.modal} onClick={e => e.stopPropagation()}>
                <header className={classes.header}>
                  <h2>{props.errorMsg.title}</h2>  
                </header>
                <div className={classes.content}>
                    {props.errorMsg.message}
                </div>
                <footer className={classes.actions} onClick={closeModalHandler}>
                    <Button>ok</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal