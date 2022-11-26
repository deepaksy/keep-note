import {Modal, Paper} from '@mui/material'
import React, { useState } from 'react'

const Note = () => {
    const [isOpen,setIsOpen]=useState<true|false>(false);

    const handleClose = ()=>{
        isOpen?setIsOpen(false):setIsOpen(true)
    }
  return (
    <React.Fragment>
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>
    <Modal sx={{
        maxWidth:100,
        minHeight:"100%",
        position:"absolute",
        top:0,
        left:0,right:0,bottom:0,
        margin:"auto"
    }} open={isOpen} onClose={handleClose}>
      <Paper>
        <h1>Hello world</h1>
      </Paper>
    </Modal >
    </React.Fragment>
  )
}

export default Note