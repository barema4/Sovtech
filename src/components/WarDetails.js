import React, { useEffect } from "react";
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
    <div div className="card-details">
      {loading && <div className="loading">...Loading data</div>}
      {Object.keys(war).length > 0 && (
        <div className="" style={{ width: "50rem" }}>
          <div className="">
            <h5 className="">Title :{war.title}</h5>
            <h6 className="">Producer: {war.producer}</h6>
            <h6 className="">Director: {war.director}</h6>
            <h6 className="">Created: {war.created}</h6>
            <h6 className="">ReleaseDate: {war.release_date}</h6>
            <p className="">OpeningCrawl: {war.opening_crawl}</p>
          </div>
        </div>
      )}
      {error && <div>No Data Found</div>}
    </div>
  );
}
