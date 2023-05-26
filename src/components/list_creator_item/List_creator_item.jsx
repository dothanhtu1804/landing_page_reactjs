import { useState } from "react";
import styled from "styled-components";

const StyledFollow = styled.div`
  padding: 24px;
  .follow {
    display: flex;
    justify-content: space-between;
    height: 50px;
    text-align: center;
    align-items: center;
  }
  .number {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #27262e;
  }
  .name-user {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    text-align: left;
    font-feature-settings: "salt" on;
    /* margin-right: 54px; */

    color: #27262e;
  }
  .email {
    color: #747475;
  }
  button {
    width: 77px;
    height: 32px;
    background: ${(props) =>
      props.sttFollow === "Following" ? " #5429FF" : "rgba(84, 41, 255, 0.1)"};
    border-radius: 20px;
    color: ${(props) =>
      props.sttFollow === "Following" ? " white" : "#5429FF"};
  }
  img {
    /* padding-right: 20px; */
  }
`;


export const Follow = ({ number, imgUser, nameUser, email, sttFollow }) => {
    const [follow, setFollow] = useState(false);
  function EditFollow() {
    setFollow(!follow);
  }
  console.log(follow);
  return (
    <StyledFollow sttFollow={sttFollow}>
      <div className="follow">
        <div className="number">{number}</div>
        <img src={imgUser} alt="" />
        <div className="name-user">
          {nameUser}
          <div className="email">{email}</div>
        </div>
        <button onClick={EditFollow}> 
          {follow ? sttFollow : !sttFollow}
        </button>
      </div>
    </StyledFollow>
  );
};
