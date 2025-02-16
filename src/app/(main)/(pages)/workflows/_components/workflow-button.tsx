import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { icons } from 'lucide-react'
import React from 'react'

type Props={

}
const WorkFlowButton = (props:Props) => {
  const {setOpen,setClose}=useModal()
  const handleClick=()=>{
   setOpen(
    <CustomModal></CustomModal>
   )
  }
  return (
    <div>
    <Button size={'icon'} onClick={handleClick}></Button>
    </div>
  )
}

export default WorkFlowButton
