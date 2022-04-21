import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getWars } from "../redux/actions/recordingActions";
import recordingReducer from "../redux/reducers/recordingReducer";

export default function Wars() {
  const dispatch = useDispatch();
  const [searchVale, setSearchVale] = useState("");
  const { wars } = useSelector((state) => state.recordingReducer);

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("wars.........", wars);
  }, [wars]);

  return (
    <div>
      <input
        // type="text"
        // class="form-control"
        onChange={(e) => setSearchVale(e.target.value)}
      />
      <button
        // type="button"
        // class="btn btn-primary"
        onClick={() => dispatch(getWars(searchVale))}
      >
        click
      </button>
      <ui>
        {wars.map((item) => {
          return (
            // <li key={item.title}>
            <Link to={`/Star-wars/move-details`}>
              <div
                className="card m-2"
                key={item.title}
                style={{ width: "18rem" }}
                onClick={() => console.log("first")}
              >
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {item.producer}
                  </h6>
                </div>
              </div>
            </Link>

            // </li>
          );
        })}
      </ui>
    </div>
  );
}
