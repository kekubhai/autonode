'use client'
import { Button } from '@/components/ui/button'
import { useNodeConnections } from '@/providers/connections-provider'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import {
  
  onFlowPublish,
  onCreateNodesEdges,
} from '../_actions/workflow-connections'
import { toast } from 'sonner'

type Props = {
  children: React.ReactNode
  edges: any[]
  nodes: any[]
}

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname()
  const [isFlow, setIsFlow] = useState([])
  const { nodeConnection } = useNodeConnections()

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      JSON.stringify({
        id: pathname.split('/').pop()!,
        nodes,
        edges,
        isFlow,
      })
    )

    if (flow) toast.message("Workflow nodes and edges created successfully.")
  }, [nodeConnection, pathname, nodes, edges, isFlow])

  const onPublishWorkflow = useCallback(async () => {
    const response = await onFlowPublish(pathname.split('/').pop()!, true)
    if (response) toast.message(response)
  }, [pathname])

  const onAutomateFlow = useCallback(async () => {
    const flows: any = []
    const connectedEdges = edges.map((edge) => edge.target)
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type)
        }
      })
    })

    setIsFlow(flows)
  }, [edges, nodes])

  useEffect(() => {
    onAutomateFlow()
  }, [onAutomateFlow])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4">
        <Button
          onClick={onFlowAutomation}
          disabled={isFlow.length < 1}
        >
          Save
        </Button>
        <Button
          disabled={isFlow.length < 1}
          onClick={onPublishWorkflow}
        >
          Publish
        </Button>
      </div>
      {children}
    </div>
  )
}

export default FlowInstance