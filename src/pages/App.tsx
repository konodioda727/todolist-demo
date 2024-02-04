import './App.css'
import Header from "../components/header/header.tsx";
import Footer from "../components/footer/footer.tsx";
import React from "react";
import Main from "../components/main/main.tsx";


const App: React.FC = () => {
    return (
    <>
      <section className='todoapp'>
          <Header></Header>
          <Main ></Main>
          <Footer></Footer>
      </section>
    </>
  )
}

export default App
