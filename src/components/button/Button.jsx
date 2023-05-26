import styled from "styled-components";
import greenArrow from "../../assets/button/green_arrow.svg";
import redArrow from "../../assets/button/red_arrow.svg";
import Sidebar from "components/sidebar";

const StyledButton = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => `${props.height}`};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: 40px;
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  margin-right: ${(props) => props.mr ? `${props.mr}` : "unset"};
  
  img {
    margin-right: 8px;
  }

  .button_sidebar {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    color: #27262e;
  }

  .button_sidebar span {
    background-color: #5429ff;
    width: 20px;
    border-radius: 50px;
    color: #ffffff;
  }
`;

export const Button = ({
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  percent,
  fontSize,
  sidebar,
  content,
  children,
  ...rest
}) => {
  if (!sidebar) {
    if (
      percent && <img src={percent < 0 ? redArrow : greenArrow} alt="arr"></img>
    ) {
      return (
        <StyledButton
          percent={percent}
          width={width}
          height={height}
          textColor={textColor}
          bgColor={bgColor}
          boderColor={boderColor}
          fontSize={fontSize}
          {...rest}
        >
          {children}
        </StyledButton>
      );
    } else if (typeof content !== "undefined") {
      return (
        <StyledButton
          width={width}
          height={height}
          textColor={textColor}
          bgColor={bgColor}
          boderColor={boderColor}
          fontSize={fontSize}
          content={content}
          {...rest}
        >
          {content}
        </StyledButton>
      );
    }
  } else {
    return (
      <StyledButton
        percent={percent}
        width={width}
        height={height}
        textColor={textColor}
        bgColor={bgColor}
        boderColor={boderColor}
        fontSize={fontSize}
        {...rest}
      >
        <div className="button_sidebar">
          <span>+</span>
          {children}
          <div>></div>
        </div>
      </StyledButton>
    );
  }
};
Button.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  height: 46,
  fontSize: "16px",
};
