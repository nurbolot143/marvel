import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

import "./comicsList.scss";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(117);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;

    if (newComicsList.length < 8) {
      ended = true;
    }

    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setNewItemLoading(false);
    setOffset((offset) => offset + 8);
    setComicsEnded(ended);
  };

  const items = comicsList.map(({ id, name, thumbnail, price }, idx) => {
    return (
      <li key={id + idx} className="comics__item">
        <Link to={`/comics/${id}`}>
          <img src={thumbnail} alt="x-men" className="comics__item-img" />
          <div className="comics__item-name">{name}</div>
          <div className="comics__item-price">{price}</div>
        </Link>
      </li>
    );
  });

  const errorMessage = error ? <Error /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {spinner}
      {errorMessage}
      <ul className="comics__grid">{items}</ul>
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: comicsEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
