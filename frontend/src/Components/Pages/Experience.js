import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "../../config/keys";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import "../pages.css";

const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = keys.backendURI + "/api/experience";
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data.data[0]);
    };
    fetchData();
  }, []);
  // console.log(data);
  return (
    <div className="component-section">
      <div className="content-heading">EXPERIENCE</div>
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
                    || Worked as {data.designation} at {data.organization} ||
                  </h2>
                </div>
              </div>
              <hr />
            </CardTitle>
            <br />

            <h2>
              {data.description} <br /> The {data.designation}ship was started
              on {data.startingdate} and will be ending on {data.endingdate}.
            </h2>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default About;
