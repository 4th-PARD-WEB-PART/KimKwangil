import { useState } from "react";
import styled from "styled-components";

function RegisterPage() {

    const [name, setName] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    return (
        <BaseContainer>
            <RegisterContainer>
                <Title>환영합니다!</Title>
                <SubTitle>기본 회원 정보를 등록해주세요</SubTitle>
                <InputDiv>
                    <InputType>이름</InputType>
                    <Input value={name} type="text" placeholder="이름을 입력해주세요." onChange={handleNameChange}/>
                </InputDiv>
                <InputDiv>
                    <InputType>이메일</InputType>
                    <Input type="text" placeholder="이름을 입력해주세요."/>
                </InputDiv>
                <InputDiv>
                    <InputType>비밀번호</InputType>
                    <Input type="password" placeholder="이름을 입력해주세요."/>
                </InputDiv>
                <InputDiv>
                    <InputType>한줄 소개</InputType>
                    <Input type="text" placeholder="이름을 입력해주세요."/>
                </InputDiv>
                <CheckDiv>
                    <CheckBox type="checkbox"/>
                    <CheckBoxContent>
                        <Under>이용약관</Under>과
                        <Under>개인정보취급방침</Under>에 동의합니다.</CheckBoxContent>
                </CheckDiv>

                <ButtonDiv>
                    <CancleButton>취소</CancleButton>
                    <RegisterButton>가입</RegisterButton>
                </ButtonDiv>
            </RegisterContainer>

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

const RegisterContainer = styled.div`
    width: auto;
`;
const Title = styled.p `
    font-size: 51px;
    font-weight: bold;

    margin-bottom: 5px;
`;

const SubTitle = styled.p `

    font-size: 19px;

    margin-bottom: 50px;

`;

const InputType = styled.p `
    font-size: 15px;
    margin-bottom: 10px;
    color : #ACB5BD;
`;

const Input = styled.input `
    width: 350px;
    font-size: 19px;
    padding : 8px;
    border : none;
    border-bottom: 1px solid #ACB5BD;
    color : #ACB5BD;
    outline: none;
    &::placeholder{
        color : #ACB5BD;
    }

    &:focus{
        border-bottom: 1px solid #15B886;
        color : #15B886;

        &::placeholder{
            color : #15B886;
        }
    }

    
`;

const InputDiv = styled.div `
    width: auto;
    height : auto;
    margin-bottom: 30px;
    
    &:focus-within ${InputType} {
        color : #15B886;
    }
`;

const CheckDiv = styled.div `
    display: flex;
    align-items: center;
    color : #000000;

    margin-bottom: 70px;
`;

const CheckBox = styled.input `
    margin-right: 10px;
`;

const CheckBoxContent = styled.p `

`;

const Under = styled.a `
    color : #15B886;
`;

const ButtonDiv = styled.div `

`;

const Button = styled.button `
    width: 93px;
    height : 41px;
    border-radius: 20.5px;
    border : none;
    font-size: 20px;
    font-weight: bold;
`
const CancleButton = styled(Button)`
    color : #000000;
    background-color: #DEE2E6;
    margin-right: 10px;
`
const RegisterButton = styled(Button)`


    color : #ffffff;
    background-color: #15B886;
`

export default RegisterPage;