// import React from 'react';
// import PropTypes from 'prop-types';
// import { useDrop } from 'react-dnd';
// import DraggableCard from '../DraggableCard/DraggableCard';
// import style from '../Home/home.module.css';

// const ItemType = {
//   CARD: 'card',
// };

// function DroppableSlot({ slotType, onDrop, onRemove, cards }) {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType.CARD,
//     drop: (item) => onDrop(item.id, slotType, item.originalSlot),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div ref={drop} className={`${style.slotStyle} ${isOver ? style.slotHover : ''}`}>
//       {!cards.length && (
//         <>
//           <i className="fa-regular fa-image fs-1 mb-3"></i>
//           <h6>Drag Here</h6>
//         </>
//       )}
//       <div className="row">
//         {cards.map((card,idx) => (
//           <div className="col-md-6 mb-4" key={idx}>
//             <DraggableCard id={card.id} originalSlot={slotType}>
//               <span>{card.name}</span>
//               <div>
//                 <button className="btn btn-danger btn-sm mt-2" onClick={() => onRemove(card.id, slotType)}>
//                   Remove
//                 </button>
//               </div>
//             </DraggableCard>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// DroppableSlot.propTypes = {
//   slotType: PropTypes.string.isRequired,
//   onDrop: PropTypes.func.isRequired,
//   onRemove: PropTypes.func.isRequired,
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default DroppableSlot;


import React from 'react';
import PropTypes from 'prop-types';
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
      {!cards.length && (
        <>
          <i className="fa-regular fa-image fs-1 mb-3"></i>
          <h6>Drag Here</h6>
        </>
      )}
      <div className="row">
        {cards.map((card,idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <DraggableCard id={card.id} originalSlot={slotType}>
              <span>{card.name}</span>
              <div>
                <button className="btn btn-danger btn-sm mt-2" onClick={() => onRemove(card.id, slotType)}>
                  Remove
                </button>
              </div>
            </DraggableCard>
          </div>
        ))}
      </div>
    </div>
  );
}

DroppableSlot.propTypes = {
  slotType: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DroppableSlot;