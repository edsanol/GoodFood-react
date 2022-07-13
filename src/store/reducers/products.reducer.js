const initialState = {
  products: []
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case 'GET_PRODUCTS_BY_RESTAURANT':
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}
