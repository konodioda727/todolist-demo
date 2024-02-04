import React from "react";
import {useDispatch} from "react-redux";
import {listActions} from '../../slices/listInfoSlice.ts'

const Header: React.FC = () => {
    const {add} = listActions
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handleNew = (e) => {
        if(e.keyCode === 13 && e.target.value) {
            dispatch(add(e.target.value))
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