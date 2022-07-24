import Blippi from '../images/blippi.jpg'
import Ryan from '../images/ryan.jpg'
import OpenSea from '../images/opensea.png'
import Fortnite from '../images/fortnite.jpg'
import Sandbox from '../images/sandbox.jpeg'
import Core from '../images/core.jpg'
import Flow from '../images/flow.png'
import InstantGame from '../images/networks.gif'
import Lightship from '../images/lightship.jpg'
import Axie from '../images/axie.png'
import Lego from '../images/lego.png'
import NewWorld from '../images/newworld.jpg'
import Ballerz from '../images/ballerz.PNG'

const ProjectsSlides = () => {

  const showImage = (id) => {
    document.querySelector(id).style.opacity = 1
  }

  const hideImage = (id) => {
    document.querySelector(id).style.opacity = 0
  }

    return (
        <div>
          <div onMouseEnter={() => showImage('#fortnite')} onMouseLeave={() => hideImage('#fortnite')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem]'> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem]  flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem] font-bold'>Fortnite Creative</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem] font-bold'>(in production)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='fortnite' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[20rem] md:block mt-[7rem]' src={Fortnite} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Executive producer, three Fortnite Creative maps. Fortune 100 partner.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>01</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#ballers')} onMouseLeave={() => hideImage('#ballers')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem]'> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw] '>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>Ballerz Game</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(concept phase)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='ballers' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[20rem] md:block mt-[7rem]' src={Ballerz} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Executive producer on a NFT based game.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>02</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#sandbox')} onMouseLeave={() => hideImage('#sandbox')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>Sandbox</h1>   
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(in production)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='sandbox' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[15rem] lg2:h-[20rem] md:block mt-[7rem]' src={Sandbox} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Executive producer, two Sandbox maps, Fortune 100 partner.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>03</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#core')} onMouseLeave={() => hideImage('#core')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>Core</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(pre-production)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='core' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[20rem] md:block mt-[7rem]' src={Core} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Executive producer, Core map, Fortune 100 partner.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>04</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#flow')} onMouseLeave={() => hideImage('#flow')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>Flow Game</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(pre-production)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='flow' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[20rem] md:block mt-[7rem]' src={Flow} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Executive producer for a portfolio of games built on the Flow blockchain.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>05</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#instantGame')} onMouseLeave={() => hideImage('#instantGame')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>Instant Game</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(in production)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='instantGame' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[20rem] md:block mt-[7rem]' src={InstantGame} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Product manager, instant game for a major TV network.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>06</p>
                </div>
              </div>
            </div>
          </div> 

          
          <div onMouseEnter={() => showImage('#lightShip')} onMouseLeave={() => hideImage('#lightShip')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>AR Game</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(pre-production)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='lightShip' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[15rem] lg2:h-[20rem] md:block mt-[7rem]' src={Lightship} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Executive producer, Lightship AR game, Fortune 100 partner.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>07</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#blippi')} onMouseLeave={() => hideImage('#blippi')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>Blippi's Treehouse</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(launched)</h1> 
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='blippi' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[20rem] md:block mt-[7rem]' src={Blippi} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Secured IP and developed the original series featuring Blippi.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>08</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#ryan')} onMouseLeave={() => hideImage('#ryan')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>Super Spy Ryan</h1> 
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(launched)</h1> 
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='ryan' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[20rem] md:block mt-[7rem]' src={Ryan} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Secured funding, IP rights, and led franchise launch (Amazon's first mobile game, animated special exclusive retail toys)</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>09</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#openSea')} onMouseLeave={() => hideImage('#openSea')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>10k PFP NFT Project</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(launched)</h1> 
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='openSea' className='hidden opacity-0 absolute pointer-events-none z-10 lg:h-[15rem] lg2:h-[20rem] md:block mt-[7rem]' src={OpenSea} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Built a proof of contract system for a 10k crypto game that allows the game to verify cross-chains NFTs. Used to validate NFT ownership on a different L1 chain to gain access to the game.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>10</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#axie')} onMouseLeave={() => hideImage('#axie')} className='border-t-[1px] border-[#DAE4DB]'>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>NFT Yield Dapp</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(launched)</h1> 
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='axie' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[15rem] lg2:h-[20rem] md:block mt-[7rem]' src={Axie} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Built the app and off-chain backend from scratch. Forked the open-source compound protocol to support off-chain appraisals and bridged ERC721 assets (50K+ lines of code changed)</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>11</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#lego')} onMouseLeave={() => hideImage('#lego')} className='border-t-[1px] border-[#DAE4DB] '>
            <div className='flex justify-between mt-[2rem] pb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>Lego® Monkie Kid™</h1>  
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(launched)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='lego' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[15rem] lg2:h-[20rem] md:block mt-[7rem]' src={Lego} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Secured Amazon's first LEGO original series and exclusive retail toys.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>12</p>
                </div>
              </div>
            </div>
          </div> 

          <div onMouseEnter={() => showImage('#newWorld')} onMouseLeave={() => hideImage('#newWorld')} className='border-t-[1px] border-b-[1px] border-[#DAE4DB]  '>
            <div className='flex justify-between mt-[2rem] mb-[2rem] '> 
              <div className='flex justify-between w-[100vw]'>
                <div className='text-[1rem] lg:text-[2rem] flex flex-col w-[40vw]'>
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>New World</h1> 
                  <h1 className='pl-[1rem] lg:pl-[2rem]'>(launched)</h1>  
                </div>

                <div className='flex standardFont w-[45vw]'>
                  <img id='newWorld' className='hidden opacity-0 absolute pointer-events-none z-10 h-[10rem] lg:h-[20rem] md:block mt-[7rem]' src={NewWorld} alt="Character infront of tower" />
                  <p className='text-[.7rem] font-normal lg:text-[1rem] max-w-[580px] md:pt-[1rem] pl-[.5rem] pr-[.5rem] md:pl-0'>Lead Creator program, web products (newworld.com, amazon detail pages, etc.) for the MMO.</p>
                </div>

                <div className='relative standardFont font-normal md:text-[30px] opacity-[50%] w-[10vw] flex items-end justify-end pr-[1rem] md:pr-[2rem]'> 
                  <p>13</p>
                </div>
              </div>
            </div>
          </div> 
        </div>

  )
}

export default ProjectsSlides