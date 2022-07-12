import { combineReducers } from 'redux'
import { restaurantReducer } from './restaurant.reducer'
import { updateImageReducer } from './updateImage.reducer'

export default combineReducers({
  updateImageReducer,
  restaurantReducer,
})
