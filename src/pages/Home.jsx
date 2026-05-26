import { useState, useEffect, Suspense, lazy } from "react";

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
const AboutMobile = lazy(() => import("../components/AboutMobile"));
const SkillMobile = lazy(() => import("../components/SkillMobile"));
const ServiceMobile = lazy(() => import("../components/ServiceMobile"));
const ProjectMobile = lazy(() => import("../components/ProjectMobile"));
const EducationMobile = lazy(() => import("../components/EducationMobile"));
const ExperienceMobile = lazy(() => import("../components/ExperienceMobile"));
const ContactMobile = lazy(() => import("../components/ContactMobile"));

/* ✅ SAFE MOBILE HOOK */
function useIsMobile(breakpoint = 1000) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkSize(); // initial check
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, [breakpoint]);

  return isMobile;
}

const Home = () => {
  const isMobile = useIsMobile();

  /* ✅ HARD FIX: prevent horizontal scroll globally for this page */
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";
    html.style.width = "100%";
    body.style.width = "100%";

    return () => {
      html.style.overflowX = "";
      body.style.overflowX = "";
      html.style.width = "";
      body.style.width = "";
    };
  }, []);

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <Suspense fallback={<div className="loader">Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Hero...</div>}>
        {isMobile ? <HeroMobile /> : <Hero />}
      </Suspense>

      <Suspense fallback={<div className="loader">Loading About...</div>}>
        {isMobile ? <AboutMobile /> : <About />}

        {/* <About /> */}
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Skills...</div>}>
        {isMobile ? <SkillMobile /> : <Skills />}

        {/* <Skills /> */}
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Service...</div>}>
        {isMobile ? <ServiceMobile /> : <Service />} {/* <Service /> */}
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Project...</div>}>
        {isMobile ? <ProjectMobile /> : <Project />}
        {/* <Project /> */}
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Education...</div>}>
        {isMobile ? <EducationMobile /> : <Education />}
        {/* <Education /> */}
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Experience...</div>}>
        {isMobile ? <ExperienceMobile /> : <Experience />}
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Contact...</div>}>
        {isMobile ? <ContactMobile /> : <Contact />}
      </Suspense>
    </div>
  );
};

export default Home;