import React from "react";
import styled from "styled-components";
import "../css/Header.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  // Css Components
  const HeaderWrapper = styled.div`
        width: 1400px;
        margin: 20px auto;
        padding: 20px;
        border: 3px solid black;
        & span {
            padding: 0 10px;
        }
    `;
  const LeftSide = styled.div`
    display: inline-block;
    margin-right: 20px;
  `;
  const Center = styled.div`
    display: inline-block;
    line-height: 40px;
    vertical-align: top;
  `;
  const RightSide = styled.div`
    display: inline-block;
    float: right;
    line-height: 40px;
    vertical-align: top;
    
  `;

  return (
    <HeaderWrapper>
      <LeftSide>
        <div className="logo">
          <img src="http://www.saraminimage.co.kr/sri/main/img_main_spr_200710.png" />
        </div>
      </LeftSide>
      <Center>
        <HiMenuAlt1 />
        <span style={{'font-weight' : 'bold'}}>지역별</span>
        <span style={{'font-weight' : 'bold'}}>직업별</span>
        <span>헤드헌팅</span>
        <span>HOT100</span>
        <span>공채</span>
        <div style={{'display':'inline-block','border-left': '1px solid gray'}}>
            <span>기업연구소</span>
            <span>취준진담</span>
        </div>
      </Center>
      <RightSide>
        <span className="login">
          로그인
          <BsChevronDown style={{'position' : 'relative','top' : '3px'}}/>
        </span>
        <span>이력서 관리</span>
        <span>추천</span>
        <span>인적성검사</span>
        <span>기업 서비스</span>
      </RightSide>
    </HeaderWrapper>
  );
};
export default Header;
