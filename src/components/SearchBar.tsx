import {Paper,InputBase} from '@mui/material'
import {useState} from 'react'
const SearchBar = ():React.ReactElement => {
    const [hover,setHover]=useState<boolean>(false);
    const styles = {
        paper:{
            elevation:hover?1:0,
            backgroundColor:hover?"initial":"rgb(241 243 244)",
        }
    }
  return (
    <span style={{width:100}} onClick={()=>setHover(true)}  onFocus={()=>{setHover(true)}} onAbort={()=>{setHover(false)}} >
        <Paper sx={{width:"100%"}} style={styles.paper} elevation={styles.paper.elevation}>
        <InputBase/>
    </Paper>
    </span>
  )
}

export default SearchBar