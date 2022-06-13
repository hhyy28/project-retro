import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import s from './beerInfo.module.css';

const BeerInfo = () => {
  const location = useLocation();
  const pagePath = location.pathname.split('/');    
  const [pageData, setPageData] = useState([]);

  useEffect(() => {        
    fetch('https://api.punkapi.com/v2/beers/' + pagePath[2], {method: 'GET'})
      .then(response => response.json())        
      .then(data => setPageData(data));
  }, []);
  if (!pageData.length) return <div>Loading...</div>;
  else {        
    const { 
      name, 
      image_url, 
      tagline, 
      abv, 
      first_brewed, 
      description 
    } = pageData[0];

    return ( 
    <div className={s.wrapp} >
      <h1 className={s.title}>{name}</h1>
      <div className={s.block} >
        <img src={image_url} className={s.img} alt="" ></img>
      </div>
      <p className={s.info}>tagline: {tagline}</p>
      <p className={s.info}>abv: {abv}</p>
      <p className={s.info}>first brewed: {first_brewed}</p>
      <p className={s.info}>discription: {description}</p>
      <button><NavLink to="/shop">back to main page</NavLink></button>
    </div>
  )};
  }
export default BeerInfo