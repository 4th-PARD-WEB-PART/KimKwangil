import { useNavigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { BaseDiv } from "./BaseDiv";

export const FeedListHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // /feed로 이동하기 전에 확인하는 함수
    const handleLogoClick = (e) => {
        if (location.pathname === "/edit") {
            const confirmMove = window.confirm("홈으로 이동하시겠습니까?");
            if (confirmMove) {
                navigate("/feed");  
            }
        } else {
            navigate("/feed");  
        }
    };

    return (
        <HeaderDiv>
            <LogoImage src="/Img/logo.png" onClick={handleLogoClick} />  
            <IconList>
                <BellImage src="/Img/bell.png" />
                <SearchImage src="/Img/search.png" />
                <WriteButton>새 글 작성</WriteButton>
                <Link to="/edit"><ProfileImage src="" /></Link>
            </IconList>
        </HeaderDiv>
    );
};


const HeaderDiv = styled(BaseDiv)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 10px 0px;
    box-sizing: border-box;
    margin-bottom: 20px;
    /* background-color: green; */
`;

const LogoImage = styled.img `
    width: 72px;
    height : 23px;
`

const IconList = styled.div `
    display: flex;
    align-items: center;
`;

const BellImage = styled.img `
    margin-right: 20px;
`;

const SearchImage = styled.img `
    margin-right: 20px;
`;

const WriteButton = styled.div `
    width: 100px;
    height : 33px;
    border-radius: 16.5px;
    border : 1px solid #343a40;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size : 15px;
    font-weight: bold;
    box-sizing: border-box;

    margin-right: 20px;

`;

const ProfileImage = styled.img `
    width: 40px;
    height : 40px;
    background-color: #d9d9d9;
    border-radius : 20px;
    margin-right: 20px;
`;
