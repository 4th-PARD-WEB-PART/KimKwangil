import styled from "styled-components";
import {BaseDiv} from "./BaseDiv";
import {FeedList} from "../FeedList";
import {Feed} from "./Feed";
export const FeedListContent = () => {
    const chunkedFeedInfo = [];

    for (let i = 0; i < FeedList.length; i += 3) {
        chunkedFeedInfo.push(FeedList.slice(i, i + 3));
    }
    return (
        <FeedListDiv>
            {
                chunkedFeedInfo.map((feedRow, index) => (
                    <Row key={index}>
                        {
                            feedRow.map((feed, idx) => (
                                <Feed
                                    key={idx}
                                    feed_id={feed.feed_id}
                                    imgSrc={feed.imgSrc}
                                    title={feed.title}
                                    content={feed.content}
                                    date={feed.date}
                                    commentCount={feed.commentCount}
                                    author={feed.author}
                                    heartCount={feed.heartCount}
                                    authorImage={feed.authorImage}
                                />
                            ))
                        }
                    </Row>
                ))
            }
        </FeedListDiv>

    )
}

const FeedListDiv = styled(BaseDiv)`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div `

    display: flex;
    justify-content: space-between;


    margin-bottom: 20px;
`;
