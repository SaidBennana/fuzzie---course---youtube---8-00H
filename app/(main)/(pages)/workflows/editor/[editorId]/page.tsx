

import React from 'react'
import EditorCanvas from './_components/editor-canvas'
import EditorProvider from '@/provider/editor-provider'
import { ConnectionsProvider } from '@/provider/connections-provider'

const Page = () => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  )
}

export default Page
