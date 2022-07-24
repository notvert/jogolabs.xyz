const ScrollingPage = () => {

    return (
        <section id="horizontalSection" className="scrollPage relative z-0 horizontal hidden lg:block h-[130rem] text-black sm:bg-[#C4C4C4]">
            <div className="pin-wrap" id="pinThis-0">
                <div id="transitionBackground" className="absolute bg-[#1A1A1A] h-[120vh] w-[120vw] z-20 left-[-6rem] top-[-10rem]"></div>
                <div className="animation-wrap to-right pt-[8rem]" id="animateThis-0">

                    {/* extra items create space to allow the slide in horizontal scroll. Much more complicated due to combining smooth scroller which causes Sroll Jacking */}
                    <div id="transitionToMeta" className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item ">
                        <p className="titleFont font-extrabold  w-[170rem] rainbowText text-[50px] ">
                            ART DRIVES COMMERCE, NOT THE OTHER WAY AROUND
                        </p>
                    </div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>          
                </div>
            </div>
        </section>
    )
}

export default ScrollingPage