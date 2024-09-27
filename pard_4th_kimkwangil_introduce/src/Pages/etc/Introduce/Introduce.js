import "./Introduce.css"

function Introduce() {
    return (
         <div className="BaseContainer">
            <div className="InfoContainer_top">
                <div className="IntroParagraph">
                    <p>안녕하세요!</p>
                    <p>제 이름은 <span>김광일</span> 입니다.</p>
                    <p>PARD 4기 <span>웹파트</span> 여러분 환영해요!</p>
                </div>
                <img src="/Img/Profile.png" className="ProfileImg"/>
            </div>
            <a href="#infoContainerMain"><img src="/Img/Arrow.png" className="PageDownImg"/></a>

            <div className="InfoContainer_main" id="infoContainerMain">
                <div className="RowBox">
                    <h1 className="SectionTitle">About Me</h1>
                </div>
                <hr className="Hr"/>
                <div className="RowBox">
                    <p className="Title">MBTI</p>
                    <p className="Content">ISFJ</p>
                </div>
                <div className="RowBox">
                    <p className="Title">GOAL</p>
                    <p className="Content">근본 웹파트 4기 모두와 친해지기</p>
                </div>
                <div className="RowBox">
                    <p className="Title">Phone</p>
                    <p className="Content">010-5634-6683</p>
                </div>
                <div className="RowBox">
                    <p className="Title">LIKE</p>
                    <p className="Content">KBO (KIA)</p>
                </div>
                <div className="RowBox">
                    <p className="Title">INSTAR</p>
                    <p className="Content">kim_pangil</p>
                </div>
            </div>
        </div>
    )
}

export default Introduce;