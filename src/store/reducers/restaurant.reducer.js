const initialState = {
  uid: null,
  checking: true,
  loggedIn: false,
  name: null,
  logo: null,
  restaurant: {},
}

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_RESTAURANT':
      return {
        ...state,
        checking: false,
        loggedIn: true,
        uid: action.payload._id,
        name: action.payload.name,
        logo: action.payload.logo,
        restaurant: action.payload,
      }
    default:
      return state
  }
}
