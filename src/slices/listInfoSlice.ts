import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {itemType} from "../pages/listType.ts";
import {autoKey} from "../utils/geneKeys.ts";

const listInfoSlice = createSlice({
    name: 'listInfo',
    initialState: [] as itemType[],
    reducers: {
        add: (state: itemType[], action: PayloadAction<string>) => {
            return state.concat({
                value: action.payload,
                key: autoKey.next().value as number,
                isCompleted: false,
            });
        },
        dele: (state: itemType[], action: PayloadAction<number>) => {
            return state.filter((item) => item.key != action.payload)
        },
        edit: (state: itemType[], action: PayloadAction<[key: number, newValue: string]>) => {
            const [key, newValue] = action.payload
            return state.map((item) => {
                return item.key === key ? {...item, value: newValue} : item
            })
        },
        toggle: (state: itemType[], action: PayloadAction<number>) => {
            return state.map((item) => {
                return item.key === action.payload ? {...item, isCompleted: !item.isCompleted} : item
            })
        },
        toggleAll: (state: itemType[]) => {
            return state.map((item) => {
                return {...item, isCompleted: true}
            })
        },
        clearCompleted: (state: itemType[]) => {
            return state.filter((item) => !item.isCompleted)
        },
    }
})

export const listActions = listInfoSlice.actions
export default listInfoSlice.reducer