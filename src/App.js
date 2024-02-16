import './App.css';
import { useEffect, useState } from 'react';
import About from './components/About';
import Audit from './components/Audit';
import Faq from './components/Faq';
import Footer from './components/Footer';
import HeaderSec from './components/HeaderSec';
import OurSocials from './components/OurSocials';
import Roadmap from './components/Roadmap';
import SmartContract from './components/SmartContract';
import Tokenomics from './components/Tokenomics';
import { BackToTop } from './components/Icon'
import Aos from 'aos';
import "aos/dist/aos.css";
import Preloader from './components/Preloader';

function App() {
  // ========================back-to-top=======================
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // =======================aos============================
  useEffect(() => {
    Aos.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  }, []);
  // =======================preloader======================
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <HeaderSec />
            <About />
            <SmartContract />
            <Tokenomics />
            <Audit />
            <Roadmap />
            <Faq />
            <OurSocials />
            <Footer />
            <div>
              <button className={`${backToTop ? "fixed sm:right-[1%] right-2 bottom-[2%] z-30 !cursor-pointer updown_animation shadow-[0px_5px_10px_0px_#FFF624] w-[40px] h-[40px] border-[#FFF624] border-2 flex justify-center items-center bg-[#000000] rounded-[50%]" : "d-none"}`} onClick={() => top()}><BackToTop /></button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
