import { combineReducers } from 'redux'
import { homeReducer } from './home.reducer'
import { productReducer } from './products.reducer'
import { restaurantReducer } from './restaurant.reducer'
import { updateImageReducer } from './updateImage.reducer'

export default combineReducers({
  updateImageReducer,
  restaurantReducer,
  homeReducer,
  productReducer
})
