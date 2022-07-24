import { useEffect, useState } from "react";
import Scrollbar from 'smooth-scrollbar'; // https://idiotwu.github.io/smooth-scrollbar/
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Component Imports
import Landing from "./pages/Landing";
import ScrollingPage from "./pages/ScrollingPage";
import Metaverse from "./pages/Metaverse";
import TextBanner from "./components/TextBanner";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  gsap.registerPlugin(ScrollTrigger)
 
  const moveMouse = (e) => {
    let shownMouseCirle = document.querySelector('#shownMouseCircle')
    let shownRedDot = document.querySelector('#shownRedDot')

    const moveCricle = (e) =>{
      shownMouseCirle.style.left = e.clientX  -24+'px'
      shownMouseCirle.style.top = e.clientY -24+'px'
    } 

    const moveDot = (e) =>{
      shownRedDot.style.left = e.clientX  -2.7+'px'
      shownRedDot.style.top = e.clientY -2.7+'px'
    } 

    setTimeout(moveCricle, 50, e)
    setTimeout(moveDot, 10, e)
  }

  const scrollPageTriggers = () => {
    // Scroll Page Triggers
    gsap.fromTo('#landing', {}, { 
          opacity: 0,
          duration: 1,
          ease: "power3",
          scrollTrigger: {
              trigger: '#scrollTriggerForTransition',		
              scroller: document.querySelector('#main-scrollbar'), // neccessary setting for smooth-scrollbar on body
              pinType: 'transform', // neccessary setting for smooth-scrollbar on body
              start: "top top",
              toggleActions: "play none reverse none",
              // markers: true,
          },
      })

      // Box going to bottom right
      gsap.fromTo('#transitionBackground', {}, { 
              x: '110vw', 
              y: '110vh', 
              duration: 1,
              ease: "power3",
              scrollTrigger: {
                  trigger: '#scrollTriggerForTransition',		
                  scroller: document.querySelector('#main-scrollbar'), // neccessary setting for smooth-scrollbar on body
                  pinType: 'transform', // neccessary setting for smooth-scrollbar on body
                  start: "top top",
                  end: "top top",
                  toggleActions: "play none reverse none",
                  // markers: true,
              },
          })
            
      // Change background when leaving scroll horizontal section
      gsap.fromTo('#horizontalSection, #scrollTextection', {}, { 
          background: '#1A1A1A',
          ease: "power3",
          scrollTrigger: {
              trigger: '#metaverseSection',		
              scroller: document.querySelector('#main-scrollbar'), // neccessary setting for smooth-scrollbar on body
              pinType: 'transform', // neccessary setting for smooth-scrollbar on body
              start: "-1200 top",
              end: "top top",
              scrub: true,
              toggleActions: "play none reverse none",        
              // markers: true,
          }, 
      })
  }
  
  // Pins metaverse
  const metaversePageTriggers = () => {
      if (window.innerWidth >= 1024) {
        gsap.fromTo('#metaText', {}, { 
          ease: "none",
          scrollTrigger: {
            trigger: '#metaverseSection',		
            scroller: document.querySelector('#main-scrollbar'), // neccessary setting for smooth-scrollbar on body
            pinType: 'transform', // neccessary setting for smooth-scrollbar on body
            start: "top top",
            scrub: true,
            pin: true,
            // markers: true,
          },
        });
      }
  }


  const handleScrollJack = () => {
    // Set up Scrollbar for smooth scroll
    let bodyScrollBar = Scrollbar.init(document.querySelector('#main-scrollbar'), { damping: 0.06 });
    bodyScrollBar.setPosition(0, 0);
    bodyScrollBar.track.xAxis.element.remove();

    // Hides scrollbar 
    Scrollbar.detachStyle()

    // scrollerProxy is needed to handle Scroll Jacking
    ScrollTrigger.scrollerProxy(document.querySelector('#main-scrollbar'), {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    const horizontalSections = gsap.utils.toArray('section.horizontal')

    horizontalSections.forEach(function (sec, i) {	
  
      var thisPinWrap = sec.querySelector('.pin-wrap');
      var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
      
      var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 
    
      gsap.fromTo(thisAnimWrap, { 
        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
      }, { 
        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
        ease: "none",
        scrollTrigger: {
          trigger: sec,		
          scroller: document.querySelector('#main-scrollbar'), // neccessary setting for smooth-scrollbar on body
          pinType: 'transform', // neccessary setting for smooth-scrollbar on body
          start: "top top",
          pin: thisPinWrap,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          scrub: true,
          // markers: true,
        }
      });

      scrollPageTriggers()
      metaversePageTriggers()

      // This part is only necessary if you're using ScrollTrigger's markers:
      if (document.querySelector('.gsap-marker-scroller-start')) {		  
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	
        bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
      }
    });	
  
  }

  useEffect(() => {
    handleScrollJack()
  })

  return (
    <>
      {/* Outer Divs are needed to deal with Scroll Hyjacking letting mouse have animaitons */}
      <div id="shownMouseCircle" className="hidden bottom-[-10rem] md:block fixed z-40 border-2 border-[#DAE4DB] rounded-[50%] h-[3rem] w-[3rem] pointer-events-none"></div>
      <div id="shownRedDot" className="hidden bottom-[-10rem] md:block fixed z-40 rounded-[50%] h-[.45rem] w-[.45rem] bg-red-900  pointer-events-none"></div>

      <div id="main-scrollbar" className="App relative" onMouseMove={moveMouse} > 
        <Landing />
        <ScrollingPage />
        <Metaverse />
        <TextBanner />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
