import { RETRIEVE_MOVIES, RETRIEVE_WAR } from "../actions/actionTypes";

const initialState = {
  wars: [],
  war: {},
  error: null,
  loading: false,
};

const searchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_MOVIES.INIT:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_MOVIES.SUCCESS:
      return {
        ...state,
        loading: false,
        wars: action.payload,
      };

    case RETRIEVE_MOVIES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RETRIEVE_WAR.INIT:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_WAR.SUCCESS:
      return {
        ...state,
        loading: false,
        war: action.payload,
      };

    case RETRIEVE_WAR.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default searchMovieReducer;
