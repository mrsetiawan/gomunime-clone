const intialState = {
  dataLatestRelease: [],
  loading: false,
  error: null
}

const reducerLatesRelease = (state = intialState, action) => {
  switch (action.type) {
    case 'GET_DATA_LATEST_RELEASE':
      return {
        ...state,
        loading: false,
        dataLatestRelease: [...action.payload.latest_release]
      };
    case 'INIT_DATA_STARTED':
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
}

export default reducerLatesRelease;