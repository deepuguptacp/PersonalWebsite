import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "../../config/keys";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import "../pages.css";
import Cpp from "../images/cpp.png";
import Html from "../images/html.png";
import Mysql from "../images/mysql.png";
import DataStructure from "../images/ml.png";
import Algo from "../images/algorithm.png";
import Reactimg from "../images/atom.png";
import Cimage from "../images/c.png";
import Css from "../images/css.png";
import Ml from "../images/machine-learning.png";
import MsOffice from "../images/microsoft.png";
import Nodejs from "../images/nodejs.png";
import Reduximg from "../images/redux.png";
import Mongo from "../images/mongo.png";

const Skill = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = keys.backendURI + "/api/skills";
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
      // console.log(data.data[1]);
    };
    fetchData();
  }, []);
  if (!data.data) return null;
  // // empty render until we get data
  // if we get data we do have education details
  return (
    <div className="component-section">
      <div className="content-heading">SKILLS</div>
      <div className="card-content">
        <Card
          style={{
            margin: 100,
            marginLeft: 100,
            marginTop: 100,
            borderWidth: 2,
          }}
        >
          {/* Skills and endorsement */}
          <CardBody className="card-body">
            <CardTitle>
              <h2>Knowledge</h2>
            </CardTitle>
            <br />
            <div className="skills">
              <div className="column-align">
                <div className="skill-image">
                  <img className="skill-image" src={Cpp} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[0].name}</h3>
                </div>
              </div>
              <div className="column-align">
                <div className="skill-image">
                  <img className="skill-image" src={Html} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[1].name}</h3>
                </div>
              </div>
              <div className="column-align">
                <div className="skill-image">
                  <img className="skill-image" src={Mysql} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[2].name}</h3>
                </div>
              </div>
              <div className="column-align">
                <div className="skill-image">
                  <img className="skill-image" src={Mongo} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[12].name}</h3>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Industry Knowledge */}
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
              <h2>Industry Knowledge</h2>
            </CardTitle>
            <br />
            <div className="skills">
              <div className="column-align1">
                <div className="skill-image">
                  <img
                    className="skill-image"
                    src={DataStructure}
                    alt="Loding..."
                  />
                </div>
                <div>
                  <h3>{data.data[3].name}</h3>
                </div>
              </div>
              <div className="column-align1">
                <div className="skill-image">
                  <img className="skill-image" src={Algo} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[4].name}</h3>
                </div>
              </div>
              <div className="column-align1">
                <div className="skill-image">
                  <img className="skill-image" src={Ml} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[5].name}</h3>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      {/* Tools and Technologies */}
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
              <h2>Tools And Technologies</h2>
            </CardTitle>
            <br />
            <div className="skills">
              <div className="column-align1">
                <div className="skill-image">
                  <img className="skill-image" src={Cimage} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[6].name}</h3>
                </div>
              </div>
              <div className="column-align1">
                <div className="skill-image">
                  <img className="skill-image" src={MsOffice} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[7].name}</h3>
                </div>
              </div>
              <div className="column-align1">
                <div className="skill-image">
                  <img className="skill-image" src={Css} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[8].name}</h3>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="skills">
              <div className="column-align1">
                <div className="skill-image">
                  <img className="skill-image" src={Reactimg} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[9].name}</h3>
                </div>
              </div>
              <div className="column-align1">
                <div className="skill-image">
                  <img className="skill-image" src={Reduximg} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[10].name}</h3>
                </div>
              </div>
              <div className="column-align1">
                <div className="skill-image">
                  <img className="skill-image" src={Nodejs} alt="Loding..." />
                </div>
                <div>
                  <h3>{data.data[11].name}</h3>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Skill;
