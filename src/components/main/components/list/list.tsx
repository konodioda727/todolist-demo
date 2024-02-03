import React, {useState} from "react";
import {listItemProps, MainProps} from "../../../types/types.ts";
import {autoKey} from "../../../../utils/geneKeys.ts";

const List: React.FC<MainProps> = (props) => {
    const {listFunctions, displayState, list} = props;
    return (
        <>
            <ul className="todo-list">
                {list.map((item) => {
                    const allDisp = displayState === 'all';
                    const compDisp = displayState === 'completed' && item.isCompleted;
                    const activeDisp = displayState === 'active' && !item.isCompleted;
                    return allDisp || compDisp || activeDisp
                        ? <ListItem key={autoKey.next().value as number} itemInfo={item} listFunctions={listFunctions}></ListItem>
                        : null
                })}
            </ul>
        </>
    )
}

export default List

export const ListItem: React.FC<listItemProps> = (props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const {listFunctions, itemInfo} = props;
    const handleInput = () => {
        listFunctions.handleToggle(itemInfo.key)
    }
    const handleDelete = () => {
        listFunctions.handleDelete(itemInfo.key)
    }
    const handleEdit = (e) => {
        if(e.keyCode === 13) {
            listFunctions.handleEdit(itemInfo.key, e.target.value);
            e.target.value = ''
            setEdit(false)
        }
    }
    const handleBlur = () => {
        setEdit(false)
    }
    const handleDoubleClick = () => {
        setEdit(true)
    }
    return (
        <>
            <li className={itemInfo.isCompleted?'completed':'active'} onDoubleClick={handleDoubleClick}>
                {!edit
                    ? <div className="view">
                        <input className="toggle" onChange={() => null} type="checkbox" checked={itemInfo.isCompleted}  onInput={handleInput}/>
                        <label>{itemInfo.value}</label>
                        <button className="destroy" onClick={handleDelete}></button>
                    </div>
                    : <input type='text' onKeyDown={handleEdit} onBlur={handleBlur} autoFocus className='new-todo'></input>
                }
            </li>
        </>
    )
}