import React, { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
    const moviesList = [
        {
        id: 1,
        title: "Highlander",
        release_date: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description:
            "A Scottish warrior learns he cannot die after a battle wound. Many years later in New York, he must fight others like him until only one remains.",
        link: "https://www.imdb.com/title/tt0091203/",
        },
        {
        id: 2,
        title: "The Matrix",
        release_date: "1999-03-31",
        runtime: 136,
        mpaa_rating: "R",
        description:
            "A hacker named Neo finds that his world is a computer illusion. He joins a small team to fight the machines that control humanity.",
        link: "https://www.imdb.com/title/tt0133093/",
        },
        {
        id: 3,
        title: "Freddy vs. Jason",
        release_date: "2003-08-15",
        runtime: 97,
        mpaa_rating: "R",
        description:
            "Freddy Krueger and Jason Voorhees come back to kill again. But soon they fight each other in a big and scary final battle.",
        link: "https://www.imdb.com/title/tt0329101/",
        },
    ];

    setMovies(moviesList);
    }, []);

  return (
    <div className="container mt-4">
      <h2>Movies</h2>
      <hr />
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-3">
            <a
              href={movie.link}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
