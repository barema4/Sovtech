import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getWars } from "../redux/actions/searchMovieActions";
import "../sytles/startwar.css";

export default function Wars() {
  const dispatch = useDispatch();
  const [searchVale, setSearchVale] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { wars, loading } = useSelector((state) => state.searchMovieReducer);

  return (
    <>
      <div>
        <div className="container-section">
          <div className="section1">Welcome Star War API</div>
          <div className="section">
            <input
              type="text"
              class=""
              onChange={(e) => setSearchVale(e.target.value)}
              placeholder="Please search your owen choice movie"
            />
          </div>
          <div className="section2">
            <button
              type="button"
              class="search-btn"
              disabled={searchVale.length === 0}
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
        {loading && <div className="loading">...Loading data</div>}
        <div className="move-list">
          {wars.map((item) => {
            const splitArray = item.url.split("/");
            const id = splitArray[splitArray.length - 2];
            return (
              <Link
                to={`/Star-wars/move-details/${id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card-details" key={item.title}>
                  <div className="">
                    <h5 className="data-list">{item.title}</h5>
                    <h6 className="data-list">{item.producer}</h6>
                  </div>
                </div>
              </Link>
            );
          })}
          {wars.length === 0 && showMessage && !loading && (
            <p style={{ display: "flex", justifyContent: "center" }}>
              No available movies that corresponds your search
            </p>
          )}
        </div>
      </div>
    </>
  );
}
