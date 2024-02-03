import React from "react";
import {MainProps} from "../../../types/types.ts";

const ToggleAll: React.FC<MainProps> = (props) => {
    const {listFunctions, list} = props;
    const handleToggleAll = () => {
        listFunctions.handleToggleAll()
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