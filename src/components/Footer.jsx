import React from "react";
import { color } from "../constant/color";
import styled from "styled-components";

function Footer() {
  const text = [
    {
      text: "Product",
      categories: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorial",
        "Pricing",
        "Releases",
      ],
      text2: "Company",
      categories2: [
        "About us",
        "Careers",
        "Press",
        "News",
        "Media kit",
        "Contact",
      ],
    },
    {
      text: "Resources",
      categories: [
        "Blog ",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
      text2: "Use cases",
      categories2: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      text: "Social",
      categories: [
        "Twitter",
        "Facebook",
        "LinkedIn",
        "GitHub",
        "AngelList",
        "Dribble",
      ],
      text2: "Legal",
      categories2: [
        "Terms",
        "Privacy",
        "Cookies",
        "Licenses",
        "Settings",
        "Contact",
      ],
    },
  ];
  return (
    <FooterDiv
      className="footer mt-5 "
      style={{
        background: color.deepPrimary,
        color: color.lightergrey,
      }}
    >
      <div className="container top-footer-content pt-5 px-5">
        <div className="row ">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="subscribe-container d-flex">
              <div>
                <div
                  className="newsletter-text1 text-start"
                  style={{
                    color: color.lightgrey,
                  }}
                >
                  Join our newsletter
                </div>
                <div className="newsletter-text2 text-start">
                  We'll send you a nice letter once per week. No spam.
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="subscribe-box d-flex align-items-end justify-content-end">
              <div class="subscribe-auth py-2 px-3 shadow-lg mt-3 rounded-3 bg-white">
                <input placeholder="Enter your email"></input>
              </div>
              <div
                className="subscribebtn shadow-lg py-2 px-3 mx-3 rounded-3 text-white"
                type="button"
                style={{
                  background: color.primary,
                }}
              >
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-5 pt-5">
        <div className="row">
          {text.map((item) => (
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">
              <div className="mt-3 mx-5 reminders-main d-flex align-items-center justify-content-between">
                <div className="enquiries-main-text-1 ">
                  <div className="text-white text-start mt-5">{item.text}</div>
                  <div className="mt-4">
                    {item.categories.map((i, index) => (
                      <div key={index} className="d-block text-start mt-3">
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="enquiries-main-text-2 text-center">
                  <div className="text-white text-start mt-5">{item.text2}</div>
                  <div className="mt-4">
                    {item.categories2.map((i, index) => (
                      <div key={index} className="d-block text-start mt-3">
                        {i}
                      </div>
                    ))}
                  </div>
                  {/* <div>{item.categories2}</div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container bottom-footer-content pt-5 mt-5 px-5">
        <div className="row ">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="brand-cover  d-flex align-items-center">
              <div
                className="brand-icon d-flex text-white px-2 fw-bold shadow-sm rounded-2 mx-2 align-items-center justify-content-center"
                style={{
                  background: color.deepgrey,
                }}
              >
                R
              </div>
              <div className="brand-name fw-bold  mx-2">Recter</div>
            </div>
            {/* <div className="subscribe-container d-flex">
              <div
                className="newsletter-text1 text-start"
                style={{
                  color: color.lightgrey,
                }}
              >
                U
              </div>
              <div className="newsletter-text2 text-start">Untitled UI</div>
            </div> */}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="d-flex align-items-end justify-content-end  ">
              <div className="subscribebtn ">
                &copy; 2022 Recter. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  //   margin-top: 4000px;
  // height: 100vh;
  padding-bottom: 50px;
  //   color: red
`;

export default Footer;
