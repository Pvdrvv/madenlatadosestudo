import { useRef, useState, useEffect } from "react"

const images = [
  "/images/x/1.webp",
  "/images/x/2.webp",
  "/images/x/3.webp",
  "/images/x/4.webp",
  "/images/x/5.webp",
  "/images/x/6.webp",
  "/images/x/7.webp",
  "/images/x/8.webp",
  "/images/x/9.webp",
  "/images/x/10.webp",
  "/images/x/11.webp",
  "/images/x/12.webp",
  "/images/x/13.webp",
  "/images/x/14.webp",
  "/images/x/15.webp",
  "/images/x/16.webp",
  "/images/x/17.webp",
  "/images/x/18.webp",
]

const strokeColors = [
  "#2AFF00",
  "#FF2A2A",
  "#FFD400"
]

function ImageTrail() {

  const [items, setItems] = useState([])
  const [active, setActive] = useState(false)

  const sectionRef = useRef(null)
  const last = useRef({ x: 0, y: 0 })
  const imageIndex = useRef(0)

  // detecta quando a seção aparece na tela
  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()

  }, [])

  function handleMove(e) {

    if (!active) return

    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const dist = Math.hypot(x - last.current.x, y - last.current.y)

    if (dist < 120) return

    last.current = { x, y }

    const img = {
      id: Math.random(),
      x,
      y,
      src: images[imageIndex.current],
      color: strokeColors[Math.floor(Math.random() * strokeColors.length)]
    }

    imageIndex.current = (imageIndex.current + 1) % images.length

    setItems(prev => [...prev.slice(-20), img])
  }

  return (

    <section
      ref={sectionRef}
      className="wall"
      onMouseMove={handleMove}
    >

      {items.map((item) => (

        <img
          key={item.id}
          src={item.src}
          className="trail-img"
          style={{
            left: item.x,
            top: item.y,
            border: `2px solid ${item.color}`
          }}
        />

      ))}

    </section>

  )
}

export default ImageTrail