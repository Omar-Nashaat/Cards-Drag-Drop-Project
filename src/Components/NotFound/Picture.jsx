import React from 'react'
import { useDrag } from 'react-dnd'


export default function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id, url },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <>
    <img
      ref={drag}
      src={url}
      width={"150px"}
      height={"200px"}
      style={{ border: isDragging ? "5px solid blue" : "" }} />
  </>
}
