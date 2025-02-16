'use client'
import React, {useContext,useEffect,useState,createContext } from "react"
interface ModalProviderProps{
    children:React.ReactNode
}

export type Modaldata={
}
    type ModalContextType={
        data:Modaldata,
        isOpen:boolean,
        setOpen:(modal:React.ReactNode,fetchData?:()=>Promise<any>)=>void
        setClose:()=>void
    }


    export const ModalConetxt=createContext<ModalContextType>({
        data:{},
        isOpen:false,
        setOpen:(modal:React.ReactNode,fetchData?:()=>Promise<any>)=>{},
        setClose:()=>{},
    })

    const ModalProvider:React.FC<ModalProviderProps>=({children})=>{
    const [isOpem,setisOpen]=useState(false)
    const [data,setData] =useState<Modaldata>({})
    const [showingModal,setShowingModal]=useState<React.ReactNode>(null)  
const[isMounted,setIsMounted]=useState(false)
useEffect(()=>{
    setIsMounted(true)
},[])

const setOpen=async (
    modal:React.ReactNode,
    fetchData?:()=>Promise<any>

)=>{
    if(modal){
        if(fetchData){
            setData({...data, ...(await fetchData())} || {})
        }
        setShowingModal(modal)
        setisOpen(true)
    }
}
const setClose=()=>{

    setisOpen(false)
    setData({})
}
return <>
</> }