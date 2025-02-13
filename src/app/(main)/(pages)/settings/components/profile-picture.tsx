import React from 'react'
import UploadCareButton from './upload-carebutton'
import { useRouter } from 'next/router'
type Props={
    userImage:string | null
    onDelete ? : any
    onUpload?: any
}

const ProfilePicture = ({userImage, onDelete,onUpload}:Props) => {
    const router=useRouter()
    
  return (
    <div className='flex flex=col'>
        <p className='text-lg text-white'>Profile Picture
        </p>
        <div className='flex h-[30vh]  col items-center'></div>
      <UploadCareButton onUpload={(e: string) => { console.log(e); }}/>
    </div>
  )
}

export default ProfilePicture
