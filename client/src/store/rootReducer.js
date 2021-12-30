import { combineReducers } from 'redux'
import propertiesListReducer from './property/propertySlice'

export default combineReducers({
  propertiesList: propertiesListReducer,
})
