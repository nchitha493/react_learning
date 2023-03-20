import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = props =>{
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}
const ModalOverlay = (props)=>{
  return (
    <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.props_get.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.props_get.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.props_get.onConfirm}>Okay</Button>
        </footer>
      </Card>
  )
}
const ErrorModal = (props) => {
  return (
    <React.Fragment>
     {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root"))}
     {ReactDom.createPortal(<ModalOverlay props_get={props}/>,document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};

export default ErrorModal;
