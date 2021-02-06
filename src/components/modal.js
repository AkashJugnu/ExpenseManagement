import React from "react";
// import {Button, Modal} from "react-bootstrap";


const MODAL_STYLES = {
        position:'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '50px',
        zIndex: 1000
    }

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000
    }



const ModalComponent = ({open, children, onclose}) => {
    if (!open) return null
    return(
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
            <div style={{display: "flex", justifyContent:"flex-end"}}>    
            <button onClick={onclose} style={{height:"30px", width:"30px", border:"1px solid", borderRadius:"7px", fontWeight:"600", backgroundColor:"#D82E2F", color:"#FFF"}}>X</button></div>
                    {children}
            </div>
            
            </>
    )
}

export default ModalComponent;
