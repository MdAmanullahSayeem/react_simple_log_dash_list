import React from "react";

class About extends React.Component {
  render() {
    const mystyle = {
      backgroundColor: "AliceBlue",
      fontFamily: "Arial",
    };
    const mystyle2 = {
      backgroundColor: "AquaMarine",
      fontFamily: "Arial",
      textAlign: "center",
    };
    return (
      <div>
        <div style={mystyle}>
          <div style={mystyle2}>
            <p>
              <h2 style={{ color: "lightsalmon" }}>Sweet iTech</h2>
              <h6>Refine Design & Development</h6>
            </p>
            <p style={{ color: "darkCyan", fontSize: "20px" }}>
              With the initial goal to provide state of the art customized
              enterprise solutions, Sweet iTech initiated its journey in 2017.
              Gradually, Sweet iTech started operating with multiple IT wings,
              including Hardware and Digital Marketing. Sweet iTech's of highly
              capable people are working day and night to serve clients across
              the world. Web, desktop & mobile supported ERP Systems. Hardware
              integrated IT systems. Digital marketing, media planning & media
              buying.
            </p>
          </div>
          <div>
            <ul style={{ fontSize: "24px" }}>
              <li>Web, desktop & mobile supported ERP Systems.</li>
              <li>Hardware integrated IT systems.</li>
              <li> Digital marketing, media planning & media buying.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
