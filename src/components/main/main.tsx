import React from "react";
import ToggleAll from "./components/toggleAll/toggleAll.tsx";
import List from "./components/list/list.tsx";
import {MainProps} from "../types/types.ts";

const Main: React.FC<MainProps> = (props) => {
    return (
        <main className="main">
            <ToggleAll {...props}></ToggleAll>
            <List {...props}></List>
        </main>
    )
}

export default Main