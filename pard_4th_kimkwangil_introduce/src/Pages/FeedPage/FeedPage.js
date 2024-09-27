import styled from "styled-components";

function FeedPage() {
    return (
        <BaseContainer>
            <FeedPageContainer>
                <HeaderDiv>
                    헤더입니다.
                </HeaderDiv>
                <MenuBarDiv>
                    메뉴바입니다.
                </MenuBarDiv>
                <FeedListDiv>
                    피드리스트입니다.
                    <Row>
                        <Feed imgSrc="/Img/FeedPage/Image1.png" title="게시물 제목1" content="게시물 내용1"
                            date="2024년 08월 14일" commentCount="10" author="살몬"></Feed>
                        <Feed imgSrc="/Img/FeedPage/Image2.png" title="게시물 제목2" content="게시물 내용2"
                            date="2024년 08월 15일" commentCount="20" author="살몬"></Feed>
                        <Feed imgSrc="/Img/FeedPage/Image3.png" title="게시물 제목3" content="게시물 내용3"
                            date="2024년 08월 16일" commentCount="30" author="살몬"></Feed>
                    </Row>
                    <Row>
                        <Feed imgSrc="/Img/FeedPage/Image4.png" title="게시물 제목4" content="게시물 내용4"
                            date="2024년 08월 17일" commentCount="40" author="살몬"></Feed>
                        <Feed imgSrc="/Img/FeedPage/Image5.png" title="게시물 제목5" content="게시물 내용5"
                            date="2024년 08월 18일" commentCount="50" author="살몬"></Feed>
                        <Feed imgSrc="/Img/FeedPage/Image6.png" title="게시물 제목6" content="게시물 내용6"
                            date="2024년 08월 19일" commentCount="60" author="살몬"></Feed>
                    </Row>
                </FeedListDiv>
            </FeedPageContainer>
        </BaseContainer>
    )
}

const BaseContainer = styled.div `
    width: 100%;
    height : 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FeedPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const HeaderDiv = styled.div `

`;
const MenuBarDiv = styled.div `

`;
const FeedListDiv = styled.div `
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`

`;

const Feed = ({ imgSrc, title, content, date, commentCount, author }) => {
    return (
        <FeedContainer>
            <Image src={imgSrc}/>
            <FeedTitle>{title}</FeedTitle>
            <FeedContent>{content}</FeedContent>
            <FeedDate>{date}</FeedDate>
            <FeedAuthor>{author}</FeedAuthor>
            <FeedCommentCount>{commentCount}</FeedCommentCount>
        </FeedContainer>
    )
}

const FeedContainer = styled.div`

`;

const Image = styled.img`

`;

const FeedTitle = styled.p`

`;

const FeedContent = styled.p`

`;

const FeedDate = styled.p`

`;

const FeedAuthor = styled.p`

`;

const FeedCommentCount = styled.p`

`;

export default FeedPage;