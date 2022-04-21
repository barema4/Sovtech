import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { pages } from "./pages";

export default function routes() {
  /**
   * Recursively return child routes for a route in a list of routes
   * @param  {[pathnames]} arg1 An array of routes to loop through
   * @param  {prefix} arg2 A prefix to add onto the previous route path
   */
  const routeHandler = (pagenames, prefix = "") => {
    return pagenames.map((route) => {
      if (!route.children) {
        return (
          <Route
            key={`${prefix}${route.path}`}
            path={`${prefix}${route.path}`}
            exact={route.exact}
            element={
              <route>
                <route.element />
              </route>
            }
          />
        );
      }
      return routeHandler(route.children, route.path);
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Star-wars/movies" />} />
        {routeHandler(pages)}
      </Routes>
    </Router>
  );
}
