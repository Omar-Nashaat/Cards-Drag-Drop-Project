import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableCard from '../DraggableCard/DraggableCard';
import style from '../Home/home.module.css';

const ItemType = {
  CARD: 'card',
};

function DroppableSlot({ slotType, onDrop, onRemove, cards }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.CARD,
    drop: (item) => onDrop(item.id, slotType, item.originalSlot),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`${style.slotStyle} ${isOver ? style.slotHover : ''}`}>
      <i className="fa-regular fa-image fs-1 mb-3"></i>
      <h6>Drag Here</h6>
      <div className="d-flex flex-wrap">
        {cards.map((card) => (
          <div key={card.id} className={`${style.cardWrapper} m-2`}>
            <DraggableCard id={card.id} originalSlot={slotType}>
              <span>{card.name}</span>
            </DraggableCard>
            <button className="btn btn-danger btn-sm mt-2" onClick={() => onRemove(card.id, slotType)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DroppableSlot;
