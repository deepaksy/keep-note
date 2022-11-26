import {Paper,InputBase} from '@mui/material'
import {useEffect, useState} from 'react'
import useComponentvisible from '../helpers/useComponentVisible'

const SearchBar = ():React.ReactElement => {
    const [hover,setHover]=useState<boolean>(false);
    const styles = {
        paper:{
            elevation:hover?1:0,
            backgroundColor:hover?"initial":"rgb(241 243 244)",
        }
    }
    const {ref,setIsComponentVisible,isComponentVisible}=useComponentvisible()

    useEffect(()=>{console.log(isComponentVisible)})
    useEffect(()=>{
      setHover(isComponentVisible)
    },[isComponentVisible])

  return (
    <span style={{width:600}} onClick={()=>setHover(true)}  ref={ref}  >
        <Paper sx={{width:"100%"}} style={styles.paper} elevation={styles.paper.elevation}>
        <InputBase  fullWidth/>
    </Paper>
    </span>
  )
}

export default SearchBar