import React,{useContext} from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './Modal.module.css';
import cartContext from '../../store/cart-store';
const Backdrop = props =>{
  const ctx = useContext(cartContext)
  return <div className={classes.backdrop} onClick={ctx.cartClose} />
}
const ModalOverlay = (props)=>{
  return (
    <Card className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </Card>
  )
}
const Modal = (props) => {
  return (
    <React.Fragment>
     {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root"))}
     {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};

export default Modal;
