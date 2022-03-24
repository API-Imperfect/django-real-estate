import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "../features/properties/propertySlice";

export const store = configureStore({
	reducer: {
		properties: propertyReducer,
	},
});
