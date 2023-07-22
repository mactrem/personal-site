import React from "react";
import EmblaCarousel from "embla-carousel";
import "./carousel.css";

const OPTIONS = {};

const Carousel = () => {
    React.useEffect(() => {
        const emblaNode = document.querySelector('.embla');
        const viewportNode = emblaNode.querySelector('.embla__viewport');
        const prevBtn = emblaNode.querySelector('.embla__button--prev');
        const nextBtn = emblaNode.querySelector('.embla__button--next');
        const dotsNode = document.querySelector('.embla__dots');
        const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
        const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
            emblaApi,
            prevBtn,
            nextBtn
        );
        const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
            emblaApi,
            dotsNode
        );
        emblaApi
            .on('destroy', removePrevNextBtnsClickHandlers)
            .on('destroy', removeDotBtnsAndClickHandlers);
    }, []);

    return <section className="sandbox__carousel">
        <div className="embla">
            <div className="embla__viewport">
                <div className="embla__container">
                    <div className="embla__slide">
                        <div className="embla__slide__number"><span>1</span></div>
                        <img
                            className="embla__slide__img"
                            src="./ski1.jpg"
                            alt="Ski"
                        />
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide__number"><span>2</span></div>
                        <img
                            className="embla__slide__img"
                            src="./ski2.jpg"
                            alt="Ski"
                        />
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide__number"><span>3</span></div>
                        <img
                            className="embla__slide__img"
                            src="./ski3.jpg"
                            alt="Ski"
                        />
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide__number"><span>4</span></div>
                        <iframe width="532" height="351" src="https://www.youtube.com/embed/Wrr_UQPNwrY?controls=0"
                                title="Skitraining" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="embla__buttons">
                <button
                    className="embla__button embla__button--prev"
                    type="button"
                    disabled=""
                >
                    <svg className="embla__button__svg" viewBox="0 0 532 532">
                        <path
                            fill="currentColor"
                            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                        ></path>
                    </svg>
                </button
                >
                <button
                    className="embla__button embla__button--next"
                    type="button"
                    disabled=""
                >
                    <svg className="embla__button__svg" viewBox="0 0 532 532">
                        <path
                            fill="currentColor"
                            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
        <div className="embla__dots"></div>
    </section>
}

const addTogglePrevNextBtnsActive = (emblaApi, prevBtn, nextBtn) => {
    const togglePrevNextBtnsState = () => {
        if (emblaApi.canScrollPrev()) prevBtn.removeAttribute('disabled')
        else prevBtn.setAttribute('disabled', 'disabled')

        if (emblaApi.canScrollNext()) nextBtn.removeAttribute('disabled')
        else nextBtn.setAttribute('disabled', 'disabled')
    }

    emblaApi
        .on('select', togglePrevNextBtnsState)
        .on('init', togglePrevNextBtnsState)
        .on('reInit', togglePrevNextBtnsState)

    return () => {
        prevBtn.removeAttribute('disabled')
        nextBtn.removeAttribute('disabled')
    }
}

const addPrevNextBtnsClickHandlers = (emblaApi, prevBtn, nextBtn) => {
    const scrollPrev = () => emblaApi.scrollPrev()
    const scrollNext = () => emblaApi.scrollNext()
    prevBtn.addEventListener('click', scrollPrev, false)
    nextBtn.addEventListener('click', scrollNext, false)

    const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(
        emblaApi,
        prevBtn,
        nextBtn
    )

    return () => {
        removeTogglePrevNextBtnsActive()
        prevBtn.removeEventListener('click', scrollPrev, false)
        nextBtn.removeEventListener('click', scrollNext, false)
    }
}

const addDotBtnsAndClickHandlers = (emblaApi, dotsNode) => {
    let dotNodes = []

    const addDotBtnsWithClickHandlers = () => {
        dotsNode.innerHTML = emblaApi
            .scrollSnapList()
            .map(() => '<button class="embla__dot" type="button"></button>')
            .join('')

        dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'))
        dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener('click', () => emblaApi.scrollTo(index), false)
        })
    }

    const toggleDotBtnsActive = () => {
        const previous = emblaApi.previousScrollSnap()
        const selected = emblaApi.selectedScrollSnap()
        dotNodes[previous]?.classList.remove('embla__dot--selected')
        dotNodes[selected]?.classList.add('embla__dot--selected')
    }

    emblaApi
        .on('init', addDotBtnsWithClickHandlers)
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('init', toggleDotBtnsActive)
        .on('reInit', toggleDotBtnsActive)
        .on('select', toggleDotBtnsActive)

    return () => {
        dotsNode.innerHTML = ''
    }
}

export default Carousel;

