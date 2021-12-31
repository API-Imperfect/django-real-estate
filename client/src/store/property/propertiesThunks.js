import axios from "axios";

import {
	propertiesRequest,
	propertiesSuccess,
	propertiesFail,
} from "./propertiesSlice";

/**
 * Optional renaming of the thunk action creator.
 */
export const fetchProperties = () => async (dispatch) => {
	try {
		dispatch(propertiesRequest());
		const { data } = await axios.get("/api/v1/properties/all/");
		dispatch(propertiesSuccess(data));
	} catch (error) {
		const errorMessage =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch(propertiesFail(errorMessage));
	}
};
