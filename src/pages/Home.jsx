import { useState, useEffect, Suspense, lazy } from "react";
//import { useMediaQuery } from "react-responsive"

const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));
const Skills = lazy(() => import("../components/Skills"));
const About = lazy(() => import("../components/About"));
const Service = lazy(() => import("../components/Service"));
const Project = lazy(() => import("../components/Project"));
const Education = lazy(() => import("../components/Education"));
const Experience = lazy(() => import("../components/Experience"));
const Contact = lazy(() => import("../components/Contact"));

const HeroMobile = lazy(() => import("../components/HeroMobile"));

function useIsMobile(breakpoint = 868) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
const Home = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Suspense fallback={<div className="loader">Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Hero...</div>}>
        {isMobile ? <HeroMobile /> : <Hero />}
        {/* <Hero /> */}
      </Suspense>
      <Suspense fallback={<div className="loader">Loading Hero...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Skills...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="loader">Loading Skills...</div>}>
        <Service />
      </Suspense>
      <Suspense fallback={<div className="loader">Loading Skills...</div>}>
        <Project />
      </Suspense>
      <Suspense fallback={<div className="loader">Loading Skills...</div>}>
        <Education />
      </Suspense>
      <Suspense fallback={<div className="loader">Loading Skills...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div className="loader">Loading Skills...</div>}>
        <Contact />
      </Suspense>

    </>
  );
};

export default Home;