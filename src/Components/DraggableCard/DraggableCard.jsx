import React from 'react';
import { useDrag } from 'react-dnd';
import style from '../Home/home.module.css';

const ItemType = {
  CARD: 'card',
};

function DraggableCard({ id, children, originalSlot, dragged }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.CARD,
    item: { id, originalSlot },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`${style.slide} ${dragged ? style.draggedCard : ''} p-5 rounded-2 text-center`} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
}

export default DraggableCard;
