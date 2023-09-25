import { useState } from "react"

const TableRow = () => {
    const [onDetails, setOnDetails] = useState(false)

    return (
        <article className="flex flex-col p-4 md:px-8 md:py-6 fixed w-full lg:w-3/4 z-10 bg-white rounded-lg shadow-md lg:hover:scale-105" id="tableRow">
            <section className="flex items-center justify-between" id="tableRow-main">
                <h2 className="mr-4 font-paragraph font-semibold text-black text-xs md:text-lg lg:text-xl" id="tableRow-name"> Nombre restaurante </h2>

                <section className="flex items-center justify-between w-2/5 md:w-1/3 lg:w-1/4">
                    <section className="flex items-center -ml-2 justify-between w-5/6 lg:w-3/4" id="tableRow-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellowDark">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellowDark">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellowDark">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellowDark">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellowDark">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                        <h2 className="ml-2 font-paragraph font-medium text-xs md:text-lg lg:text-xl text-black" id="rating-number">4.5/5</h2>
                    </section>

                    <button id="tableRow-button" className="text-black hover:scale-110" onClick={() => setOnDetails(!onDetails)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </section>
            </section>

            <section className={`flex justify-between mt-6 ${onDetails ? "" : "hidden"}`} id="tableRow-details">
                <img src="../../public/ImgRestaurante.jpg" alt="Foto del restaurante" className="h-48 w-2/5 md:w-1/3 object-cover rounded-lg" />
                <section className="w-1/2 md:w-3/5 lg:w-1/2 text-right" id="details-right">
                    <h2 className="font-paragraph font-medium text-xs md:text-sm lg:text-base text-black" id="details-description">
                        Disfruta del delicioso sabor de nuestras hamburguesas, perros calientes, ensaladas, wraps, papas a la francesa, malteadas, helados y mucho más ¡Entra ya!
                    </h2>

                    <h2 className="mt-4 font-paragraph font-medium text-xs md:text-sm lg:text-base text-black" id="details-direction"> 
                        <span className="font-semibold"> Dirección: </span> Cl 17 Sur # 19 - 04/10 
                    </h2>

                    <h2 className="mt-4 font-paragraph font-medium text-xs md:text-sm lg:text-base text-black" id="details-prices"> 
                        <span className="font-semibold"> Precios: </span> $30.000 - $60.000
                    </h2>
                    <h2 className="mt-4 font-paragraph font-medium text-xs md:text-sm lg:text-base text-black" id="details-prices"> 
                        <span className="font-semibold"> Contacto: </span> 6016543354
                    </h2>
                </section>
            </section>
        </article>
    )
}

export default TableRow