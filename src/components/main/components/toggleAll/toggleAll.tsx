import React from "react";
import {listActions} from "../../../../slices/listInfoSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../../store/store.ts";

const ToggleAll: React.FC = () => {
    const {toggleAll} = listActions;
    const list = useSelector((state: storeType) => state.listReducer)
    const dispatch = useDispatch()
    const handleToggleAll = () => {
        dispatch(toggleAll())
    }
    return (
        <>
            <div className="toggle-all-container" onClick={handleToggleAll}>
                <input className="toggle-all" onChange={()=>null} checked={list.every((item) => item.isCompleted)} type="checkbox" />
                <label className="toggle-all-label" htmlFor="toggle-all">Mark all as complete</label>
            </div>
        </>
    )
}

export default ToggleAll