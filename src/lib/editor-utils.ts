import { EditorCanvasCardType } from "./types.ts";

export const onDragStart = (event: DragEvent, nodeType: EditorCanvasCardType['type']) => {
    if (!event.dataTransfer) return;
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
};
