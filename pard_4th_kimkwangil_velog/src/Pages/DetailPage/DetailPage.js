import {useParams} from "react-router-dom";
import {FeedList} from "../FeedPage/FeedList";
import {BaseContainer, PageContainer} from "../FeedPage/FeedPage";
import {FeedListHeader} from "../FeedPage/Components/FeedListHeader";
import styled from "styled-components";
import {useEffect, useState} from "react";
function DetailPage() {
    const param = useParams();
    const feed_id = param.feed_id;
    const [feedData, setFeedData] = useState();

    // 특정 feed_id로 피드를 찾는 방법
    const getFeedById = (id) => {
        return FeedList.find(feed => JSON.stringify(feed.feed_id) === id);
    };
    useEffect(() => {
        setFeedData(getFeedById(feed_id));

    }, []);

    return (
        <BaseContainer $bgColor = "white">
            <PageContainer>
                <FeedListHeader/>
                <FeedDetailContent>
                    <SideBarDiv>
                        <SideBar>
                            <FeedLikeImage src="/Img/like.png" />
                            <FeedLikeCount>{feedData?.heartCount}</FeedLikeCount>
                            <FeedShareImage src = "/Img/share.png"/>
                        </SideBar>
                    </SideBarDiv>
                    <FeedDetailInfoDiv>
                        <FeedTitle>{feedData?.title}</FeedTitle>
                        <FeedWriteInfoDiv>
                            <FeedAuthorDateDiv>
                                <FeedAuthor>{feedData?.author}</FeedAuthor>
                                <FeedDate>{feedData?.date}</FeedDate>
                            </FeedAuthorDateDiv>
                            <FeedButtonList>
                                <FeedButtonItem>통계</FeedButtonItem>
                                <FeedButtonItem>수정</FeedButtonItem>
                                <FeedButtonItem>삭제</FeedButtonItem>
                            </FeedButtonList>
                        </FeedWriteInfoDiv>
                        <FeedContent>{feedData?.content}</FeedContent>
                        <FeedAuthorInfoDiv>
                            <FeedAuthorImage src={feedData?.authorImage} />
                            <FeedAuthorNameDescDiv>
                                <FeedAuthorName>{feedData?.author}</FeedAuthorName>
                                <FeedAuthorDesc>{feedData?.authorComment}</FeedAuthorDesc>
                            </FeedAuthorNameDescDiv>
                        </FeedAuthorInfoDiv>
                        <LinkIconListDiv>
                            <LinkIconItem src="/Img/github.png" />
                            <LinkIconItem src="/Img/home.png" />
                            <LinkIconItem src="/Img/email.png" />
                        </LinkIconListDiv>
                    </FeedDetailInfoDiv>
                </FeedDetailContent>
            </PageContainer>
        </BaseContainer>
    )
}

const FeedDetailContent = styled.div `
    width: 100%;
    height : auto;
    display: flex;  
    margin-top: 40px;
`;


const FeedDetailInfoDiv = styled.div `
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    flex : 1;

    margin-right: 120px;
`;


// sidebar

const SideBarDiv = styled.div `
    /* background-color: red; */
    width: 150px;
    height : 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SideBar = styled.div`
    width: 64px;
    height : 149px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #F8F9FA;
    border-radius: 32px;

    padding : 10px 0px;
    box-sizing: border-box;
    


`;
const Image = styled.img`
    width: 46px;
`
const FeedLikeImage = styled(Image)`
`;

const FeedLikeCount = styled.p`
    font-size: 13px;
    font-weight: bold;
`;
const FeedShareImage = styled(Image)`

`;

// Feed Content

const FeedTitle = styled.p `
    font-size: 46px;
    font-weight: bold;

    margin-bottom: 40px;
`;

const FeedWriteInfoDiv = styled.div `
    display: flex;
    justify-content: space-between;

    margin-bottom: 80px;
`;

const FeedAuthorDateDiv = styled.div`
    display: flex;
    align-items: center;
`;

const FeedAuthor = styled.p `
    font-size: 15px;
    font-weight: bold;
    margin-right: 20px;
`;

const FeedDate = styled.p `

`;

const FeedButtonList = styled.div `
    display: flex;
    align-items: center;
`;
const FeedButtonItem = styled.p `
    margin-left: 10px;
    font-size : 15px;
    color : #858e96;
`;
const FeedContent = styled.p `
    font-size: 17px;
    margin-bottom: 200px;
    /* background-color: white; */
`;

const FeedAuthorInfoDiv = styled.div `

    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const FeedAuthorImage = styled.img `
    width: 132px;
    height : 132px;
    background-color: #d9d9d9;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
    padding : 15px;
    box-sizing: border-box;
`;

const FeedAuthorNameDescDiv = styled.div `
`;

const FeedAuthorName = styled.p `
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 10px;
`;
const FeedAuthorDesc = styled.p `
    font-size: 17px;
`;

const LinkIconListDiv = styled.div `
    display: flex;
    align-items: center;

    border-top: 1px solid #EAECEF;
    padding : 20px 0px;
`;

const LinkIconItem = styled.img`
    width: 35px;
    height : 35px;
    margin-right: 10px;
`;
export default DetailPage;