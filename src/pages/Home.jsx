import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));
const Skills = lazy(() => import("../components/Skills"));
const About=lazy(()=>import("../components/About"));
const SkillsMap=lazy(()=>import("../components/SkillsMap"));


const Home = () => {
  return (
    <>
      <Suspense fallback={<div className="loader">Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Hero...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="loader">Loading Hero...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Skills...</div>}>
        <Skills />
      </Suspense>
    
    </>
  );
};

export default Home;