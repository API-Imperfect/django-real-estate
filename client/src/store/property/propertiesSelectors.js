import { createSelector } from "@reduxjs/toolkit";
import { values } from "lodash";

// Naming convention for non-memoized selectors - getSLICE_NAME

/**
 * Non-memoized selector returns property slice
 * which includes properties dictionary, loading and error state.
 */
export const getPropertySlice = (state) => state.property;

// Memoized selectors are named with the following convention: selectSLICE_NAME

/**
 * Memoized selector returns property slice. Converts properties to list.
 */
export const selectPropertySlice = createSelector(
	getPropertySlice,
	(property) => {
		return { ...property, properties: values(property.properties) };
	},
);

/**
 * Memoized selector retrieves a property by id or returns undefined if not found.
 */
export const selectPropertyById = (id) =>
	createSelector(getPropertySlice, (property) =>
		// Guard against id not being defined on initial render
		id ? property.properties[id] : undefined,
	);
