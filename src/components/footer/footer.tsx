import React from "react";
import {MainProps} from "../types/types.ts";
import {displayState} from "../../pages/listType.ts";
import {autoKey} from "../../utils/geneKeys.ts";

const Footer: React.FC<MainProps> = (props) => {
    const {listFunctions, displayState} = props;
    const stateButtons: displayState[] = ['all', 'active', 'completed'];
    return (
        <footer className="footer">
            <span className="todo-count"></span>
            <ul className="filters">
                {stateButtons.map((item) => {
                    return (
                        <li key={autoKey.next().value as number}>
                            <a className={displayState === item ? 'selected' : ''} onClick={() =>listFunctions.handleSetState(item)}>{item}</a>
                        </li>
                    )
                })}
            </ul>
            <button className="clear-completed" onClick={() => listFunctions.handleClearCompleted()}>Clear completed</button>
        </footer>
    )
}
export default Footer