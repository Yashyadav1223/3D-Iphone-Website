import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlight from "./components/Highlight"
import Model from "./components/Model"

import Features from "./components/Features"
import Chip from "./components/Chip"
import Footer from "./components/Footer"

const App = () => {
  return (

    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model/>
      <Features/>
      <Chip/>
      <Footer/>
    </main>
  )
  

}

export default App
