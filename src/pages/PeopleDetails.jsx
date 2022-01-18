import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PeopleDetails = () => {
    const { characterid } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${characterid}`)
          .then((res) => res.json())
          .then((character) => setCharacter(character));
      }, []);

      return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                    <h1 className="header bg-light rounded text p-2">{character?.name}</h1>
                    </section>
            <section className="row justify-content-center mt-3">
            <div className="col-md-8 align-self-center" key={`character-card-${character?.id}`}>
              <div className="card shadow my-2">
                <div className="card-body">
                  <p className="card-subtitle text-muted my-1">Gender: {character?.gender}</p>
                  <p className="card-subtitle text-muted my-1"> Age: {character?.age}</p>
                  <p className="card-subtitle text-muted my-1">Eye Color: {character?.eye_color}</p>
                  <p className="card-subtitle text-muted my-1">Hair Color: {character?.hair_color}</p>
                  <a href={character?.url} target="_blank">API Resource Link</a>
                </div>
              </div>
            </div>

            </section>
            <section className="row justify-content-center mt-3">
                    <Link to="/People" className="btn text-light mb-4">Go Back to Characters</Link>
                </section>
        </main>
    )

}

export default PeopleDetails;