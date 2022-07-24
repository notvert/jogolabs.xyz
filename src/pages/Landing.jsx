import { useEffect } from "react";
import gsap from "gsap";

import Tumblr from '../images/tumblr2.gif'
import BackgroundImage from '../images/banner-bg.png'

const Landing = () => {
    const desktopAnimation = () => {
        let dtTL = gsap.timeline({})
        dtTL.to("#dtTumblr", {delay: 1, x: '-10rem', duration: .5, scale: .8})
        dtTL.to("#dtTumblr", {duration: .5, x: 430, top: '5rem', height: '50rem', rotate: '-20deg', scale: 1})

        let textTL = gsap.timeline({})
        textTL.to("#landingText", {delay: 1, x: '10rem', opacity: 1})
        textTL.to("#landingText", {left: 0, opacity: 1, x: 0, color: '#DAE4DB', ease: "none"})

        gsap.to('#desktopBackground', {delay: 1.5, opacity: 1})
    }

    const mobileToDesktopReset = () => {
        gsap.to("#landingText", {delay: 2, color: '#DAE4DB', left: 0 })
        gsap.to("#desktopBackground", {delay: 2, opacity: 1 })

    }

    const mobileAnimation = () => {
        let mTL = gsap.timeline({})
        mTL.to("#mTumblr", {duration: 3, y: 310, height: '20rem'})
        mTL.to("#landingText, #desktopBackground", {opacity: 1})
    }

    useEffect(() => {
        if (window.innerWidth >= 1024) desktopAnimation()
        else mobileToDesktopReset()
        mobileAnimation()
    })

    return (
        <section id="landing" className="blank relative z-10 bg-[#1A1A1A">
            <img id='desktopBackground' src={BackgroundImage} className="landingBG bg-center bg-no-repeat opacity-0 lg:block absolute top-0 h-[62rem] w-screen" />
            <div className="flex flex-col md:justify-between md:pr-[8rem] lg2:flex-row relative h-[62rem] pt-[5rem] md:pt-[10rem] lg:text-black overflow-hidden ">
                <div id="landingText" className="absolute md:right-[25rem] opacity-0 titleFont text-[4rem] pl-[1rem] md:pl-[5rem] sm:text-[100px] w-screen md:w-auto ">
                    <h1 className='leading-[3.5rem] font-extrabold sm:leading-[100px]'>JOGO</h1>
                    <h1 className='leading-[3.5rem] font-extrabold sm:leading-[100px]'>LABS</h1>
                    <div id="textTrigger" className="standardFont font-[400] text-[22px] w-[90vw] pt-[1rem] md:w-[30rem] ">
                        <p className=''>Jogo Labs is building the intersection between the metaverse, web3, and gaming.</p>
                    </div>
                </div>
                {/* Mobile Tumblr Visual */}
                <div className='flex justify-center mt-[7rem]'>
                    <img id="mTumblr" className='absolute top-0 left-0 right-0 ml-[auto] mr-[auto] h-[5rem] sm:mt-[5rem] md:mt-[10rem] lg2:hidden ' src={Tumblr} alt="spinning polygon" />
                </div>
      
                {/* Desktop Tumblr Visual */}
                <div className='hidden md:flex justify-center'>
                    <img id="dtTumblr" className='absolute top-[15rem] left-0 ml-[auto] mr-[auto] hidden h-[30rem] right-0 lg2:block' src={Tumblr} alt="spinning polygon" />
                </div>
                <p id="scrollTriggerForTransition" className="absolute top-[90vh]"></p>
            </div>
        </section>
    )
}

export default Landing