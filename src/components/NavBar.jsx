import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import styled from 'styled-components'
import { color } from '../constant/color';

function NavBar() {
  return (
    <div>
      <div>
        <nav
          className=" navbar bg-white fixed-top top-nav px-5 d-flex align-items-center justify-content-between "
          style={{ color: color.deepgrey, fontSize: "15px" }}
        >
          <div className="nav__brand  d-flex align-items-center justify-content-between">
            {/* <div className="nav_img w-25">V</div> */}
            <div className="brand-cover px-5  d-flex align-items-center">
              <div
                className="brand-icon d-flex text-white px-2 fw-bold shadow-sm rounded-2 mx-2 align-items-center justify-content-center"
                style={{
                  background: color.primary,
                }}
              >
                R
              </div>
              <div className="brand-name fw-bold  mx-2">Recter</div>
            </div>
            {/* <div className="nav_text w-75 d-flex align-items-center justify-content-center mt-1">
              Recter
            </div> */}
          </div>
          <Categories className="nav-categories d-flex align-items-center justify-content-between">
            <div className="mx-4">Home</div>
            <div className="mx-4">
              Products <RiArrowDropDownLine size={30} />
            </div>
            <div className="mx-4">
              Resources <RiArrowDropDownLine size={30} />
            </div>
            <div className="mx-4">Pricing</div>
          </Categories>
          <div className="nav-auth  d-flex align-items-center justify-content-between">
            <div className="login mx-2" type="button">
              Log in
            </div>
            <div
              className="sign-up mx-2 shadow-lg py-2 px-3 rounded-3 text-white"
              type="button"
              style={{
                background: color.primary,
              }}
            >
              Sign up
            </div>
          </div>
          {/* <div className="nav-auth d-flex align-items-center justify-content-between">
            <div className="login text-white">Login</div>
            <div className="signup shadow-lg py-2 px-3 rounded-3 text-white">
              Sign Up
            </div>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

const Categories = styled.div`
margin-right: 450px`

export default NavBar