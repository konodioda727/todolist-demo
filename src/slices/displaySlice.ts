import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {displayState} from "../pages/listType.ts";

const displaySlice = createSlice({
    name: 'display',
    initialState: 'all' as displayState,
    reducers: {
        changeState: (_, action: PayloadAction<displayState>) => {
            return action.payload
        }
    }
})

export const displayActions = displaySlice.actions
export default displaySlice.reducer