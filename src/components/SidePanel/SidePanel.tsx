import { Paper } from '@mui/material'


export interface Hover{
  elevation:number,
  width:string
}

const SidePanel = ({hover,setHover,children}:{hover:Hover,setHover:(hover:Hover)=>void,children?:JSX.Element}) => {
  const {elevation,width}=hover;

  const handleHover = ():void=>{
    setHover({
      elevation:5,
      width:"71rem"
    })
  }

  const handleExit = ():void=>{
    setHover({
      elevation:0,
      width:"5rem"
    })
  }
  return (
    <Paper component={"div"} onMouseEnter={handleHover} onMouseLeave={handleExit}  sx={{
      display:"flex",
      flexDirection:"column",
      // alignItems:"Center",
      alignItems:"start",
      width:width,
      height:"100vh",
      // position:"absolute",
      transition:"all .1s ease-in-out",
      // left:0,
      // right:0
    }} elevation={elevation} >
        {children}
    </Paper>
  )
}

export default SidePanel