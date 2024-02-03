import './App.css'
import Header from "../components/header/header.tsx";
import Footer from "../components/footer/footer.tsx";
import React, {useState} from "react";
import {displayState, itemType, listFunctionType} from "./listType.ts";
import {autoKey} from "../utils/geneKeys.ts";
import Main from "../components/main/main.tsx";


const App: React.FC = () => {
    const [list, setList] = useState<itemType[]>([]);
    const [displayState, setDisplayState] = useState<displayState>('all');
    const listFunctions: listFunctionType = {
      handleAdd: (value: string) => {
          setList([...list, {value: value, isCompleted: false, key: autoKey.next().value as number}])
      },
      handleDelete: (key: number) => {
          const newList = list.filter((item) => item.key != key)
          setList(newList)
      },
      handleEdit: (key: number, newValue: string) => {
          const newList = list.map((item) => {
              return item.key === key ? {...item, value: newValue} : item
          })
          setList(newList)
      },
        handleToggle: (key: number) => {
              const newList: itemType[] = list.map((item) => {
                  return item.key === key ? {...item, isCompleted: !item.isCompleted} : item
              })
            setList(newList)
        },
        handleToggleAll: () => {
          const newList: itemType[] = list.map((item) => {
              return {...item, isCompleted: true}
          })
          setList(newList)
        },
        handleClearCompleted: () => {
          const newList: itemType[] = list.filter((item) => !item.isCompleted)
            setList(newList)
        },
        handleSetState: (state: displayState) => {
            setDisplayState(state)
        }
  }
    return (
    <>
      <section className='todoapp'>
          <Header listFunctions={listFunctions} displayState={displayState} list={list}></Header>
          <Main listFunctions={listFunctions} displayState={displayState} list={list}></Main>
          <Footer listFunctions={listFunctions} displayState={displayState} list={list}></Footer>
      </section>
    </>
  )
}

export default App
