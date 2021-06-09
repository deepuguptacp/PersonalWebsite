import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "../../config/keys";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import "../pages.css";

const Education = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = keys.backendURI + "/api/education";
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
      <div className="content-heading">EDUCATION</div>
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
              <CardTitle className="card-title-content">
                <h2>{data.data[0].degree}</h2>
              </CardTitle>
              <hr />
              <br />
              <div className="card-title-content">
                 <h2>Organization : {data.data[0].organization}</h2>
                <h2>Passed On : {data.data[0].date}</h2>
                <h2>Branch : {data.data[0].branch}</h2>
                <h2>Place : {data.data[0].location}</h2>
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
              <CardTitle className="card-title-content">
                <h2>{data.data[1].degree}</h2>
              </CardTitle>
              <hr />
              <br />
              <div className="card-title-content">
                <h2>Organization : {data.data[1].organization}</h2>
                <h2>Passed On : {data.data[1].date}</h2>
                <h2>Branch : {data.data[1].branch}</h2>
                <h2>Place : {data.data[1].location}</h2>
              </div>
            </CardBody>
          </Card>
        </div>
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
            <CardTitle className="card-title-content">
              <h2>{data.data[2].degree}</h2>
            </CardTitle>
            <hr />
            <br />
            <div className="card-title-content">
              <h2>Organization : {data.data[2].organization}</h2>
              <h2>Passed On : {data.data[2].date}</h2>
              <h2>Branch : {data.data[2].branch}</h2>
              <h2>Place : {data.data[2].location}</h2>
            </div>
          </CardBody>
        </Card>{" "}
      </div>
    </div>
  );
};

export default Education;
