import InfoBar from '@/components/global/infobar'
import Sidebar from '@/components/sidebar'
import React from 'react'
type Props={
    children:React.ReactNode
}
const layout = (props:Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <Sidebar/>
        <div className='w-full'>
          <InfoBar/>
        {props.children}
        </div>
      
    </div>
  )
}

export default layout
