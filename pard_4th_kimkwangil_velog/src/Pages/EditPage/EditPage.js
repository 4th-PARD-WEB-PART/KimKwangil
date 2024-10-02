import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FeedListHeader } from "../FeedPage/Components/FeedListHeader";
import { useRecoilState } from "recoil";
import { userInfo } from "../../Atom/Atom";

function EditPage() {
    const [userDataRecoil, setUserDataRecoil] = useRecoilState(userInfo);
    const [userData, setUserData] = useState(userDataRecoil);
    const [initialData, setInitialData] = useState(userData); // 초기 데이터 저장
    const [isModified, setIsModified] = useState(false); // 수정 여부 상태

    useEffect(() => {
        // 현재 데이터와 초기 데이터를 비교하여 수정 여부 확인
        const isDataChanged = 
            userData.name !== initialData.name || 
            userData.email !== initialData.email ||
            userData.password !== initialData.password || 
            userData.comment !== initialData.comment;

        setIsModified(isDataChanged);
    }, [userData, initialData]);

    const isFormValid = () => {
        const { name, email, password, comment } = userData;
        return name && email && password && comment;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const navigate = useNavigate();
    const handleRegister = () => {
        if (isFormValid() && isModified) {
            if (window.confirm("수정하시겠습니까?")) {
                setUserDataRecoil(userData);
                navigate("/feed");
            }
        }
    };

    const handleCancle = () => {
        if (window.confirm("수정을 취소하시겠습니까?")) {
            navigate("/feed");
        }
    };

    return (
        <BaseContainer>
            <FeedListHeader/>
            <RegisterContainer>
                <Title>회원정보 수정</Title>
                <SubTitle>회원 정보를 수정해주세요</SubTitle>
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

                <ButtonDiv>
                    <CancleButton onClick={handleCancle}>취소</CancleButton>
                    <RegisterButton disabled={!isFormValid() || !isModified} onClick={handleRegister} isFormValid={isFormValid() && isModified}>수정</RegisterButton>
                </ButtonDiv>
            </RegisterContainer>
        </BaseContainer>
    );
}

const BaseContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RegisterContainer = styled.div`
    width: auto;
    margin: 40px;
`;

const Title = styled.p`
    font-size: 51px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const SubTitle = styled.p`
    font-size: 19px;
    margin-bottom: 50px;
`;

const InputType = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    color: #ACB5BD;
`;

const Input = styled.input`
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

const InputDiv = styled.div`
    width: auto;
    height: auto;
    margin-bottom: 30px;
    
    &:focus-within ${InputType} {
        color: #15B886;
    }
`;

const ButtonDiv = styled.div``;

const Button = styled.button`
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
    cursor: pointer;

    &:hover {
        background-color: #DEE2E650;
    }
`;

const RegisterButton = styled(Button)`
    color: #000000;
    background-color: ${({ isFormValid }) => (isFormValid ? '#15B886' : '#DEE2E6')};  // 버튼 색상 변경
    cursor: ${({ isFormValid }) => (isFormValid ? 'pointer' : 'not-allowed')};  // 클릭 가능한 상태를 시각적으로 보여줌

    &:hover {
        background-color: ${({ isFormValid }) => (isFormValid ? '#15B88650' : '#DEE2E6')};  // 버튼 색상 변경
    }
`;

export default EditPage;
