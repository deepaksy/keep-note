import React, { useState } from 'react'
import Navbar from '../Navbar'
import SideMenu from '../SidePanel'

export interface Hover{
    elevation:number,
    width:string
  }
const AppContainer = (props:any) => {
    const [hover,setHover]=useState<Hover>({
        elevation:0,
        width:"5%"
      });
  return (
    <div style={{marginTop:"3.2rem"}}>
        <Navbar hover={hover} setHover={setHover}/>
      <div style={{display:"flex"}}>
      <SideMenu hover={hover} setHover={setHover}/>
      {props.children}
      </div>
    </div>
  )
}

export default AppContainer