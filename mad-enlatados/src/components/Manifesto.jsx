import { useEffect, useRef } from "react"

export default function Manifesto(){

  const sectionRef = useRef(null)

  useEffect(()=>{

    const observer = new IntersectionObserver((entries)=>{

      if(entries[0].isIntersecting){

        const text = document.querySelector(".manifesto-text")

        text.classList.add("typing")

      }

    },{threshold:0.4})

    observer.observe(sectionRef.current)

  },[])

  return(

    <section className="manifesto-section" ref={sectionRef}>

      <div className="manifesto">

        <p className="manifesto-text">

          <span className="green">O mundo não precisa de mais uma marca de roupas. O mundo é uma linha de montagem de ideias mornas, onde tudo é embalado, selado e entregue com um sorriso plástico sob medida. Nós preferimos o erro. O detalhe que incomoda. A elegância que não pede licença..</span><br/>

          <span className="red">Mád não é sobre a roupa; é sobre o cinismo de vesti-la. É alta costura para quem vive no asfalto bruto. É o luxo de não precisar provar nada para ninguém. Se você não entendeu a piada, o produto não é para você. Algodão pesado para ideias densas. Modelagem box para quem não cabe em caixas.</span><br/>

          <span className="yellow">Sátiras que duram mais que as tendências da semana. Produto nacional. Espírito universal. Cada peça é um item de inventário em um sistema que nunca para de rodar..</span><br/>

          

          

        </p>

      </div>

    </section>

  )

}