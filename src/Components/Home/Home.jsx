import React, { useState } from 'react';
import style from './home.module.css';
import Slider from 'react-slick';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableCard from '../DraggableCard/DraggableCard';
import DroppableSlot from '../DroppableSlot/DroppableSlot';
import toast from 'react-hot-toast';

export default function Home() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [cards] = useState([
    { id: 1, name: 'Card 1', icon: 'fa-solid fa-wallet fs-3 mb-3', description: 'Be involved in work that yields a practical or useful result' },
    { id: 2, name: 'Card 2', icon: 'fa-solid fa-wallet fs-3 mb-3', description: 'Be involved in work that yields a practical or useful result' },
    { id: 3, name: 'Card 3', icon: 'fa-solid fa-wallet fs-3 mb-3', description: 'Be involved in work that yields a practical or useful result' },
    { id: 4, name: 'Card 4', icon: 'fa-solid fa-wallet fs-3 mb-3', description: 'Be involved in work that yields a practical or useful result' },
    { id: 5, name: 'Card 5', icon: 'fa-solid fa-wallet fs-3 mb-3', description: 'Be involved in work that yields a practical or useful result' },
  ]);

  const [slots, setSlots] = useState({
    alwaysValued: [],
    sometimesValued: [],
    oftenValued: [],
    rarelyValued: [],
    neverValued: [],
  });

  const [draggedCards, setDraggedCards] = useState([]);

  const handleDrop = (cardId, slotType, originalSlot = null) => {
    const card = cards.find((c) => c.id === cardId);
    setSlots((prevSlots) => {
      let newSlots = { ...prevSlots };

      if (originalSlot) {
        newSlots[originalSlot] = prevSlots[originalSlot].filter((c) => c.id !== cardId);
      }

      if (slotType && newSlots[slotType].some((c) => c.id === cardId)) {
        toast.error('Card already in slot');
        return prevSlots;
      }

      if (slotType) {
        newSlots[slotType] = [...newSlots[slotType], card];
        setDraggedCards((prevDragged) => [...prevDragged, cardId]);
      }

      return newSlots;
    });
  };

  const handleRemove = (cardId, slotType) => {
    setSlots((prevSlots) => {
      let newSlots = { ...prevSlots };
      newSlots[slotType] = prevSlots[slotType].filter((c) => c.id !== cardId);
      return newSlots;
    });

    setDraggedCards((prevDragged) => prevDragged.filter((id) => id !== cardId));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={style.allHome}>
        <header className={style.firstSection}>
          <h2 className="fw-bold">Career Values Step</h2>
          <p>Home / How It Works</p>
          <div className={style.lineDiv}></div>
        </header>
        <section className={style.slotsDiv}>
          <div className="container">
            <div className="row">
              {['alwaysValued', 'sometimesValued', 'oftenValued', 'rarelyValued', 'neverValued'].map((slotType) => (
                <div className="col-md-4" key={slotType}>
                  <h5 className="mb-2">{slotType.replace(/([A-Z])/g, ' $1')}</h5>
                  <DroppableSlot slotType={slotType} onDrop={handleDrop} onRemove={handleRemove} cards={slots[slotType]} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={`${style.slider} container pb-5`}>
          <div className="slider-container">
            <div className={`${style.bgSlider} p-3 pb-5`}>
              <div className="container w-75">
                <Slider {...settings} className="col-md-12">
                  {cards.map((card) => (
                    <div className={`${style.cardDiv} col-md-3 position-relative`} key={card.id}>
                      <DraggableCard id={card.id} originalSlot={null} dragged={draggedCards.includes(card.id)}>
                        <div className={style.hidden}>
                          <i className={card.icon}></i>
                          <h5 className={`${style.cardName} ${draggedCards.includes(card.id) ? style.dragged : ''} mb-3`}>{card.name}</h5>
                        </div>
                        <div className={style.layer}>
                          <p className="p-3 mt-4">{card.description}</p>
                        </div>
                        {draggedCards.includes(card.id) && <div className={style.draggedText}>Already Dragged</div>}
                      </DraggableCard>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <button className={`${style.submitBtn} btn d-block m-auto mt-3 text-white rounded-4 fs-4`}>SUBMIT</button>
        </section>
      </div>
    </DndProvider>
  );
}
