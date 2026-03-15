import { useRef } from "react"

export default function Lookbook(){

  const galleryRef = useRef(null)

  const handleMouseMove = (e) => {

    if(window.innerWidth < 768) return

    const { clientX } = e
    const width = window.innerWidth

    const percent = clientX / width

    const scrollAmount = galleryRef.current.scrollWidth - width

    galleryRef.current.scrollLeft = scrollAmount * percent
  }

  return(

    <section
      className="lookbook"
      onMouseMove={handleMouseMove}
    >

      <div className="lookbook-label">
        LOOKBOOK
      </div>

      <div className="lookbook-track" ref={galleryRef}>

        <img src="/images/x/1.webp"/>
        <img src="/images/x/2.webp"/>
        <img src="/images/x/3.webp"/>
        <img src="/images/x/4.webp"/>
        <img src="/images/x/5.webp"/>
        <img src="/images/x/6.webp"/>
        <img src="/images/x/7.webp"/>
        <img src="/images/x/8.webp"/>
        <img src="/images/x/9.webp"/>
        <img src="/images/x/10.webp"/>
        <img src="/images/x/11.webp"/>
        <img src="/images/x/12.webp"/>
        <img src="/images/x/13.webp"/>
        <img src="/images/x/14.webp"/>
        <img src="/images/x/15.webp"/>
        <img src="/images/x/16.webp"/>
        <img src="/images/x/17.webp"/>

      </div>

    </section>

  )
}
