import React from "react";
import {displayState} from "../../pages/listType.ts";
import {autoKey} from "../../utils/geneKeys.ts";
import {useSelector, useDispatch} from "react-redux";
import {listActions} from "../../slices/listInfoSlice.ts";
import {displayActions} from "../../slices/displaySlice.ts";
import {storeType} from "../../store/store.ts";

const Footer: React.FC = () => {
    const stateButtons: displayState[] = ['all', 'active', 'completed'];
    const dispatch = useDispatch();
    const displayState = useSelector((state: storeType) => state.displayReducer)
    return (
        <footer className="footer">
            <span className="todo-count"></span>
            <ul className="filters">
                {stateButtons.map((item) => {
                    return (
                        <li key={autoKey.next().value as number}>
                            <a className={displayState === item ? 'selected' : ''} onClick={() =>dispatch(displayActions.changeState(item))}>{item}</a>
                        </li>
                    )
                })}
            </ul>
            <button className="clear-completed" onClick={() => dispatch(listActions.clearCompleted())}>Clear completed</button>
        </footer>
    )
}
export default Footer