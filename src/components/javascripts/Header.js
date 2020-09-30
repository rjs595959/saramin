import React, { useState } from 'react'
import styled from 'styled-components'
import '../css/Header.css'
import { HiMenuAlt1 } from 'react-icons/hi'
import { BsChevronDown } from 'react-icons/bs'

const Header = () => {
    // Css Components

    const HeaderWrapper = styled.div`
        width: 1600px;
        margin: 0 auto;
        border-bottom: 1px solid gray;
    `

    const TopHeader = styled.div`
        width: 1400px;
        margin: 0 auto;
        padding: 20px;
        & span {
            padding: 10px;
        }
    `
    const LeftSide = styled.div`
        display: inline-block;
        margin-right: 20px;
    `
    const Center = styled.div`
        display: inline-block;
        line-height: 40px;
        vertical-align: top;
    `
    const RightSide = styled.div`
        display: inline-block;
        float: right;
        line-height: 40px;
        vertical-align: top;
    `
    const MenuWrapper = styled.div`
        height: 500px;
        border: 1px solid black;
    `
    const Menu = styled.div`
        width: 1400px;
        height: 100%;
        margin: 0 auto;
        
        & h4 {
            margin: 10px 10px;
        }

        & > div {
            width: 220px;
            vertical-align: top;
            display: inline-block;
            box-sizing: border-box;
            border-right: 1px solid black;
        }

        & li {
            display: inline-block;
            font-size: 12px;
        }

        & > table {
            height: 500px;
            display: inline-block;
            & td {
                width: 220px;
                height: 250px;
                box-sizing: border-box;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                border-collapse: collapse;
            }
        }
    `

    const Col4 = styled.ul`
        & > li {
            margin: 5px 15px;
        }
    `

    const Col2 = styled.ul`
        & > li {
            width: 100px;
            margin: 5px 4px; 
            text-align: center;
            display: inline-block;
            
        }
    `

    const Row1 = styled.ul`
        & > li {
            display: block;
            margin-top : 13px;
            padding-left: 25px;
        }
    `

    const MenuLeftSide = styled.div`
        height: 100%;
        border-right: 1px solid black;
        & > div {
            width: 200px;
            text-align: right;
            & > h2 {
                padding : 20px 0;
            }
        }
    `;

    const ServiceHome = styled.div`
        width : 100px;
        height: 30px;
        padding: 10px;
        display: inline-block;
        border: 1px solid black;
        &:before {
            width: 22px;
            height: 20px;
            display: inline-block;
            content: "";

            background : url(//www.saraminimage.co.kr/sri/main/ico_outlink_company_home.png) no-repeat;
        }
    `

    
    // 상태 관리 영역
    const [toggleMenu, setToggleMenu] = useState(true)

    // 함수 관리 영역
    const MenuOnClick = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <HeaderWrapper>
            <TopHeader>
                <LeftSide>
                    <div className="logo">
                        <img src="http://www.saraminimage.co.kr/sri/main/img_main_spr_200710.png" />
                    </div>
                </LeftSide>
                <Center>
                    <div style={{ display: 'inline-block'}} onClick={MenuOnClick}>
                        <a href='#'><HiMenuAlt1 /></a>
                    </div>

                    <span style={{ 'font-weight': 'bold' }}>지역별</span>
                    <span style={{ 'font-weight': 'bold' }}>직업별</span>
                    <span>헤드헌팅</span>
                    <span>HOT100</span>
                    <span>공채</span>
                    <div
                        style={{
                            display: 'inline-block',
                            'border-left': '1px solid gray',
                        }}
                    >
                        <span>기업연구소</span>
                        <span>취준진담</span>
                    </div>
                </Center>
                <RightSide>
                    <span className="login">
                        로그인
                        <BsChevronDown
                            style={{ position: 'relative', top: '3px' }}
                        />
                    </span>
                    <span>이력서 관리</span>
                    <span>추천</span>
                    <span>인적성검사</span>
                    <span>기업 서비스</span>
                </RightSide>
            </TopHeader>
            <MenuWrapper style={
                toggleMenu ? {display: 'block', position:'relative'} : {display: 'none'}
            }>
                <Menu>
                    <MenuLeftSide>
                        <div>
                            <h2>전체 채용정보</h2>
                            <h5>채용정보 홈 &#62;</h5>
                        </div>
                    </MenuLeftSide>
                    <table border='0'>
                        <tr>
                            <td>
                                <h4>지역별 &#62;</h4>
                                <Col4>
                                    <li>서울</li>
                                    <li>경기</li>
                                    <li>인천</li>
                                    <li>부산</li>

                                    <li>대구</li>
                                    <li>대전</li>
                                    <li>광주</li>
                                    <li>울산</li>

                                    <li>세종</li>
                                    <li>강원</li>
                                    <li>경남</li>
                                    <li>경북</li>

                                    <li>전남</li>
                                    <li>전북</li>
                                    <li>충남</li>
                                    <li>충북</li>

                                    <li>제주</li>
                                    <li>해외</li>
                                    <li>역세권별</li>
                                </Col4>
                            </td>
                            <td>
                                <h4>직업별(직종) &#62;</h4>
                                <Col2>
                                    <li>경영/사무</li>
                                    <li>영업/고객상담</li>
                                    <li>IT/인터넷</li>
                                    <li>디자인</li>
                                    <li>서비스</li>
                                    <li>전문직</li>
                                    <li>의료</li>
                                    <li>생산/제조</li>
                                    <li>건설</li>
                                    <li>유통/무역</li>
                                    <li>미디어</li>
                                    <li>교육</li>
                                    <li>특수계층/공공</li>
                                </Col2>
                            </td>
                            <td>
                                <h4>큐레이션 &#62;</h4>
                                <Col2>
                                    <li>추석특집</li>
                                    <li>경력관</li>
                                    <li>연봉관</li>
                                    <li>복지관</li>
                                    <li>HOT공고</li>
                                </Col2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>기업별 </h4>
                                <Row1>
                                    <li>대기업</li>
                                    <li>외국계 기업</li>
                                    <li>공사/공기업/공공기관</li>
                                    <li>상장기업</li>
                                    <li>강소/인증기업</li>
                                </Row1>
                            </td>
                            <td>
                                <h4>산업별(업종) &#62;</h4>
                                <Row1>
                                    <li>서비스업</li>
                                    <li>의료/제약/복지</li>
                                    <li>제조/화학</li>
                                    <li>판매/유통</li>
                                    <li>IT/웹/통신</li>
                                </Row1>
                            </td>
                            <td>
                                <h4>전공별</h4>
                                <Col2>
                                    <li>기계공학</li>
                                    <li>전기공학</li>
                                    <li>컴퓨터공학</li>
                                    <li>건축/토목</li>
                                    <li>재료/금속</li>
                                    <li>화학공학</li>
                                    <li>생물/생명</li>
                                    <li>산업공학</li>
                                    <li>인문/사회</li>
                                    <li>상경</li>
                                    <li>어학</li>
                                    <li>법학</li>
                                    <li>사범</li>
                                    <li>예체능</li>
                                </Col2>
                            </td>
                        </tr>
                    </table>
                    <div style={{ height: '100%' }}>
                        <div style={{ height: '33%', borderBottom: '1px solid gray'}}>
                            <h4>공채의 명가 &#62;</h4>
                            <Row1>
                                <li>1000대기업 채용</li>
                                <li>중견기업 채용</li>
                                <li>채용 달력</li>
                                <li>합격 자소서</li>
                                <li>합격스펙</li>
                            </Row1>
                        </div>
                        <div style={{ height: '33%', borderBottom: '1px solid gray'}}>
                            <h4>학력별</h4>
                            <Row1>
                                <li>고졸채용</li>
                                <li>2,3년제 채용</li>
                                <li>석박사 채용</li>
                            </Row1>
                        </div>
                        <div style={{ height: '33%' }}>
                            <h4>HOT100</h4>
                            <Row1>
                                <li>직업별</li>
                                <li>지역별</li>
                                <li>학력별</li>
                                <li>기업규모</li>
                            </Row1>
                        </div>
                    </div>
                    <div style={{ height: '100%' }}>
                        <div style={{ height: '33%', borderBottom: '1px solid gray' }}>
                            <h4>사람인서비스</h4>
                            <Row1>
                                <li>추천</li>
                                <li>기업연구소</li>
                                <li>인재검색</li>
                                <li>인적성검사</li>
                            </Row1>
                        </div>
                        <div style={{ height: '33%', borderBottom: '1px solid gray' }}>
                            <Row1>
                                <li>고졸채용</li>
                                <li>채용관</li>
                                <li>헤드헌팅</li>
                                <li>파견/대행</li>
                            </Row1>
                        </div>
                        <div style={{ height: '33%' }}>
                            <Row1>
                                <li>고객센터</li>
                                <li>사람인 앱 설치</li>
                                <li>재능마켓 오투잡</li>
                                <li>
                                    <ServiceHome>기업서비스 홈</ServiceHome>
                                </li>
                            </Row1>
                        </div>
                    </div>
                </Menu>
            </MenuWrapper>
        </HeaderWrapper>
    )
}
export default Header
