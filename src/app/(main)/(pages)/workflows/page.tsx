import React from 'react'
import WorkFlowButton from './_components/workflow-button'
import workflows from './_components/workflow'
import Workflows from './_components/workflow'
type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
        Workflows
        <WorkFlowButton/>
      </h1>
      <Workflows/>
    </div>
  )
}

export default Page