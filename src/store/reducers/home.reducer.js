const initialState = {
  homeView: 'Home',
  orders: [],
  diner: {},
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        ...state,
        homeView: action.payload,
      }
    case 'GET_ALL_ORDERS':
      return {
        ...state,
        orders: action.payload,
      }
    case 'UPDATE_SUCCESS_ORDER':
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.id === action.payload.id) {
            return {
              ...order,
              success: true,
            }
          }
          return order
        }),
      }
    case 'GET_DINER_BY_ID':
      return {
        ...state,
        diner: action.payload,
      }
    default:
      return state
  }
}
