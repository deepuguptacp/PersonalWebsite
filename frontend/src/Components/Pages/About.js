import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import "../pages.css";
import keys from "../../config/keys";

const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = keys.backendURI + "/api/about";
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="component-section">
      <div className="content-heading">ABOUT</div>
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
              <h1>|| {data.title} ||</h1>
            </CardTitle>

            <br />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <h2>{data.description}</h2>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default About;
