import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const SidebarListItemStyled = styled.div`


  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    gap: 16px;
    padding: 12.5px 0;
  }
`;

const SidebarListItem = ({ url, icon, name }) => {
  return (
    <SidebarListItemStyled>
      <NavLink to={url} >
        <i className={icon}></i>
        {name}
      </NavLink>
    </SidebarListItemStyled>
  );
};

export default SidebarListItem;
