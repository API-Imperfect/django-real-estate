import { combineReducers } from "redux";
import propertiesListReducer from "./property/propertiesSlice";

export default combineReducers({
	propertiesList: propertiesListReducer,
});
