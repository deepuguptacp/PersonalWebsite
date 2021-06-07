import React from "react";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import "../pages.css";

const About = () => {
  return (
    <div className="component-section">
      <div className="content-heading">AWARDS</div>
      <div className="card-content-row">
        <div className="card-content">
          <Card
            style={{
              margin: 100,
              marginLeft: 100,
              marginTop: 100,
              borderWidth: 2,
            }}
          >
            <CardBody className="card-body">
              <CardTitle>
                <h2>
                  Mission-driven full stack developer with a passion for
                  thoughtful UI design, collaboration, and teaching.
                </h2>
              </CardTitle>
              <br />
              <p className="discription">
                {/* Fetch the ABOUT through API */}
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="card-content">
          <Card
            style={{
              margin: 100,
              marginLeft: 100,
              marginTop: 100,
              borderWidth: 2,
            }}
          >
            <CardBody className="card-body">
              <CardTitle>
                <h2>
                  Mission-driven full stack developer with a passion for
                  thoughtful UI design, collaboration, and teaching.
                </h2>
              </CardTitle>
              <br />
              <p className="discription">
                {/* Fetch the ABOUT through API */}
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
