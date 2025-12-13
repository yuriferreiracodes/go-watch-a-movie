import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(`http://localhost:9000/movies/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-4">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <h2>Error loading movie</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">
        ← Back
      </Link>

      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <h6 className="card-subtitle mb-3 text-muted">
            Released: {movie.release_date}
          </h6>

          {movie.image && (
            <img
              src={movie.image}
              alt={movie.title}
              className="img-fluid mb-3"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          )}

          <p className="card-text">{movie.description}</p>

          <div className="card-footer text-muted mt-3">
            <strong>Runtime:</strong> {movie.runtime} min |{" "}
            <strong>Rating:</strong> {movie.mpaa_rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;