import React, { useState } from 'react';
import style from './home.module.css';
import Slider from 'react-slick';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableCard from '../DraggableCard/DraggableCard';
import DroppableSlot from '../DroppableSlot/DroppableSlot';
import toast from 'react-hot-toast';

export default function Home() {
  const settings = {
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
    { id: 1, name: 'Stability', description: 'Have a work routine and job duties that are largely predictable and not likely to change over a long period of time' },
    { id: 2, name: 'Supervision', description: 'Have a job in which I am directly responsible for work done by others' },
    { id: 3, name: 'Precision Work', description: 'Deal with tasks that have exact specifications, that require careful, accurate attention to detail' },
    { id: 4, name: 'Competition', description: 'Engage in activities which pit my abilities against others' },
    { id: 5, name: 'Practicality', description: 'Be involved in work that yields a practical or useful result' },
    { id: 6, name: 'Job Tranquility', description: 'Avoid pressure and “the rat race” in my job role and work setting' },
    { id: 7, name: 'Challenging Problems', description: 'Engage continually with complex questions and demanding tasks. ' },
    { id: 8, name: 'Steep Learning Curve', description: 'Be presented with new, unique or difficult tasks to be quickly mastered' },
    { id: 9, name: 'Spirituality', description: 'Work in a setting that is supportive of my spiritual beliefs' },
    { id: 10, name: 'Fun and Humor', description: 'Work in a setting where it is possible (and appropriate) to joke and have fun' },
    { id: 11, name: 'Diversity', description: 'Work in a setting that includes individuals of diverse religious, racial, or social backgrounds' },
    { id: 12, name: 'Work Under Pressure', description: 'Work in time-pressured circumstances, where there is little or no margin for error, or with demanding personal relationships' },
    { id: 13, name: 'Aesthetics', description: 'Be involved in studying or appreciating the beauty of things or ideas' },
    { id: 14, name: 'Influence People', description: 'Be in a position to change attitudes or opinions of others' },
    { id: 15, name: 'Power and Authority', description: 'Control the work activities or destinies of others' },
    { id: 16, name: 'Security', description: 'Be assured of keeping my job and a reasonable financial reward' },
    { id: 17, name: 'Recognition', description: 'Get positive feedback and public credit for work well done' },
    { id: 18, name: 'Make Decisions', description: 'Have the power to decide courses of action, policies, etc., a judgment job' },
    { id: 19, name: 'Affiliation', description: 'Be recognized as a member of a particular organization' },
    { id: 20, name: 'Help Others', description: 'Be involved in helping people directly, either individually or in small groups' },
    { id: 21, name: 'Friendships', description: 'Develop close personal relationships with people as a result of work activity' },
    { id: 22, name: 'Family', description: 'Ensure that the type of work I do and the hours I work fit with my family responsibilities' },
    { id: 23, name: 'Creative Expression', description: 'Be able to express in writing and in person my ideas concerning my job and how I might improve it. Have opportunities for experimentation and innovation' },
    { id: 24, name: 'Tradition', description: 'Be involved in work that is consistent with the social traditions in which I was brought up' },
    { id: 25, name: 'Intellectual Status', description: 'Be regarded as very well-informed and a strong theorist, as one acknowledged as an expert in a given field' },
    { id: 26, name: 'Community', description: 'Live in a town or city where I can meet my neighbors and become active in local politics or service projects' },
    { id: 27, name: 'Profit, Gain', description: 'Have a strong likelihood of accumulating large amounts of money or other material gain through ownership, profit-sharing, commissions, merit increases, etc.' },
    { id: 28, name: 'Location', description: 'Find a place to live (town or geographic area) conducive to my lifestyle, a desirable home base for my leisure, learning, and work life' },
    { id: 29, name: 'Structure and Predictability', description: 'Do work with a high level of structure and predictability' },
    { id: 30, name: 'Work Alone', description: 'Do projects by myself, without any amount of contact or input from others' },
    { id: 31, name: 'Personal Safety', description: 'Have a high probability of being safe and healthy at work' },
    { id: 32, name: 'Creativity (General)', description: 'Create new ideas, programs, organized structures or anything else not following a format developed by others' },
    { id: 33, name: 'Status', description: 'Impress or gain the respect of friends, family, and community by the nature and/or level of responsibility of my work' },
    { id: 34, name: 'Artistic Creativity', description: 'Engage in creative work in any of several art forms' },
    { id: 35, name: 'High Earnings Anticipated', description: 'Be able to purchase essentials and the luxuries of life that I wish' },
    { id: 36, name: 'Fast Pace', description: 'Work in circumstances where there is a high pace of activity and work is done rapidly' },
    { id: 37, name: 'Work on the Frontiers of Knowledge', description: 'Work in research and development, generating information and new ideas in the academic, scientific, or business communities' },
    { id: 38, name: 'Environment', description: 'Work on tasks that have a positive effect on the natural environment' },
    { id: 39, name: 'Physical Challenge', description: 'Have a job that requires bodily strength, speed, dexterity, or agility' },
    { id: 40, name: 'Honesty and Integrity', description: 'Work in a setting where honesty and integrity are assets' },
    { id: 41, name: 'Knowledge', description: 'Engage myself in pursuit of knowledge, truth, and understanding' },
    { id: 42, name: 'Adventure', description: 'Have job duties which involve frequent risk-taking' },
    { id: 43, name: 'Advancement', description: 'Be able to get ahead rapidly, gaining opportunities for growth and seniority from work well-done' },
    { id: 44, name: 'Help Society', description: 'Do something to contribute to the betterment of the world' },
    { id: 45, name: 'Moral Fulfillment', description: 'Feel that my work is contributing to ideals I feel are very important' },
    { id: 46, name: 'Exercise Competence', description: 'Demonstrate a high degree of proficiency in job skills and knowledge; show above-average effectiveness' },
    { id: 47, name: 'Independence', description: 'Be able to determine the nature of my work without significant direction from others. Not have to follow instructions or to conform to regulations' },
    { id: 48, name: 'Public Contact', description: 'Have a lot of day-to-day contact with people' },
    { id: 49, name: 'Group & Team', description: 'Work with a group to obtain team (rather than individual) results' },
    { id: 50, name: 'Excitement', description: 'Experience a high degree of stimulation or frequent novelty and drama on the job' },
    { id: 51, name: 'Work with Others', description: 'Have close working relations with a group and work as a team to common goals' },
    { id: 52, name: 'Work-Life Balance', description: 'A job that allows me adequate time for my family, hobbies, and social activities' },
    { id: 53, name: 'Time Freedom', description: 'Have responsibilities at which I can work according to my time schedule; no specific working hours required' },
    { id: 54, name: 'Change and Variety', description: 'Have work responsibilities that frequently change content or setting' },
  ]);

  const [slots, setSlots] = useState({
    alwaysValued: [],
    sometimesValued: [],
    oftenValued: [],
    rarelyValued: [],
    neverValued: [],
  });

  const [draggedCards, setDraggedCards] = useState([]);

  const [hoveredCard, setHoveredCard] = useState(null);

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

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleSubmit = () => {
    const output = {
      'ALWAYS VALUED': slots.alwaysValued.map(card => card.name).join(', '),
      'SOMETIMES VALUED': slots.sometimesValued.map(card => card.name).join(', '),
      'OFTEN VALUED': slots.oftenValued.map(card => card.name).join(', '),
      'RARELY VALUED': slots.rarelyValued.map(card => card.name).join(', '),
      'NEVER VALUED': slots.neverValued.map(card => card.name).join(', '),
    };
    console.log(output);
    toast.success('Submitted successfully!');
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
                    <div
                      className={`${style.cardDiv} col-md-3 position-relative`}
                      key={card.id}
                      onMouseEnter={() => handleCardHover(card.id)}
                      onMouseLeave={handleCardLeave}
                    >
                      <DraggableCard id={card.id} originalSlot={null} dragged={draggedCards.includes(card.id)}>
                        <div className={style.hidden}>
                          <h5 className={`${style.cardName} ${draggedCards.includes(card.id) ? style.dragged : ''} mb-3`}>{card.name}</h5>
                        </div>
                        <div className={`${style.changeInHover} ${hoveredCard === card.id ? style.tooltipVisible : ''} mt-3`}>
                          <p>{card.description}</p>
                        </div>
                      </DraggableCard>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className={`${style.submitBtn} btn d-block m-auto mt-3 text-white rounded-4 fs-4`}>SUBMIT</button>
        </section>
      </div>
    </DndProvider>
  );
}
