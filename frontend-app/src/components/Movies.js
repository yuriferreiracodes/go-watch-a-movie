import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
    const requestOptions = {
      method: "GET",
      headers: headers, 
    }

    fetch(`http://localhost:9000/movies`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="container mt-4">
      <h2>Movies</h2>
      <hr />
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-3">
            <Link
              to={`/movie/${movie.id}`}
              className="text-decoration-none text-dark"
              style={{ display: "block" }}
            >
              <div
                className="card shadow-sm h-100"
                style={{
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  minHeight: "250px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Released: {movie.release_date}
                    </h6>
                    <p className="card-text" style={{ flexGrow: 1 }}>
                      {movie.description}
                    </p>
                  </div>
                </div>
                <div className="card-footer text-muted">
                  {movie.runtime} min | {movie.mpaa_rating}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
