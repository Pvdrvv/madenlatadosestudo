export default function PlateSection(){

  return(

    <section className="plate-section">

    
      <h2 className="plate-text">
        solta a info pra receber vazamentos e descontos.
      </h2>

      <div className="plate-wrapper">

        <img
          src="/images/Placa.png"
          className="plate-image"
        />

       
        <div className="plate-form">

          <input
            type="email"
            placeholder="solta a info"
          />

          <button>
            enviar
          </button>

        </div>

      </div>

    </section>

  )

}