import { Suspense, lazy } from "react";
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


const Home = () => {
  //const isMobile = useMediaQuery({ maxWidth: 768 });
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <Suspense fallback={<div className="loader">Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Hero...</div>}>
        {isMobile ? <Hero /> : <HeroMobile />}
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