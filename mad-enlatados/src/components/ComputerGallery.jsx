import { useState } from "react"

export default function ComputerGallery(){

  const [folder,setFolder] = useState("colecao")

  const images = {
    colecao:[
      "/gallery/1.png",
      "/gallery/2.png",
      "/gallery/3.png",
      "/gallery/4.png",
      "/gallery/4.png",
      "/gallery/4.png",
    ],

    voces:[
      "/gallery/5.webp",
      "/gallery/6.webp",
      "/gallery/7.webp",
      "/gallery/8.webp"
    ],

    arquivos:[
      "/gallery/9.webp",
      "/gallery/10.webp",
      "/gallery/11.webp",
      "/gallery/12.webp"
    ]
  }

  return(

    <section className="computer-section">

      <div className="computer-wrapper">

        <img
        src="/images/MADPC.png"
        className="computer-image"
        />

        <div className="screen">
            <div className="screen">

  <div className="screen-bg"></div>

  <div className="interface">

    {/* sidebar + galeria */}

  </div>

</div>

          <div className="interface">

            <div className="sidebar">

              <p onClick={()=>setFolder("colecao")}>coleção</p>
              <p onClick={()=>setFolder("voces")}>vocês</p>
              <p onClick={()=>setFolder("arquivos")}>arquivos</p>

            </div>

            <div className="content">

              <div className="header">
                CONECTANDO...
              </div>

              <div className="gallery">

                {images[folder].map((img,i)=>(
                  <img key={i} src={img}/>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}