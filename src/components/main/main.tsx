import React from "react";
import ToggleAll from "./components/toggleAll/toggleAll.tsx";
import List from "./components/list/list.tsx";

const Main: React.FC = () => {
    return (
        <main className="main">
            <ToggleAll></ToggleAll>
            <List></List>
        </main>
    )
}

export default Main