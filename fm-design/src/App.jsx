import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HowItsWork } from "./components/HowItsWork"
import { Slides } from "./components/Slides"
import { View3D } from "./components/View3D"



function App() {


  return (
    <div className="m-0">
     <Header/>
      <main>
         <Hero/>
          <About />
          <Slides />
          <HowItsWork />
          <View3D />
          <Footer />
      </main>
    </div>
  )
}

export default App
