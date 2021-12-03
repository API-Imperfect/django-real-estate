import { combineReducers } from "redux";
import { propertiesListReducer } from "./propertyReducers";

export default combineReducers({
	propertiesList: propertiesListReducer,
});
