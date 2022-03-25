import { configureStore } from "@reduxjs/toolkit";
import propertiesListReducer from "./property/propertiesSlice";

const rootReducer = {
	propertiesList: propertiesListReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
