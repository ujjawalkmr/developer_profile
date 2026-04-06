import "../styles/HeroMobile.css";

const HeroMobile = () => {
    const herImage = "/assets/uk.jpeg";

    return (
        <section className="hero" id="home">
            <div className="main-container">
                <div className="hero-mobile-container">
                    {/* The Indigo Background Circle */}
                    <div className="bg-circle"></div>

                    {/* The Profile Image */}
                    <div className="image-container">
                        <img src={herImage} alt="developer" className="hero-img" />
                    </div>

                    {/* Left Box */}
                    <div className="info-box left-box">
                        <span>5+ Years</span>
                        <p>Experience</p>
                    </div>

                    {/* Right Box */}
                    <div className="info-box right-box">
                        <span>100+</span>
                        <p>Projects</p>
                    </div>


                </div>
                {/* text section */}
                <div className="text-section">
                    <p className="top-tag">
                        I AM <span>Full Stck Developer</span>
                    </p>
                    {/* <p>Senior Developer</p> */}
                    <h1 className="mobile-heading">
                        Building Scalable <span className="purple">Full Stack</span> <br />
                        Applications with Clean Architecture <br />
                        & High Performance <span className="purple underline">Solutions</span>
                    </h1>
                    <p className="sub-text">
                        I design and develop secure, scalable web applications using modern
                        technologies like React, Node.js, Java and MongoDB, Cloud— focused on performance,
                        maintainability, and real-world impact.
                    </p>
                </div>
                <div className="buttons">
                    <button
                        className="btn-primary"
                    //   onClick={() => setOpenContact(true)}
                    >
                        Get In Touch →
                    </button>
                    <button className="btn-outline">Download CV</button>
                </div>
            </div>

        </section>
    );
};

export default HeroMobile;