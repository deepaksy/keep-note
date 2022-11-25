import {ReactElement} from "react"
import { navbarLinks,NavbarLinkProps } from "../data/navbarData"
import MatButton from "./Button"
import NoteIcon from '../assets/notes.svg'
import {Typography} from '@mui/material'
import {IconButton} from '@mui/material'
import SearchBar from "./SearchBar"
import MenuIcon from '@mui/icons-material/Menu';
import ProfileAvatar from "./ProfileAvatar"

interface Hover{
    elevation:number,
    width:string
  }

  type position="fixed"|"sticky"
  const fixed:position="fixed"
const styles = {
    navbarContainer:{
        position:fixed,
        zIndex:5,
        display:"flex",
        alignItems:"center",
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:"0 0 thin",
        justifyContent:"space-between",
        top:0,
        left:0,
        right:0
    },
    logo:{
        marginLeft:10,
        marginRight:5,
        marginTop:5,
        marginBottom:5,
        height:40
    }
}
const Navbar = ({hover,setHover}:{hover:Hover,setHover:(hover:Hover)=>void}):ReactElement => {
  return (
    <nav style={styles.navbarContainer}>
        <div style={{
            display:"flex",
            alignItems:"center"
        }}>
        <IconButton onClick={()=>hover.elevation===0?setHover({
      elevation:5,
      width:"71rem"
    }):setHover({elevation:0,width:"5rem"})}>
            <MenuIcon/>
        </IconButton>
        <img style={styles.logo} src={NoteIcon}  alt="Notes"/>
        <Typography variant="h6" gutterBottom>Keep</Typography>
        </div>
        {/* {navbarLinks.map(({title,link}:NavbarLinkProps,i)=>{
            return(
                <MatButton title={title} link={link}/>
            )
        })} */}
        <SearchBar/>
        <div><ProfileAvatar value="avatar">H</ProfileAvatar></div>
    </nav>
  )
}

export default Navbar