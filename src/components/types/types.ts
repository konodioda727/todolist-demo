import {displayState, itemType, listFunctionType} from "../../pages/listType.ts";

export interface MainProps {
    listFunctions: listFunctionType,
    list: itemType[],
    displayState: displayState
}
export interface listItemProps {
    listFunctions: listFunctionType,
    itemInfo: itemType
}