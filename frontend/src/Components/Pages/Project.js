import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "../../config/keys";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import "../pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faMicrophone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = keys.backendURI + "/api/projects";
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
      // console.log(data.data[1]);
    };
    fetchData();
  }, []);

  if (!data.data) return null; // // empty render until we get data
  // if we get data we do have education details
  return (
    <div className="component-section">
      <div className="content-heading">PROJECT</div>
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
              <div className="card-title">
                <div className="card-title-content">
                  <h2>
                    <FontAwesomeIcon icon={faUser} />
                  </h2>
                </div>
                <div className="card-title-content">
                  <h2>{data.data[0].title}</h2>
                </div>
              </div>
              <hr />
            </CardTitle>
            <div className="card-title-content">
              <h2>
                To view the project click{" "}
                <a href="https://bit.ly/2XKICSw">here</a>
                {/* {data.data[0].websiteLink} */}
              </h2>
            </div>
            <div className="card-title-content">
              <h2>
                To view the source code of the project click{" "}
                <a href="https://github.com/deepuguptacp/deepuguptacp.github.io">
                  {/* {data.data[0].githubLink} */}
                  source code
                </a>
              </h2>
            </div>
            <div className="card-title-content">
              <h2>
                <p>
                  The project was started on {data.data[0].startingdate} and
                  came to an end on {data.data[0].endingdate}.{" "}
                  {data.data[0].description}{" "}
                </p>
              </h2>
            </div>
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
              <div className="card-title">
                <div className="card-title-content">
                  <h2>
                    <FontAwesomeIcon icon={faMicrophone} />
                  </h2>
                </div>
                <div className="card-title-content">
                  <h2>{data.data[1].title}</h2>
                </div>
              </div>
              <hr />
            </CardTitle>
            {/* <div className="card-title-content">
              <h2>
                To view the project click{" "}
                <a href="https://bit.ly/2XKICSw">here</a>
                {/* {data.data[0].websiteLink}
              </h2>
            </div>
            <div className="card-title-content">
              <h2>
                To view the source code of the project click{" "}
                <a href="https://github.com/deepuguptacp/deepuguptacp.github.io">
                  {/* {data.data[0].githubLink} 
                  source code
                </a>
              </h2>
            </div>*/}
            <div className="card-title-content">
              <h2>
                <p>
                  The project was started on {data.data[1].startingdate} and
                  came to an end on {data.data[1].endingdate}. <br />
                  {data.data[1].description}{" "}
                </p>
              </h2>
            </div>
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
              <div className="card-title">
                <div className="card-title-content">
                  <h2>
                    <FontAwesomeIcon icon={faImage} />
                  </h2>
                </div>
                <div className="card-title-content">
                  <h2>{data.data[2].title}</h2>
                </div>
              </div>
              <hr />
            </CardTitle>
            {/* <div className="card-title-content">
              <h2>
                To view the project click{" "}
                <a href="https://bit.ly/2XKICSw">here</a>
                {/* {data.data[0].websiteLink}
              </h2>
            </div>
            <div className="card-title-content">
              <h2>
                To view the source code of the project click{" "}
                <a href="https://github.com/deepuguptacp/deepuguptacp.github.io">
                  {/* {data.data[0].githubLink} 
                  source code
                </a>
              </h2>
            </div>*/}
            <div className="card-title-content">
              <h2>
                <p>
                  The project was started on {data.data[2].startingdate} and
                  came to an end on {data.data[2].endingdate}. <br />
                  {data.data[2].description}{" "}
                </p>
              </h2>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Project;
