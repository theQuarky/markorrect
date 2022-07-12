/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./index.scss";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "India",
    message: "",
    timeSlot: "Other",
    website: "",
    company: "",
    service: "Other",
    turnOver: "Other",
  });
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
  const timeSlotsList = useMemo(() => [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // eslint-disable-next-line no-unused-vars
      const docRef = await addDoc(collection(db, "contact_us"), formData);
      alert("Form submitted successfully");
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contact-us" id="contact-us">
      <h1> Contact Us</h1>
      <p>
        Please do not hesitate to contact us.
        <br /> Our digital marketing team is available at all times to assist
        you.
        <br /> Call us or Schedule Your Call, Send us an email, or Use the form
        below to contact us.
      </p>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData((data) => {
                    return { ...data, name: e.target.value };
                  })
                }
                type="text"
                name="name"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input
                value={formData.email}
                onChange={(e) => {
                  setFormData((data) => {
                    return { ...data, email: e.target.value };
                  });
                }}
                type="email"
                name="email"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>
              <Select
                defaultValue={formData.country}
                onChange={({ value }) => {
                  setFormData((data) => {
                    return { ...data, country: value };
                  });
                }}
                name="country"
                options={options}
                required={true}
              />
            </td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>
              <input
                value={formData.phone}
                onChange={(e) => {
                  setFormData((data) => {
                    return { ...data, phone: e.target.value };
                  });
                }}
                type="number"
                name="phone_number"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Prefer Time slot:</td>
            <td>
              <Select
                defaultValue={formData.timeSlot}
                name="time_slot"
                options={timeSlotsList.map((timeSlot) => {
                  return {
                    value: timeSlot,
                    label: timeSlot,
                  };
                })}
                onChange={({ value }) => {
                  setFormData((data) => {
                    return { ...data, timeSlot: value };
                  });
                }}
                required={true}
              />
            </td>
          </tr>
          <tr>
            <td>Company Name:</td>
            <td>
              <input
                value={formData.company}
                onChange={(e) => {
                  setFormData((data) => {
                    return { ...data, company: e.target.value };
                  });
                }}
                type="text"
                name="company_name"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>
              <input
                value={formData.website}
                onChange={(e) => {
                  setFormData((data) => {
                    return { ...data, website: e.target.value };
                  });
                }}
                type="url"
                name="website"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Service list:</td>
            <td>
              <Select
                defaultValue={formData.service}
                onChange={({ value }) => {
                  setFormData((data) => {
                    return { ...data, service: value };
                  });
                }}
                name="service"
                options={serviceList}
                required={true}
              />
            </td>
          </tr>
          <tr>
            <td>Details on inquiry:</td>
            <td>
              <input
                value={formData.message}
                onChange={(e) => {
                  setFormData((data) => {
                    return { ...data, message: e.target.value };
                  });
                }}
                name="inquiry"
                type="text"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Company turnover:</td>
            <td>
              <Select
                defaultValue={formData.turnOver}
                onChange={({ value }) => {
                  setFormData((data) => {
                    return { ...data, turnOver: value };
                  });
                }}
                name="turnover"
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
                required={true}
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
