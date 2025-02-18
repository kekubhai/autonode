import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'

type Props = {}

const Page=({}: Props) =>{
  return (
    <div>
        <EditorProvider>

            <ConnectionsProvider>
                <EditorCanvas></EditorCanvas>
            </ConnectionsProvider>
        </EditorProvider>
    </div>
  )
}

export default Page