import ProfileForm from '@/components/forms/profile-forms'
import React from 'react'
import ProfilePicture from './components/profile-picture'
import { db } from '@/lib/db'

type Props = {}

const Settings= (props: Props) => {
  const removeProfileImage=async()=>{
    'use server'
    const response =await db.user.update({
      where:{
        clerkId:authUser.id,
      },
      data:{
        profileImage:'',
      },
    })
    return response
  }
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='sticky top-0 z-[10] flex items-center
        justify-between border-b bg-background p-6 text-4xl'>
            <span>
                Settings
            </span>
            <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
        
        onDelete={removeProfileImage}
        userImage={user?.profileImage || ''}
        onUpload={{uploadProfileImage}}>
          

        </ProfilePicture>
        <ProfileForm user={undefined} />
        </h1>
    </div>
  )
}

export default Settings