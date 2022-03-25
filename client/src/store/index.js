import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./property/propertiesSlice";

const rootReducer = {
	property: propertyReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
