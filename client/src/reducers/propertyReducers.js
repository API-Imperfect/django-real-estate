import {
	PROPERTY_LIST_FAIL,
	PROPERTY_LIST_REQUEST,
	PROPERTY_LIST_SUCCESS,
} from "../actions/types";

export const propertiesListReducer = (state = { properties: [] }, action) => {
	switch (action.type) {
		case PROPERTY_LIST_REQUEST:
			return { loading: true, properties: [] };
		case PROPERTY_LIST_SUCCESS:
			return { loading: false, properties: action.payload.results };

		case PROPERTY_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
