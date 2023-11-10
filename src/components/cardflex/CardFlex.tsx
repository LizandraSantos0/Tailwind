function CardFlex() {

    return (
        <>
            <div className="flex justify-center">
                <div className="
                    flex 
                    flex-row 
                    items-center 
                    bg-slate-200 
                    mx-7 
                    my-7 
                    px-4 
                    py-5 
                    max-w-4xl 
                    rounded-2xl 
                    border 
                    shadow-md 
                    shadow-slate-400
                ">
                    <div>
                        <img className="max-w-xs" style={{marginTop: '90px'}} src="https://cogumelolouco.com/wp-content/uploads/2012/07/filhotes-de-golden-retriever.jpg" alt="Cachorro" />
                    </div>
                    <div className="px-4">
                        <h2 className="
                            text-center 
                            text-4xl 
                            py-4 
                            font-bold
                        ">Cachorro</h2>
                        <p className="
                            text-justify 
                            text-xl 
                            py-4
                        ">Os cachorros,são seres leais e carinhosos, compartilham uma conexão única com os seres humanos. Dotados de uma alegria contagiante, eles trazem felicidade aos lares com suas brincadeiras e devoção. Além de companheiros leais, muitos cães desempenham papéis vitais, como cães de terapia, proporcionando conforto emocional. Sua presença constante enriquece nossas vidas, tornando cada dia mais especial.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFlex