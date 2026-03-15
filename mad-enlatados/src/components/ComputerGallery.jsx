import { useState } from "react"

export default function ComputerGallery(){

  const [folder,setFolder] = useState("colecao")

  const images = {
    colecao:[
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images//4.png",
      "/images/4.png",
    ],

    voces:[
      "/images/5.webp",
      "/images/6.webp",
      "/images/7.webp",
      "/images/8.webp"
    ],

    arquivos:[
      "/images/9.webp",
      "/images/10.webp",
      "/images/11.webp",
      "/images/12.webp"
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
