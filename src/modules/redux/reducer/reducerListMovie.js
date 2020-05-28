const initialState = {
  dataMovie: [],
  loading: false,
  error: null
}

const reducerListMovie = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_HOT_SERIES':
      return {
        loading: false,
        dataMovie: [...state.dataMovie, ...action.payload.hot_series]
      };
    case 'INIT_DATA_STARTED':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default reducerListMovie;