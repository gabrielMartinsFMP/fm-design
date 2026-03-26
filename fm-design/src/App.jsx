import { About } from "./components/About"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Slides } from "./components/Slides"



function App() {


  return (
    <div className="m-0">
     <Header/>
      <main>
         <Hero/>
          <About />
          <Slides />
      </main>
    </div>
  )
}

export default App
