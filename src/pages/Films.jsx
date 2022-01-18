import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
    }, []);

    return (
        <main className="container">
        <section className="row justify-content-center mt-3">
          <h1 className="header text bg-light rounded p-3">Films Created by Studio Ghibli:</h1>
          <div className="col-md-6">
              <ul className="list-group pb-5">

          {films.map((film) => (
              <li key={`film-item-${film.id}`} className="list-group-item d-flex justify-content-between align-items-center my-1">
                  {film.title}
                  <Link to={`/films/${film.id}`} className="btn text-light">
                      View Film Details
                  </Link>
            </li>
          ))}
          </ul>
          </div>
        </section>
        </main>
    )
}

export default Films;