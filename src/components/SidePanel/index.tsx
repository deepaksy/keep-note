import SidePanel, { Hover } from "./SidePanel"

const Index  = ({hover,setHover}:{hover:Hover,setHover:(hover:Hover)=>void})=>{
    return(
        <SidePanel hover={hover} setHover={setHover}>
            <h1>Hello WOrld</h1>
        </SidePanel>

    )
}

export default Index