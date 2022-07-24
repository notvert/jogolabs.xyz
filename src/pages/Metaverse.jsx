
import ScrollingText from "../components/ScrollingText"
import PenguinHorse from "../images/penguin-horse.png"
import Metaverse2 from "../images/metaverse2.gif"

const Metaverse = () => {
    return (
        <section id="metaverseSection" className="">
            <div id="scrollTextection" className="bg-[#C4C4C4] h-[5vh] overflow-hidden">
                <ScrollingText />
            </div>
            
            <div className="flex pl-[1rem] md:pl-[2rem] items-center relative z-30 h-[10rem] md:h-[25vh] border-t-2 border-b-2 justify-between">
                <div className="relative md:top-[-1.5rem]">
                    <p className="select-none md:w-[17rem] standardFont font-medium md:text-[1.5rem]">Exploring the convergence of...</p>
                </div>
                    
                <div id="metaText" className="select-none metaText  md:w-auto text-[6vw] sm:text-[5vh] lg2:text-[18vh]">
                    <div className="relative right-[1rem] md: word metaverse md:mr-[.5rem]">
                        <span>M</span>
                        <span>E</span>
                        <span>T</span>
                        <span>A</span>
                        <span>V</span>
                        <span>E</span>
                        <span>R</span>
                        <span>S</span>
                        <span>E</span>
                    </div>
                    <div className="word standardFont web3 mr-[1.2rem]">
                        <span>W</span>
                        <span>E</span>
                        <span>B</span>
                        <span>3</span>
                    </div>
                    <div className="word standardFont gaming mr-[1.2rem]">
                        <span>G</span>
                        <span>A</span>
                        <span>M</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                    </div>
                </div>
            </div>
            <div className="flex h-[70vh] border-b-2">
                <div className="hidden lg:flex border-r-2 border-b-2 w-[35vw] h-[70vh] ">
                    <img id="image" className="w-[100%] object-contain relative right-[5rem] " src={Metaverse2} alt="Metaverse Symbol" />       
                </div>
                <div className="flex flex-col justify-center items-center border-b-2 h-[70vh] lg:w-[65vw]">
                    <div className="flex w-full justify-between h-[80%]">
                        <div className="w-full flex justify-center">
                            <img className="imageClass w-[20rem] sm:w-[25rem] relative right-[2rem] sm:right-[0remm]" src={PenguinHorse} alt="Jogo the penguin on a horse with an eye patch" />

                        </div>
                        <div className="border-l-2 w-[3rem] overflow-hidden">
                            {/* <p id='metaVerticleText' className="select-none right-[-14.9rem] ">web 3 x metaverse x gaming = power</p> */}
                            <p id='metaVerticleTextTest' className="">web 3 x metaverse x gaming = power</p>

                        </div>
                    </div>
                    
                    <div className="w-[100vw] standardFont text-[1.5rem] border-t-2 h-[20%] lg:w-[65vw] flex justify-center items-center">
                        <p className="text-center font-medium pl-[1rem] pr-[1rem]">Art drives commerce, not the other way around</p>
                    </div>
                    {/* <p id='metaVerticleText' className="select-none right-[-14.9rem] ">web 3 x metaverse x gaming = power</p> */}
                </div>

            </div>
                <div className="lg:hidden flex justify-center mt-[2rem]">
                    <img className="" src={Metaverse2} alt="Metaverse Symbol" />       
                </div>
        </section>
  )
}

export default Metaverse
