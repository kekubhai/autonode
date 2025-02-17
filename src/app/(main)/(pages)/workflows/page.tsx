import React from 'react'
import WorkflowButton from './_components/workflow-button'

import Workflow from './_components/workflow'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
        Workflows
        <WorkflowButton />
      </h1>
    <Workflow name={'Creating a test workflow'} description={'Automation Workflow'} id={'332452'} publish={null}/>
    <Workflow name={'Creating a test workflow'} description={'Automation Workflow'} id={'332452'} publish={null}/>
    <Workflow name={'Creating a test workflow'} description={'Automation Workflow'} id={'332452'} publish={null}/>
    </div>
  )
  
}

export default Page