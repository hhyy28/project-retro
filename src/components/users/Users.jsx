import React, { useState, useEffect } from 'react';
import s from './users.module.css'

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

 
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul className={s.back} >
        {items.map(item => (
          <li key={item.id} className={s.block}>
            <img src='https://image-cdn.neatoshop.com/styleimg/32074/none/black/default/243597-20.jpg' className={s.photo} alt=""></img>
            {item.name} {item.price}
            "{item.username}"
          </li>
        ))}
      </ul>
    );
  }
}
export default MyComponent