function CardGrid() {
 

    return (
      <>
      <div className="grid justify-center">
                <div className="
                    grid
                    grid-cols-[1fr_2fr] 
                    gap-5 
                    bg-slate-200 
                    mx-7 
                    my-7 
                    px-5 
                    py-5 
                    max-w-4xl 
                    rounded-2xl 
                    border 
                    shadow-md 
                    shadow-slate-400
                ">
                    <div>
                        <img className="max-w-xs" style={{marginTop: '90px'}} src="https://cogumelolouco.com/wp-content/uploads/2012/07/filhotinhos-de-golden-retriever.jpg" alt="Filhotes de cachorro" />
                    </div>
                    <div>
                        <h2 className="
                            text-center 
                            text-4xl 
                            py-4 
                            font-bold
                        ">Caracteristicas</h2>
                        <p className="
                            text-justify 
                            text-xl 
                            py-4
                        ">Os cachorros,são seres incrivelmente versáteis, exibem uma ampla gama de características notáveis. Desde a lealdade incondicional até a inteligência aguçada, esses animais demonstram empatia e compreensão. Com uma diversidade de raças, apresentam tamanhos, cores e temperamentos diversos, adaptando-se aos diversos estilos de vida. Sua natureza afetuosa e habilidades únicas fazem dos cachorros companheiros inseparáveis e membros valiosos das famílias ao redor do mundo.</p>
                    </div>
                </div>
            </div>
      </>
    )
  }
  
  export default CardGrid