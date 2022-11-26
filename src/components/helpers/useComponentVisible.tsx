import { useState,useEffect,useRef } from "react";

export function useComponentVisible(){
    const [isComponentVisible,setIsComponentVisible]=useState<boolean>(false)
    const ref=useRef<any>(null);

    const handleClickOutside =(event:any)=>{
        if(ref.current&&!ref.current.contains(event.target)){
            setIsComponentVisible(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click',handleClickOutside,true)
        return()=>{
            document.removeEventListener('click',handleClickOutside,true)
        }
    },[])

    return {ref,isComponentVisible,setIsComponentVisible}
}

export default useComponentVisible