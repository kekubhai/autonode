import React from 'react'

type Props = {}

const page = (props: Props) => {
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
        </h1>
    </div>
  )
}

export default page