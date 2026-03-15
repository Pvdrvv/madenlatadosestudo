import { useEffect } from "react"

import Hero from "./components/Hero"
import ImageTrail from "./components/Imagetrail"
import Lookbook from "./components/Lookbook"
import Manifesto from "./components/Manifesto"
import ComputerGallery from "./components/ComputerGallery"
import PlateSection from "./components/PlateSection"

import "./styles.css"

function App() {

  useEffect(() => {

   
    const preventZoom = (e) => {
      if (e.ctrlKey) {
        e.preventDefault()
      }
    }

    window.addEventListener("wheel", preventZoom, { passive:false })


    const preventKeyZoom = (e) => {

      if (
        (e.ctrlKey && e.key === "+") ||
        (e.ctrlKey && e.key === "-") ||
        (e.ctrlKey && e.key === "=")
      ) {
        e.preventDefault()
      }

    }

    window.addEventListener("keydown", preventKeyZoom)

    return () => {

      window.removeEventListener("wheel", preventZoom)
      window.removeEventListener("keydown", preventKeyZoom)

    }

  }, [])


  return (

    <div className="app">

      <Hero/>

      <ImageTrail/>

      <Lookbook/>

      <Manifesto/>

      <ComputerGallery/>

      <PlateSection/>

    </div>

  )

}

export default App
