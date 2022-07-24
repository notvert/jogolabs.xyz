

import Processing from '../images/processing2.gif'
import TwitterLogo from '../images/twitterLogoWhite.png'
import AmazonLogo from '../images/amazon.png'

const Contact = () => {

    return (
        <section className='blank flex flex-col md:flex-row mt-[5rem] pl-[1rem] md:pl-[2rem]  pr-[2rem] text-[1.5rem] md:h-[45rem] overflow-hidden'>
            {/* ----Image only on Mobile----  */}
            <div className="flex justify-center">
                <img src={Processing} alt="Metaphoric Processor" className='md:hidden' />
            </div>
            <div className='standardFont md:leading-[4rem] md:w-[50vw] '>
                <h1 className="text-[1.5rem] font-medium select-none md:text-[50px] mb-[2rem]">Let's build something awesome together.</h1>
                <p className="select-none font-bold pb-[.5rem] md:pb-[0]">Contact us via</p>
                <button>
                    <a id="contactBTN" href={'https://twitter.com/notvert'} target="_blank" className='relative z-0 flex items-center border-[1px] border-[#DAE4DB] pl-[2rem] pr-[2rem] pt-[.5rem] pb-[.5rem] md:pt-[0rem] md:pb-[0rem] md:pl-[4rem] md:pr-[4rem] hover:invert hover:bg-black'>
                        <img id="twitterLogo" src={TwitterLogo} alt="twitter logo" className='h-[1.5rem] pr-[.25rem] '></img>
                        <p id="handle" className='font-normal pl-[.25rem]'>@notvert</p>
                    </a>
                </button>

            </div>
            {/* ----Image only on desktop----  */}
            <div className='relative lg2:top-[-5rem] mb-[1rem]'>
                <img src={Processing} alt="Metaphoric Processor" className='hidden  md:block md:relative md:w-[80vw]' />
            </div>
        </section>
  )
}

export default Contact