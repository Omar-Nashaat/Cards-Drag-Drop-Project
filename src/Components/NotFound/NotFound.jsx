import React, { useState } from 'react';
import Picture from './Picture';
import style from '../../App.module.css';
import { useDrop } from 'react-dnd';

const picList = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 2,
    url: "https://st5.depositphotos.com/75864878/66068/i/450/depositphotos_660685914-stock-photo-pink-cosmos-natural-background-thailand.jpg"
  },
  {
    id: 3,
    url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },
];

export default function NotFound() {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    console.log(id);
    const pictureList = picList.filter((pic) => id == pic.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  const removeImageFromBoard = (id) => {
    setBoard((board) => board.filter((pic) => pic.id !== id));
  };

  return (
    <>
      <div className={style.Pictures}>
        {picList.map((pic) => (
          <Picture url={pic.url} id={pic.id} key={pic.id} />
        ))}
      </div>
      <div className={style.Board} ref={drop}>
        {board.map((pic) => (
          <div key={pic.id} className={style.BoardItem} onClick={() => removeImageFromBoard(pic.id)}>
            <Picture url={pic.url} id={pic.id} />
          </div>
        ))}
      </div>
    </>
  );
}
