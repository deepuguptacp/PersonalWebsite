import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import "../pages.css";
import keys from "../../config/keys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCode,
  faEnvelope,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = keys.backendURI + "/api/contact";
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="component-section">
      <div className="content-heading">CONTACTS</div>
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
                    <FontAwesomeIcon icon={faAddressCard} />
                  </h2>
                </div>
                <div className="card-title-content">
                  <h2>How to contact me</h2>
                </div>
              </div>
              <hr />
            </CardTitle>
            <br />

            <div className="card-title">
              <div className="card-title-content">
                <h2>
                  <FontAwesomeIcon icon={faEnvelope} />
                </h2>
              </div>
              <div className="card-title-content">
                <h2>Email Id :- {data.gmail}</h2>
              </div>
            </div>
            <div className="card-title">
              <div className="card-title-content">
                <h2>
                  <FontAwesomeIcon icon={faLaptop} />
                </h2>
              </div>
              <div className="card-title-content">
                <h2>
                  LinkedIn Profile :-{" "}
                  <a href="https://www.linkedin.com/in/deepu-gupta-72493116b/">
                    {data.linkedIn}
                  </a>
                </h2>
              </div>
            </div>
            <div className="card-title">
              <div className="card-title-content">
                <h2>
                  <FontAwesomeIcon icon={faCode} />
                </h2>
              </div>
              <div className="card-title-content">
                <h2>
                  Github Profile :-{" "}
                  <a href="https://github.com/deepuguptacp">{data.github}</a>
                </h2>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
