import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const FilmDetails = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
          .then((res) => res.json())
          .then((film) => setFilm(film));
      }, []);

    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                    <h1 className="header bg-light rounded text p-2">{film?.title}</h1>
                    </section>
            <section className="row justify-content-center mt-3">
            <div className="col-md-8 align-self-center" key={`film-card-${film?.id}`}>
              <div className="card shadow my-2">
                <img className="card-img-top" src={film?.image} height="700em" />
                <div className="card-body">
                  <p className="card-subtitle text-muted">
                    {film?.original_title} / {film?.original_title_romanised}
                  </p>
                  <p className="card-subtitle text-muted my-1">Directed by: {film?.director}</p>
                  <p className="card-subtitle text-muted my-1"> Produced by: {film?.producer}</p>
                  <p className="card-subtitle text-muted my-1">Year of Release: {film?.release_date}</p>
                  <p className="card-subtitle text-muted my-1">Running Time: {film?.running_time} Minutes</p>
                  <p className="card-text">{film?.description}</p>
                  <a href={film?.url} target="_blank">API Resource Link</a>
                </div>
              </div>
            </div>

            </section>
            <section className="row justify-content-center mt-3">
                    <Link to="/films" className="btn text-light mb-4">Go Back to Films</Link>
                </section>
        </main>
    )
}

export default FilmDetails;