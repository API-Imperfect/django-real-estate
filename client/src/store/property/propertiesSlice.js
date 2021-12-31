import { createSlice } from "@reduxjs/toolkit";
import { map, zipObject } from "lodash";

const initialState = {
	properties: {},
	loading: false,
	error: undefined, // Optionally could be set to null or empty string. I find that undefined works best when using TypeScript
};

const propertiesSlice = createSlice({
	name: "properties",
	initialState,
	reducers: {
		propertiesRequest: (state, action) => {
			state.loading = true;
			state.error = undefined;
		},
		propertiesSuccess: (state, action) => {
			state.loading = false;
			state.error = undefined;
			state.properties = zipObject(
				map(action.payload.results, "id"),
				action.payload.results,
			);
		},
		propertiesFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { propertiesRequest, propertiesSuccess, propertiesFail } =
	propertiesSlice.actions;

export default propertiesSlice.reducer;
