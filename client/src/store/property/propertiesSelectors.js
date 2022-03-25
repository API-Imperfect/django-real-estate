// Will use createSelector in next PR suggestion
import { createSelector } from "@reduxjs/toolkit";

// Naming convention for non-memoized selectors - getSLICE_NAME

/**
 * Returns a property object that includes property list, loading and error state.
 *
 * NOTE: I would normally just refer to this slice as "property"
 *       (instead of "propertyList") mimicing the model name in the API.
 *       and matching property directory in the store
 */
export const getPropertyList = (state) => state.propertiesList;

// Memoized selectors are named with the following convention: selectSLICE_NAME
