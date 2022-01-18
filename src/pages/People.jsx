import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => setPeople(people))
    }, []);

    return (
        <main className="container">
        <section className="row justify-content-center mt-3">
          <h1 className="header text bg-light rounded p-3">Characters in Studio Ghibli Films:</h1>
          <div className="col-md-6">
              <ul className="list-group pb-5">

          {people.map((character) => (
              <li key={`character-item-${character.id}`} className="list-group-item d-flex justify-content-between align-items-center my-1">
                  {character.name}
                  <Link to={`/people/${character.id}`} className="btn text-light">
                      View Character Details
                  </Link>
            </li>
          ))}
          </ul>
          </div>
        </section>
        </main>
    )
}

export default People;