import React, { useState } from 'react'
import Navbar from '../Navbar'
import SidePanel from '../SidePanel'

export interface Hover{
    elevation:number,
    width:string
  }
const Index = (props:any) => {
    const [hover,setHover]=useState<Hover>({
        elevation:0,
        width:"5%"
      });
  return (
    <div>
        <Navbar hover={hover} setHover={setHover}/>
      <div style={{display:"flex"}}>
      <SidePanel hover={hover} setHover={setHover}/>
      {props.children}
      </div>
    </div>
  )
}

export default Index