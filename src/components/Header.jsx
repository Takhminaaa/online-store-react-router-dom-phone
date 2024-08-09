import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledLink>
        <NavLink
          to="/"
          className={(isActive) =>
            "nav-link" + " " + (isActive ? "unselected" : "")
          }
        >
          {" "}
          <h1>Mobile</h1>
        </NavLink>

        <div>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              "nav-link" + " " + (isActive ? "unselected" : "")
            }
          >
            about
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              "nav-link" + " " + (isActive ? "unselected" : "")
            }
          >
            phones
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              "nav-link" + " " + (isActive ? "unselected" : "")
            }
          >
            profile
          </NavLink>
          <img
            src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_icon_177366.png"
            alt=""
          />
        </div>
      </StyledLink>
    </>
  );
}

const StyledLink = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid gray;
  padding: 10px;
  margin-bottom: 50px;

  & > div {
    display: flex;
    gap: 10px;
  }
  & > div > img {
    width: 30px;
    height: auto;
  }
`;
