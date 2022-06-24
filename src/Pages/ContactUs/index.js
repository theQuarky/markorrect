import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./index.scss";

export default function ContactUs() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const serviceList = useMemo(
    () =>
      [
        "Search Engine Optimization",
        "SOCIAL MEDIA MARKETING SERVICES",
        "PAID MARKETING SERVICES",
        "CONTENT MARKETING SERVICES",
        "CONVERSION OPTIMISATION SERVICES",
        "DIGITAL INTELLECTUAL SERVICES",
        "VIDEO MARKETING SERVICES",
        "AMAZON MARKETING SERVICES",
        "WEB DEVELOPMENT SERVICES",
        "GRAPHIC DESIGNING SERVICES",
        "APP DEVELOPMENT SERVICES",
      ].map((service) => {
        return {
          value: service,
          label: service,
        };
      }),
    []
  );
  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="contact-us">
      Contact Us
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <form>
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="email" />
            </td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Prefer Time slot:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Company Name:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>
              <input type="url" />
            </td>
          </tr>
          <tr>
            <td>Service list:</td>
            <td>
              <Select options={serviceList} />
            </td>
          </tr>
          <tr>
            <td>Details on inquiry:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Company turnover:</td>
            <td>
              <Select
                options={[
                  {
                    value: "low",
                    label: "<10000 USD",
                  },
                  {
                    value: "medium",
                    label: "10000-50000 USD",
                  },
                  {
                    value: "high",
                    label: ">50000 USD",
                  },
                ]}
              />
            </td>
          </tr>
        </table>
        <button>Submit</button>
      </form>
      <div className="contact-us-page-footer">
        We would be delighted to assist you
      </div>
    </div>
  );
}
