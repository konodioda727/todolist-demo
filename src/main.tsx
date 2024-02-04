import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import {Provider} from "react-redux";
import todoStore from "./store/todoStore.ts";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={todoStore}>
          <App />
      </Provider>
  </React.StrictMode>,
)
