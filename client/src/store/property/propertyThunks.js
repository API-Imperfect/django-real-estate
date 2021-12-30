import axios from "axios";

import {
	propertyListRequest,
	propertyListSuccess,
	propertyListFail,
} from "./propertySlice";

export const fetchPropertyList = () => async (dispatch) => {
	try {
		dispatch(propertyListRequest());
		const { data } = await axios.get("/api/v1/properties/all/");

		dispatch(propertyListSuccess(data));
	} catch (error) {
		const errorMessage =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch(propertyListFail(errorMessage));
	}
};
