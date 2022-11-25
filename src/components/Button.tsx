import { Button } from "@mui/material";
import { NavbarLinkProps } from "../data/navbarData";
import { useNavigate } from "react-router-dom";

const MatButton = ({title,link=""}:NavbarLinkProps)=>{
    const navigate=useNavigate()

    return(
        <Button variant="contained" onClick={()=>navigate(link)}>{title}</Button>
    )
}

export default MatButton