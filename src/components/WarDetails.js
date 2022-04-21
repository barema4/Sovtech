import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function WarDetails() {
  const { war, loading } = useSelector((state) => state.searchMovieReducer);
  //
  return (
    <div div className="card-details">
      {loading && <div class="spinner-border text-info" role="status" />}
      {Object.keys(war).length > 0 && (
        <div className="card m-2" style={{ width: "50rem" }}>
          <div className="card-body">
            <h5 className="card-title">Title :{war.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Producer: {war.producer}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Director: {war.director}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Created: {war.created}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              ReleaseDate: {war.release_date}
            </h6>
            <p className="card-subtitle mb-2 text-muted">
              OpeningCrawl: {war.opening_crawl}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
