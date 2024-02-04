import {displayState, itemType} from "../pages/listType.ts";

export interface storeType {
    listReducer: itemType[],
    displayReducer: displayState
}