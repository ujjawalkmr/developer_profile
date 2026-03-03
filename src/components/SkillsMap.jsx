import React from "react";
import "../styles/SkillsMap.css";

const SkillsMap = () => {
  return (
    <section className="skills-map">
      <h3 className="map-subtitle">Skills Ecology</h3>
      <h2 className="map-title">The Distributed Architecture Map</h2>

      <div className="map-container">

        {/* CENTER */}
        <div className="center-node">
          <span>ME</span>
        </div>

        {/* LEFT SIDE */}
        <div className="left-nodes">

          <div className="node node-1">
            <div className="circle">⚛</div>
            <h4>Frontend</h4>
            <p>React.js</p>
            <p>Flutter</p>
          </div>

          <div className="node node-2">
            <div className="circle">☕</div>
            <h4>Backend</h4>
            <p>Java</p>
            <p>Node.js</p>
          </div>

          <div className="node node-3">
            <div className="circle">🗄</div>
            <h4>Database</h4>
            <p>MongoDB</p>
            <p>PostgreSQL</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right-nodes">

          <div className="node node-4">
            <div className="circle">☁</div>
            <h4>Cloud</h4>
            <p>AWS S3</p>
            <p>Google Cloud</p>
          </div>

          <div className="node node-5">
            <div className="circle">🔒</div>
            <h4>Security</h4>
            <p>Authentication</p>
            <p>JWT</p>
          </div>

          <div className="node node-6">
            <div className="circle">⚙</div>
            <h4>Tools</h4>
            <p>Git</p>
            <p>Docker</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsMap;