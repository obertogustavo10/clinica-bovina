import React from "react";
import { NavLink as NavLinkRouter} from "react-router-dom";
import styled from "styled-components";
import '.././index.css';

export default function NavbLink({ to, path, ...props }) {
    let activeStyle = {
        textDecoration: "underline",
        fontWeight: "bold",
        color: "red"
      };
  const StyleLink = styled(NavLinkRouter)`
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    padding: 7px;

    &:hover {
      background-color: rgba(245, 241, 233, 0.8);
      border-radius: 100px;
      color: black;
    }
  `;
  return (
    <StyleLink {...props} to={to}
    className={({ isActive }) => isActive ? 'is-active' : undefined
  }>
      {path}
    </StyleLink>
  );
}
