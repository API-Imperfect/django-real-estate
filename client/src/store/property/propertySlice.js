import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	properties: [],
	loading: false,
};

const propertiesSlice = createSlice({
	name: "properties",
	initialState,
	reducers: {
		propertyListRequest: (state, action) => {
			state.loading = true;
		},
		propertyListSuccess: (state, action) => {
			state.loading = false;
			state.properties = action.payload.results;
		},
		propertyListFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { propertyListRequest, propertyListSuccess, propertyListFail } = propertiesSlice.actions;

export default propertiesSlice.reducer;
