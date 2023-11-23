const ReviewItem = ({ reviewInfo }) => {
    const { nombre, rating, text } = reviewInfo;

    const renderStars = () => {
        const ratingValue = parseFloat(rating);
        const numberOfStars = Math.floor(ratingValue);

        const starIcons = Array.from({ length: numberOfStars }, (_, index) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellowDark">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ));

        return (
            <section className="flex items-center -ml-2 justify-between w-5/6 lg:w-3/4" id="tableRow-rating">
                {starIcons}
            </section>
        )
    }

    return (
        <div className={`flex flex-col items-center w-1/4 mb-4 animate-fade-down animate-delay-[400ms] animate-ease-out`}>
            <article className="p-4 md:px-8 md:py-6 w-full lg:w-3/4 z-10 bg-white rounded-lg shadow-md lg:hover:scale-105" id="tableRow">
                <section className="flex items-center justify-between" id="tableRow-main">
                    <h2 className="mr-4 font-paragraph font-semibold text-black text-xs md:text-lg lg:text-xl" id="tableRow-name"> {nombre} </h2>

                    <section className="flex items-center justify-between w-2/5 md:w-1/3 lg:pr-3">
                        {renderStars()}
                    </section>
                </section>

                <h2 className="mt-4 font-paragraph font-medium text-xs md:text-sm lg:text-base text-black" id="details-direction"> {text} </h2>
            </article>
        </div>
    );
}

export default ReviewItem;