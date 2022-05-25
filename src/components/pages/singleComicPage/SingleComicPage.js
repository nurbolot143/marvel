import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Spinner from "../../spinner/Spinner";
import Error from "../../error/Error";
import useMarvelService from "../../../services/MarvelService";

import "./singleComicPage.scss";

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  const { loading, error, getComic, clearError } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <Error /> : null;
  const view = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      {spinner}
      {errorMessage}
      {view}
    </>
  );
};

const View = ({ comic }) => {
  const { name, description, pageCount, thumbnail, language, price } = comic;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={name} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComicPage;
