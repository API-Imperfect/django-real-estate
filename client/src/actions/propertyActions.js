import axios from "axios";
import {
	PROPERTY_LIST_FAIL,
	PROPERTY_LIST_REQUEST,
	PROPERTY_LIST_SUCCESS,
} from "./types";

export const listProperties = () => async (dispatch) => {
	try {
		dispatch({
			type: PROPERTY_LIST_REQUEST,
		});
		const { data } = await axios.get("/api/v1/properties/all/");

		dispatch({
			type: PROPERTY_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PROPERTY_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
