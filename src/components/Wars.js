import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getWars, getWar } from "../redux/actions/searchMovieActions";
import "../sytles/startwar.css";

export default function Wars() {
  const dispatch = useDispatch();
  const [searchVale, setSearchVale] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { wars, loading } = useSelector((state) => state.searchMovieReducer);

  const getMovieDetail = (url) => {
    dispatch(getWar(url));
  };

  return (
    <>
      <div>
        <div className="container row mt-3 ml-auto">
          <div className="col-md-4">Welcome Star War API</div>
          <div className="col-md-6">
            <input
              type="text"
              class="form-control"
              onChange={(e) => setSearchVale(e.target.value)}
              placeholder="Please search your owen choice movie"
            />
          </div>
          <div className="col-md-2">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                dispatch(getWars(searchVale));
                setShowMessage(true);
              }}
            >
              Search Movie
            </button>
          </div>
        </div>

        <br />
        {loading && <div class="spinner-border text-info" role="status" />}
        <div className="move-list">
          {wars.map((item) => {
            return (
              <Link to={`/Star-wars/move-details`}>
                <div
                  className="card m-2 "
                  key={item.title}
                  style={{ width: "25rem" }}
                  onClick={() => getMovieDetail(item.url)}
                >
                  <div className="card-body movie-cards">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.producer}
                    </h6>
                  </div>
                </div>
              </Link>
            );
          })}
          {wars.length === 0 && showMessage && !loading && (
            <p>No available movies that corresponds your search</p>
          )}
        </div>
      </div>
    </>
  );
}
