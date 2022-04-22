import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWar } from "../redux/actions/searchMovieActions";

export default function WarDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { war, loading, error } = useSelector(
    (state) => state.searchMovieReducer
  );

  useEffect(() => {
    dispatch(getWar(id));
  }, [id]);

  //
  return (
    <div className="single-card">
      {loading && <div className="loading">...Loading data</div>}
      <div div className="card-details">
        {Object.keys(war).length > 0 && (
          <div className="" style={{ width: "50rem" }}>
            <div className="">
              <p className="text-data">Title :{war.title}</p>
              <p className="text-data">Producer: {war.producer}</p>
              <p className="text-data">Director: {war.director}</p>
              <p className="text-data">
                Created: {moment(war.created).format("DD-MMM-YYYY")}
              </p>
              <p className="text-data">
                ReleaseDate: {moment(war.release_date).format("DD-MMM-YYYY")}
              </p>
              <p className="text-data">OpeningCrawl: {war.opening_crawl}</p>
            </div>
          </div>
        )}
        {error && <div>No Data Found</div>}
      </div>
    </div>
  );
}
