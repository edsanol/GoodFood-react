const initialState = {
  homeView: 'Home'
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        ...state,
        homeView: action.payload
      }
    default:
      return state
  }
}
