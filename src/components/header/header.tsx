import React from "react";
import {MainProps} from "../types/types.ts";

const Header: React.FC<MainProps> = (props) => {
    const {listFunctions} = props;
    const handleNew = (e) => {
        if(e.keyCode === 13 && e.target.value) {
            listFunctions.handleAdd(e.target.value);
            e.target.value = ''
        }
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={handleNew} />
        </header>
    )
}

export default Header