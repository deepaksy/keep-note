import React from 'react'
import {Box,Button,Typography,Modal} from '@mui/material'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Index = () => {
    const [open,setOpen] =React.useState<boolean>(false);
    const handleOpen=()=>setOpen(true)
    const handleClose=()=>setOpen(false)
  return (
    <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal open={open}
        onClose={handleClose}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{mt:2}}>
                    Duis mollis, est non commodo luctus, nisi erat porttior igulas.
                </Typography>
            </Box>
        </Modal>
    </div>
  )
}

export default Index