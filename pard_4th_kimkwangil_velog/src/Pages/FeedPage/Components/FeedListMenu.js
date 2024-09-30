import styled from "styled-components";
import {BaseDiv} from "./BaseDiv";
export const FeedListMenu = () => {
    return (
        <MenuBarDiv>
            <MenuList>
                <MenuItem>
                    <MenuImage src="/Img/arrow.png"/>
                    <MenuName>트랜딩</MenuName>
                </MenuItem>
                <MenuItem>
                    <MenuImage src="/Img/clock.png"/>
                    <MenuName>최신</MenuName>
                </MenuItem>
                <MenuItem>
                    <MenuImage src="/Img/wifi.png"/>
                    <MenuName>피드</MenuName>
                </MenuItem>
            </MenuList>

            <OtherMenuItem>
                <DropDown>
                    <DropDownTitle>이번 주</DropDownTitle>
                    <DropDownToggle src="/Img/toggle.png"/>
                </DropDown>

                <DotsImage src="/Img/dots.png"/>
            </OtherMenuItem>

        </MenuBarDiv>
    )
}

const MenuBarDiv = styled(BaseDiv)`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    /* background-color: yellow; */
`;

const MenuList = styled.div `
    display: flex;
    align-items: center;
`;

const MenuItem = styled.div `
    display: flex;
    align-items: center;
    margin-right: 15px;
`;

const MenuImage = styled.img `
    margin-right: 10px;
`;

const MenuName = styled.p `
    font-size: 18px;
    font-weight: bold;
    color : #343a40;
`;

const OtherMenuItem = styled.div `
    display: flex;
    align-items: center;

`;
const DropDown = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 101px;
    height : 33px;
    background-color: #ffffff;
    border-radius: 4px;

    margin-right: 20px;
`;

const DropDownTitle = styled.p `
    font-size: 13px;
    color : #495057;
`;

const DropDownToggle = styled.img `

`;

const DotsImage = styled.img `
    margin-right: 10px;
`;