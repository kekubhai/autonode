import React from 'react'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

export default async function SyncUserPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  // Redirect to dashboard after checking auth
  redirect('/dashboard')
}
