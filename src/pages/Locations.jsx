import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/locations')
        .then(res => res.json())
        .then(locations => setLocations(locations))
    }, []);

    return (
        <main className="container">
        <section className="row justify-content-center mt-3">
          <h1 className="header text bg-light rounded p-3">Locations in Studio Ghibli Films:</h1>
          <div className="col-md-6">
              <ul className="list-group pb-5">

          {locations.map((location) => (
              <li key={`location-item-${location.id}`} className="list-group-item d-flex justify-content-between align-items-center my-1">
                  {location.name}
                  <Link to={`/locations/${location.id}`} className="btn text-light">
                      View Location Details
                  </Link>
            </li>
          ))}
          </ul>
          </div>
        </section>
        </main>
    )
};

export default Locations;