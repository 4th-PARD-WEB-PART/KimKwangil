import styled from "styled-components";
import {FeedListHeader} from "./Components/FeedListHeader.js";
import {FeedListMenu} from "./Components/FeedListMenu.js";
import {FeedListContent} from "./Components/FeedListContent.js";

function FeedPage() {

    return (
        <BaseContainer>
            <PageContainer>
                <FeedListHeader/>
                <FeedListMenu/>
                <FeedListContent/>
            </PageContainer>
        </BaseContainer>
    )
}

export const BaseContainer = styled.div `
    width: 100%;
    height : auto;
    display: flex;
    justify-content: center;
    background-color: ${props => props.$bgColor || "#F8F9FA"};
    /* align-items: center; */
`;

export const PageContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

export default FeedPage;



