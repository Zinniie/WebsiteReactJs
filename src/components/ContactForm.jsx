import React from 'react'
import { color } from '../constant/color';

const ContactForm = () => {
  return (
    <div
      className="container contactformcontent mt-5 pt"
      style={{ width: "30%" }}
    >
      <div className="top-contact-content" style={{}}>
        <div
          className="top-contact-text1 fw-bold"
          style={{ color: color.deepPrimary, fontSize: "12px" }}
        >
          Contact us
        </div>
        <div className="top-contact-text2 fs-1 mt-2">Get in touch</div>
        <div
          className="top-contact-text3 mt-2"
          style={{ color: color.deepgrey, fontSize: "14px" }}
        >
          We'd love to hear from you. Please fill out this form.
        </div>
      </div>
      <div
        className=" contactform mt-5"
        style={{ fontSize: "12px", color: color.deepgrey }}
      >
        <div class="row">
          <div class="col">
            <div className="text-start">First Name</div>
            <input
              type="text"
              class="form-control mt-2"
              placeholder="First name"
              aria-label="First name"
              style={{ fontSize: "12px" }}
            />
          </div>
          <div class="col">
            <div className="text-start">Last Name</div>
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Last name"
              aria-label="Last name"
              style={{ fontSize: "12px" }}
            />
          </div>
        </div>

        <div className="mb-3 mt-4">
          <div for="exampleFormControlInput1" className="form-label text-start">
            Email
          </div>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="you@company.com"
            style={{ fontSize: "12px" }}
          />
        </div>
        <div className="mt-4">
          <div className="text-start">Phone Number</div>
          <select
            className="form-select mt-2"
            aria-label="Default select example"
            style={{ fontSize: "12px" }}
          >
            <option value="1">NIG</option>
            <option value="2">US</option>
            <option value="3">CAD</option>
            <option selected>+234 8000 000 000</option>
          </select>
        </div>

        <div className="mb-3 mt-4">
          <div
            for="exampleFormControlTextarea1"
            className="form-label text-start"
          >
            Message
          </div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-check d-flex ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <div className="form-check-label mx-3" for="flexCheckDefault ">
            You agree to our friendly privacy policy
          </div>
        </div>

        <div
          className="contact-auth mt-4 shadow-lg py-2 px-3 rounded-3 text-white"
          type="button"
          style={{
            background: color.primary,
          }}
        >
          Send message
        </div>
      </div>
    </div>
  );
}

export default ContactForm