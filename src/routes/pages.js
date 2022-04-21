import Wars from "../components/Wars";
import WarDetails from "../components/WarDetails";

export const pages = [
  {
    path: "/Star-wars",
    children: [
      {
        path: "/movies",
        exact: true,
        element: Wars,
      },
      {
        path: "/move-details",
        exact: true,
        element: WarDetails,
      },
    ],
  },
];
