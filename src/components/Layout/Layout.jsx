import Header from "components/header";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "components/sidebar/Sidebar";
import Card_banner from "components/card_banner";
import Product from "components/card_image";
import ape_green from "assets/product/monkey_green.svg";
import creator1 from "assets/creator/creator1.svg";
import Follow from "components/list_creator_item";

const LayoutStyled = styled.div`
  display: flex;
  background-color: #caeae6;
  .right {
    width: 100%;
    padding: 32px;
  }

  #detail_page {
    display: grid;
    grid-template-columns: 65% 35%;
    gap: 20px;
  }

  #detail_page .list_card_image .header_list {
    display: flex;
    justify-content: space-between;
  }

  #detail_page .list_card_image .header_list h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
  }

  #detail_page .list_card_image .header_list .category {
    display: flex;
    gap: 12px;
  }

  #detail_page .list_card_image .header_list .category .category-item a {
    padding: 5px 12px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #7a797d;
  }

  #detail_page .list_card_image .header_list .category .category-item a:hover {
    background-color: #5429ff1a;
    color: #5429ff;
    border-radius: 30px;
  }

  .body_list {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .list_creator {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 24px;
  }

  .list_creator .header_list_creator {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list_creator .header_list_creator h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    color: #27262e;
  }

  .list_creator .header_list_creator h5 {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    color: #747475;
  }
`;

const ContentStyled = styled.div`
  background-color: #f23412;
  margin-top: 64px;
  height: 100vh;
`;
const SideBarStyled = styled.div`
  background-color: #aaf031;
  float: left;
  width: 20%;
  height: 100vh;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <Sidebar />
      <div className="right">
        <Header />
        <Card_banner></Card_banner>
        <div id="detail_page">
          <div className="list_card_image">
            <div className="header_list">
              <h3>Trending Auctions</h3>
              <div className="category">
                <div className="category-item">
                  <NavLink to={"/"}>Art</NavLink>
                </div>
                <div className="category-item">
                  <NavLink to={"/"}>Music</NavLink>
                </div>
                <div className="category-item">
                  <NavLink to={"/"}>Collectibles</NavLink>
                </div>
                <div className="category-item">
                  <NavLink to={"/"}>Utility</NavLink>
                </div>
              </div>
            </div>
            <div className="body_list">
              <Product
                imgProduct={ape_green}
                timeLeft="8 : 21 : 23"
                nameProduct="Smilling Ape"
                likes="21.5K"
                imgUser={creator1}
                nameUser="@m_alisson"
                textBid="Current Bid"
                price="6.12"
              ></Product>
              <Product
                imgProduct={ape_green}
                timeLeft="8 : 21 : 23"
                nameProduct="Smilling Ape"
                likes="21.5K"
                imgUser={creator1}
                nameUser="@m_alisson"
                textBid="Current Bid"
                price="6.12"
              ></Product>
            </div>
          </div>
          <div className="list_creator">
            <div className="header_list_creator">
              <h3>Top Creator</h3>
              <h5>See All</h5>
            </div>
            <div className="body_list_creator">
              <Follow
                number="1"
                imgUser={creator1}
                nameUser="Michael Jordan"
                email="@jordan_"
                sttFollow="Follow"
              />
              <Follow
                number="1"
                imgUser={creator1}
                nameUser="Michael Jordan"
                email="@jordan_"
                sttFollow="Following"
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
