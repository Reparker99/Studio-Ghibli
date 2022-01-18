import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const LocationDetails = () => {
    const { locationid } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
          .then((res) => res.json())
          .then((location) => setLocation(location));
      }, []);

      return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                    <h1 className="header bg-light rounded text p-2">{location?.name}</h1>
                    </section>
            <section className="row justify-content-center mt-3">
            <div className="col-md-8 align-self-center" key={`location-card-${location?.id}`}>
              <div className="card shadow my-2">
                <div className="card-body">
                  <p className="card-subtitle text-muted my-1"> Climate: {location?.climate}</p>
                  <p className="card-subtitle text-muted my-1">Terrain: {location?.terrain}</p>
                  <a href={location?.url} target="_blank">API Resource Link</a>
                </div>
              </div>
            </div>

            </section>
            <section className="row justify-content-center mt-3">
                    <Link to="/Locations" className="btn text-light mb-4">Go Back to Locations</Link>
                </section>
        </main>
    )
};

export default LocationDetails;