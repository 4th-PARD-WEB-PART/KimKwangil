import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { userInfo } from "../../Atom/Atom";

function RegisterPage() {

    const initUserData = {
        name: "",
        email: "",
        password: "",
        comment : "",
    }

    const [userDataRecoil, setUserDataRecoil] = useRecoilState(userInfo);
    const [userData, setUserData] = useState(initUserData);
    const [isChecked, setIsChecked] = useState(false);  // 체크박스 상태 추가

    // 모든 필드가 입력되고, 체크박스가 체크되었는지 확인하는 함수
    const isFormValid = () => {
        const { name, email, password, comment } = userData;
        return name && email && password && comment && isChecked;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const navigate = useNavigate();
    const handleRegister = () => {
        if (isFormValid()) {
            alert(userData.name + "님 반갑습니다!");
            setUserDataRecoil(userData);
            navigate("/feed");
        }
    }

    return (
        <BaseContainer>
            <RegisterContainer>
                <Title>환영합니다!</Title>
                <SubTitle>기본 회원 정보를 등록해주세요</SubTitle>
                <InputDiv>
                    <InputType>이름</InputType>
                    <Input value={userData.name} name="name" type="text" placeholder="이름을 입력해주세요." onChange={handleInputChange}/>
                </InputDiv>
                <InputDiv>
                    <InputType>이메일</InputType>
                    <Input value={userData.email} name="email" type="text" placeholder="이메일을 입력해주세요." onChange={handleInputChange}/>
                </InputDiv>
                <InputDiv>
                    <InputType>비밀번호</InputType>
                    <Input value={userData.password} name="password" type="password" placeholder="비밀번호를 입력해주세요." onChange={handleInputChange}/>
                </InputDiv>
                <InputDiv>
                    <InputType>한줄 소개</InputType>
                    <Input value={userData.comment} name="comment" type="text" placeholder="자기소개를 입력해주세요." onChange={handleInputChange}/>
                </InputDiv>
                <CheckDiv>
                    <CheckBox type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <CheckBoxContent>
                        <Under>이용약관</Under>과 <Under>개인정보취급방침</Under>에 동의합니다.
                    </CheckBoxContent>
                </CheckDiv>

                <ButtonDiv>
                    <CancleButton onClick={() => setUserData(initUserData)}>취소</CancleButton>
                    <RegisterButton disabled={!isFormValid()} onClick={handleRegister} isFormValid={isFormValid()}>가입</RegisterButton>
                </ButtonDiv>
            </RegisterContainer>
        </BaseContainer>
    );
}

const BaseContainer = styled.div `
    width: 100%;
    height: 100vh;
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
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ACB5BD;
    color: #ACB5BD;
    outline: none;
    &::placeholder {
        color: #ACB5BD;
    }

    &:focus {
        border-bottom: 1px solid #15B886;
        color: #15B886;

        &::placeholder {
            color: #15B886;
        }
    }
`;

const InputDiv = styled.div `
    width: auto;
    height: auto;
    margin-bottom: 30px;
    
    &:focus-within ${InputType} {
        color : #15B886;
    }
`;

const CheckDiv = styled.div `
    display: flex;
    align-items: center;
    color: #000000;
    margin-bottom: 70px;
`;

const CheckBox = styled.input `
    margin-right: 10px;
`;

const CheckBoxContent = styled.p ``;

const Under = styled.a `
    color: #15B886;
`;

const ButtonDiv = styled.div ``;

const Button = styled.button `
    width: 93px;
    height: 41px;
    border-radius: 20.5px;
    border: none;
    font-size: 20px;
    font-weight: bold;
`;

const CancleButton = styled(Button)`
    color: #000000;
    background-color: #DEE2E6;
    margin-right: 10px;

    &:hover{
        background-color: #DEE2E650;
    }
`;

const RegisterButton = styled(Button)`
    color : #000000;
    background-color: ${({ isFormValid }) => (isFormValid ? '#15B886' : '#DEE2E6')};  // 버튼 색상 변경
    cursor: ${({ isFormValid }) => (isFormValid ? 'pointer' : 'not-allowed')};  // 클릭 가능한 상태를 시각적으로 보여줌

    &:hover {
        background-color: ${({ isFormValid }) => (isFormValid ? '#15B88650' : '#DEE2E6')};  // 버튼 색상 변경
    }
`;

export default RegisterPage;
