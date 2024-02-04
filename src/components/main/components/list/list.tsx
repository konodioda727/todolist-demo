import React, {useState} from "react";
import {listItemProps} from "../../../types/types.ts";
import {autoKey} from "../../../../utils/geneKeys.ts";
import {listActions} from "../../../../slices/listInfoSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../../store/store.ts";

const List: React.FC = () => {
    const displayState = useSelector((state: storeType) => state.displayReducer);
    const list = useSelector((state: storeType) => state.listReducer)
    return (
        <>
            <ul className="todo-list">
                {list.map((item) => {
                    const allDisp = displayState === 'all';
                    const compDisp = displayState === 'completed' && item.isCompleted;
                    const activeDisp = displayState === 'active' && !item.isCompleted;
                    return allDisp || compDisp || activeDisp
                        ? <ListItem key={autoKey.next().value as number} itemInfo={item} ></ListItem>
                        : null
                })}
            </ul>
        </>
    )
}

export default List

export const ListItem: React.FC<listItemProps> = (props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const {key, value, isCompleted} = props.itemInfo;
    const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(listActions.toggle(key))
    }
    const handleDelete = () => {
        dispatch(listActions.dele(key))
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handleEdit = (e) => {
        if(e.keyCode === 13) {
            dispatch(listActions.edit([key, e.target.value]))
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
            <li className={isCompleted?'completed':'active'} onDoubleClick={handleDoubleClick}>
                {!edit
                    ? <div className="view">
                        <input className="toggle" onChange={() => null} type="checkbox" checked={isCompleted}  onInput={handleCheck}/>
                        <label>{value}</label>
                        <button className="destroy" onClick={handleDelete}></button>
                    </div>
                    : <input type='text' onKeyDown={handleEdit} onBlur={handleBlur} autoFocus className='new-todo'></input>
                }
            </li>
        </>
    )
}