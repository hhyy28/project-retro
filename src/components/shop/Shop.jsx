import { useEffect, useState } from "react";
import Beers from "./beers/Beers";
import Pagination from "./pagination/Pagination";
import s from './Shop.module.css'

const Shop = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 5;

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
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

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = items.slice(firstPostIndex, lastPostIndex)

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка с сервера...</div>;
  } else {
    return(
      <div className = {s.wrapp}>
        <h1 className = {s.h1}>beer list</h1>
        <Beers items = {currentPost} isLoaded = {isLoaded} error={error}/>
        <Pagination postPerPage = {postPerPage} totalPosts = {items.length} paginate = {paginate}/>
      </div>
      )
  }
}

export default Shop