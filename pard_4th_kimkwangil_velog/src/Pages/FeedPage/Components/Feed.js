import {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Feed = ({
    feed_id,
    imgSrc,
    title,
    content,
    date,
    commentCount,
    author,
    heartCount,
    authorImage
}) => {

    const [click, setClick] = useState(false);
    const [heartCountValue, setHeartCountValue] = useState(heartCount);
    const handleHeartClick = () => {
        // 클릭 상태 변경
        setClick(!click);

        // 상태에 따라 하트 개수 업데이트
        if (click) {
            // 클릭되어 있으면 감소
            setHeartCountValue((prevCount) => prevCount - 1);
        } else {
            // 클릭되지 않았으면 증가
            setHeartCountValue((prevCount) => prevCount + 1);
        }
    };

    return (
        <FeedContainer>
            <LinkBox to={`/detail/${feed_id}`}>
                <FeedImage src={imgSrc}/>
                <FeedInfoTop>
                    <FeedTitleContent>
                        <FeedTitle>{title}</FeedTitle>
                        <FeedContent>{content}</FeedContent>
                    </FeedTitleContent>
                    <FeedDateComment>
                        <FeedDate>{date}</FeedDate>
                        <FeedComment>{commentCount}개의 댓글</FeedComment>
                    </FeedDateComment>
                </FeedInfoTop>
            </LinkBox>
            <FeedIntoBottom>
                <FeedAuthorDiv>
                    <FeedAuthorImage src={authorImage} />
                    <FeedAuthor>by
                        <FeedAuthorName>{author}</FeedAuthorName>
                    </FeedAuthor>
                </FeedAuthorDiv>
                <FeedHeartDiv>
                    <FeedHeartImage
                        src={click
                            ? "/Img/heart2.png"
                            : "/Img/heart.png"}
                        onClick={handleHeartClick}/>
                    <FeedHeartCount>{heartCountValue}</FeedHeartCount>
                </FeedHeartDiv>
            </FeedIntoBottom>
        </FeedContainer>
    )
}

const FeedContainer = styled.div`
    color : #000000;
    text-decoration: none;
    width: 327px;
    height : 386px;
    background-color: white;
    display: flex;
    flex-direction: column;
    transition: scale 0.5s ease;
    &:hover{
        scale: 1.1;
    }
    border-radius: 15px;
`;

const LinkBox = styled(Link)`
    color : #000000;
    text-decoration: none;
`;  

const FeedImage = styled.img `
    width: 100%;
    height : 171px;
    background-color: #f96969;
    border-radius: 15px 15px 0px 0px;
`;

const FeedInfoTop = styled.div `
    height : 168px;
    padding : 15px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FeedTitleContent = styled.div `

`;

const FeedTitle = styled.p `
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const FeedContent = styled.p `
    font-size: 15px;
`;

const FeedDateComment = styled.div `
    display: flex;
    margin-bottom: 5px;
`

const FeedDate = styled.p `
    font-size: 12px;
    color : #858e96;
    margin-right: 10px;
`;

const FeedComment = styled.p `
    font-size: 12px;
    color : #858e96;
`;

const FeedIntoBottom = styled.div `
    padding : 10px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 2px solid #f1f3f5;
`;

const FeedHeartDiv = styled.div `

    display: flex;
    align-items: center;
`;

const FeedAuthorDiv = styled.div `
    display: flex;
    align-items: center;
`;

const FeedAuthorImage = styled.img `
    width: 22px;
    height : 22px;
    border : 1px solid #d9d9d9;
    border-radius: 50%;

    margin-right: 10px;
`
const FeedAuthor = styled.p `
    font-size: 12px;
    color : #858e96;
`;
const FeedAuthorName = styled.span `
    font-size: 12px;
    font-weight: bold;
    color : #212529;
    margin-left: 5px;
`;
const FeedHeartImage = styled.img `
    margin-right: 10px;

    transition: scale 0.5s ease;
    &:hover{
        scale: 1.3;
    }
`;
const FeedHeartCount = styled.p `
    font-size: 12px;
    color : #212529;
`;