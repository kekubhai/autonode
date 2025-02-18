import { EditorNodeType } from '@/lib/types.ts';
import { useEditor } from '@/providers/editor-provider';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useMemo } from 'react';
type Props={

}
const initialNodes:EditorNodeType[]=[]
const initialEdges:{id:string; source:string; target:string}[]=[]
const EditorCanvas = (props: Props) =>{
    const {dispatch,state}=useEditor()
    const nodeTypes = useMemo(
        () => ({
          Action: EditorCanvasCardSingle,
          Trigger: EditorCanvasCardSingle,
          Email: EditorCanvasCardSingle,
          Condition: EditorCanvasCardSingle,
          AI: EditorCanvasCardSingle,
          Slack: EditorCanvasCardSingle,
          'Google Drive': EditorCanvasCardSingle,
          Notion: EditorCanvasCardSingle,
          Discord: EditorCanvasCardSingle,
          'Custom Webhook': EditorCanvasCardSingle,
          'Google Calendar': EditorCanvasCardSingle,
          Wait: EditorCanvasCardSingle,
        }),
        []
      )
    return (
        <div>
ED-Canvas
        </div>
    )
}