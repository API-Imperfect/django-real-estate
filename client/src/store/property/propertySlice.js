import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	properties: [],
	loading: false,
	error: undefined, // Optionally could be set to null or empty string. I find that undefined works best when using TypeScript
};

const propertiesSlice = createSlice({
	name: "properties",
	initialState,
	reducers: {
		propertyListRequest: (state, action) => {
			state.loading = true;
			state.error = undefined;
		},
		propertyListSuccess: (state, action) => {
			state.loading = false;
			state.error = undefined;
			state.properties = action.payload.results;
		},
		propertyListFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { propertyListRequest, propertyListSuccess, propertyListFail } =
	propertiesSlice.actions;

export default propertiesSlice.reducer;
