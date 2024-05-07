import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogoImg from "../../assets/img/logo.png";
import ModalComp from "./ModalComp";

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

const BackgroundColor = styled.div`
  background-color: #36567d;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background-color: #ffffff;
  height: 600px;
  width: 500px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 700px) {
    height: 500px;
    width: 350px;
  }
`;

const ArrowButton = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.button`
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
`;

const TermsWrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ToS() {
  const [serviceTermsChecked, setServiceTermsChecked] = useState(false);
  const [privacyTermsChecked, setPrivacyTermsChecked] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [allTermsChecked, setAllTermsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (serviceTermsChecked && privacyTermsChecked) {
      setAllTermsChecked(true);
    } else {
      setAllTermsChecked(false);
    }
  }, [serviceTermsChecked, privacyTermsChecked]);

  const handleAllTermsCheck = () => {
    const newValue = !allTermsChecked;
    setAllTermsChecked(newValue);
    setServiceTermsChecked(newValue);
    setPrivacyTermsChecked(newValue);
  };

  const handleTermsCheck = (term) => {
    if (term === "service") {
      setServiceTermsChecked(!serviceTermsChecked);
    } else if (term === "privacy") {
      setPrivacyTermsChecked(!privacyTermsChecked);
    }
  };
  const handleCloseServiceModal = () => {
    setShowServiceModal(false);
  };

  const handleClosePrivacyModal = () => {
    setShowPrivacyModal(false);
  };

  const goToNickName = () => {
    navigate("/nickname");
  };
  const goToMainHome = () => {
    if (allTermsChecked) {
      navigate("/");
    } else {
      alert("모든 이용약관에 동의해주세요.");
    }
  };
  return (
    <BackgroundColor>
      <Box>
        <LogoWrapper>
          <img
            src={LogoImg}
            alt="로고"
            style={{ width: "100%", height: "100%" }}
          />
        </LogoWrapper>
        <TermsWrapper>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={allTermsChecked}
              onChange={handleAllTermsCheck}
            />
            모든 이용약관 동의
          </CheckboxLabel>
          <hr />
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={serviceTermsChecked}
              onChange={() => handleTermsCheck("service")}
            />
            {"["}필수{"]"} 서비스 이용약관
            <ArrowButton onClick={() => setShowServiceModal(true)}>
              <BsChevronRight />
            </ArrowButton>
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={privacyTermsChecked}
              onChange={() => handleTermsCheck("privacy")}
            />
            {"["}필수{"]"} 개인정보 수집 및 이용 동의
            <ArrowButton onClick={() => setShowPrivacyModal(true)}>
              <BsChevronRight />
            </ArrowButton>
          </CheckboxLabel>
        </TermsWrapper>
        <TextWrapper>
          <Text onClick={goToNickName}>이전</Text>
          <Text onClick={goToMainHome}>다음</Text>
        </TextWrapper>
      </Box>
      {showServiceModal && (
        <ModalComp onClose={handleCloseServiceModal}>
          <div>
            <h2>서비스 이용약관</h2>
            <p style={{ textAlign: "left" }}>
              제 1 장 총칙
              <br />
              제 1 조 (목적) 이 이용약관은 “Pay1oad (이하 "당 사이트")”에서
              제공하는 인터넷 서비스(이하 '서비스')의 가입조건, 당 사이트와
              이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을
              목적으로 합니다.
              <br />
              <br />
              제 2 조 (용어의 정의)
              <br />
              1. "이용자"라 함은 당 사이트에 접속하여 이 약관에 따라 당 사이트가
              제공하는 서비스를 받는 회원 및 비회원을 말합니다.
              <br />
              2. "회원"이라 함은 서비스를 이용하기 위하여 당 사이트에 개인정보를
              제공하여 아이디(ID)와 비밀번호를 부여 받은 자를 말합니다.
              <br />
              3. “비회원”이하 함은 회원으로 가입하지 않고 "Pay1oad"에서 제공하는
              서비스를 이용하는 자를 말합니다.
              <br />
              4. "회원 아이디(ID)"라 함은 회원의 식별 및 서비스 이용을 위하여
              자신이 선정한 문자 및 숫자의 조합을 말합니다.
              <br />
              5. "비밀번호"라 함은 회원이 자신의 개인정보 및 직접 작성한 비공개
              콘텐츠의 보호를 위하여 선정한 문자, 숫자 및 특수문자의 조합을
              말합니다.
              <br />
              <br />
              제 3 조 (이용약관의 효력 및 변경)
              <br />
              1. 당 사이트는 이 약관의 내용을 회원이 알 수 있도록 당 사이트의
              초기 서비스화면에 게시합니다.
              <br />
              다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수
              있습니다.
              <br />
              2. 당 사이트는 이 약관을 개정할 경우에 적용일자 및 개정사유를
              명시하여 현행 약관과 함께 당 사이트의 초기화면 또는 초기화면과의
              연결화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
              <br />
              다만, 회원에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일
              이상의 사전 유예기간을 두고 공지합니다. <br />
              이 경우 당 사이트는 개정 전 내용과 개정 후 내용을 명확하게
              비교하여 이용자가 알기 쉽도록 표시합니다. <br />
              3. 당 사이트가 전항에 따라 개정약관을 공지하면서 “개정일자 적용
              이전까지 회원이 명시적으로 거부의 의사표시를 하지 않는 경우 회원이
              개정약관에 동의한 것으로 봅니다.”라는 취지를 명확하게
              공지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 않은
              경우에는 개정약관에 동의한 것으로 봅니다. <br />
              회원이 개정약관에 동의하지 않는 경우 당 사이트 이용계약을 해지할
              수 있습니다.
              <br />
              <br />
              제 4 조(약관 외 준칙) <br />
              <br />
              1. 이 약관은 당 사이트가 제공하는 서비스에 관한 이용안내와 함께
              적용됩니다. <br />
              2. 이 약관에 명시되지 아니한 사항은 관계법령의 규정이 적용됩니다.{" "}
              <br />
              <br />
              제 2 장 이용계약의 체결
              <br />
              제 5 조 (이용계약의 성립 등)
              <br />
              이용계약은 이용고객이 당 사이트가 정한 약관에 「동의합니다」를
              선택하고, 당 사이트가 정한 회원가입양식을 작성하여 서비스 이용을
              신청한 후, 당 사이트가 이를 승낙함으로써 성립합니다.
              <br />
              <br />
              제 6 조 (회원가입)
              <br />
              서비스를 이용하고자 하는 고객은 당 사이트에서 정한 회원가입양식에
              개인정보를 기재하여 가입을 하여야 합니다.
              <br />
              <br />
              제 7 조 (개인정보의 보호 및 사용)
              <br />
              당 사이트는 관계법령이 정하는 바에 따라 회원 등록정보를 포함한
              회원의 개인정보를 보호하기 위해 노력합니다. <br />
              회원 개인정보의 보호 및 사용에 대해서는 관련법령 및 당 사이트의
              개인정보 보호정책이 적용됩니다. <br />
              다만, 당 사이트 이외에 링크된 사이트에서는 당 사이트의 개인정보
              보호정책이 적용되지 않습니다.
              <br />
              <br />
              제 8 조 (이용 신청의 승낙과 제한) <br />
              1. 당 사이트는 제6조의 규정에 의한 이용신청고객에 대하여 약관에
              정하는 바에 따라 서비스 이용을 승낙합니다. <br />
              2. 당 사이트는 아래사항에 해당하는 경우에 대해서 회원가입을
              승낙하지 아니하거나 이후 사전 통보 없이 취소할 수 있습니다. <br />
              - 회원가입 신청 시 내용을 허위로 기재한 경우
              <br />
              - 기타 규정한 제반사항을 위반하며 신청하는 경우 <br />
              - 다른 사람의 당 사이트 이용을 방해하거나 그 정보를 도용하는 등의
              행위를 하였을 경우 <br />
              - 당 사이트를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우
              <br />
              <br />
              제 9 조 (회원 아이디 부여 및 변경 등)
              <br />
              1. 당 사이트는 이용고객에 대하여 약관에 정하는 바에 따라 자신이
              선정한 회원 아이디를 부여합니다.
              <br />
              2. 회원 아이디는 원칙적으로 변경이 불가하며 부득이한 사유로 인하여
              변경 하고자 하는 경우에는 해당 아이디를 해지하고 재가입해야
              합니다.
              <br />
              3. 회원은 회원가입 시 기재한 개인정보가 변경되었을 경우 온라인으로
              직접 수정할 수 있습니다.
              <br />
              이때 변경하지 않은 정보로 인해 발생되는 문제에 대한 책임은
              회원에게 있습니다.
              <br />
              <br />
              제 3 장 계약 당사자의 의무
              <br />
              제 10 조 ("Pay1oad"의 의무)
              <br />
              1. 당 사이트는 이용고객이 희망한 서비스 제공 개시일에 특별한
              사정이 없는 한 서비스를 이용할 수 있도록 하여야 합니다.
              <br />
              2. 당 사이트는 개인정보 보호를 위해 보안시스템을 구축하며 개인정보
              보호정책을 공시하고 준수합니다. <br />
              3. 당 사이트는 회원으로부터 제기되는 의견이 합당하다고 판단될
              경우에는, 적절한 조치를 취하여야 합니다. <br />
              4. 당 사이트는 전시, 사변, 천재지변, 비상사태, 현재의 기술로는
              해결이 불가능한 기술적 결함 기타 불가항력적 사유 및 이용자의
              귀책사유로 인하여 발생한 이용자의 손해, 손실, 기타 모든 불이익에
              대하여 어떠한 책임도 지지 않습니다.
              <br />
              <br />
              제 11 조 (회원의 의무)
              <br />
              1. 이용자는 회원가입 신청 또는 회원정보 변경 시 실명으로 모든
              사항을 사실에 근거하여 작성하여야 하며, 허위 또는 타인의 정보를
              등록할 경우 일체의 권리를 주장할 수 없습니다.
              <br />
              2. 당 사이트가 관계법령 및 개인정보 보호정책에 의거하여 그 책임을
              지는 경우를 제외하고, 회원에게 부여된 아이디의 비밀번호 관리소홀,
              부정사용 등에 의하여 발생하는 모든 결과에 대한 책임은 회원에게
              있습니다.
              <br />
              3. 회원은 당 사이트 및 제 3자의 지식재산권을 침해해서는 안 됩니다.
              <br />
              4. 이용자는 당 사이트의 운영자, 직원, 기타 관계자를 사칭하는
              행위를 하여서는 안 됩니다.
              <br />
              5. 이용자는 바이러스, 악성코드 등을 제작, 배포, 이용하여서는 아니
              되고, 당 사이트의 승인 없이 광고하는 행위를 하여서는 안 됩니다.
              <br />
              6. 이용자는 당 사이트 및 제 3자의 명예를 훼손하거나 업무를
              방해하거나, 외설적이거나, 폭력적이거나 기타 공서양속에 반하는
              게시물, 쪽지, 메일 등을 게시, 전송, 배포하여서는 안 됩니다.
              <br />
              <br />
              제 4 장 서비스의 이용
              <br />
              제 12 조 (서비스 이용 시간)
              <br />
              1. 회원의 이용신청을 승낙한 때부터 서비스를 개시합니다.
              <br />
              단, 일부 서비스의 경우에는 지정된 일자부터 서비스를 개시합니다.
              <br />
              2. 업무상 또는 기술상의 장애로 인하여 서비스를 개시하지 못하는
              경우에는 사이트에 공시하거나 회원에게 이를 통지합니다.
              <br />
              3. 서비스의 이용은 연중무휴, 1일 24시간을 원칙으로 하며, 서비스
              응대 및 처리 시간은 법정 근무일 근무시간(09:00~18:00, 법정공휴일
              및 주말 제외)으로 합니다.
              <br /> 다만, 당 사이트의 업무상 또는 기술상의 이유로 서비스가 일시
              중지 될 수 있습니다. 이러한 경우 당 사이트는 사전 또는 사후에 이를
              공지합니다.
              <br />
              4. 회원으로 가입한 이후라도 일부 서비스 이용 시 서비스 제공자의
              요구에 따라 특정회원에게만 서비스를 제공할 수 있습니다.
              <br />
              5. 서비스를 일정범위로 분할하여 각 범위별로 이용가능 시간을 별도로
              정할 수 있습니다. 이 경우 그 내용을 사전에 공개합니다.
              <br />
              <br />
              제 13 조 (홈페이지 저작권)
              <br />
              1. 당 사이트가 게시한 본 홈페이지의 모든 콘텐트에 대한 저작권은 당
              사이트에 있습니다.
              <br />
              다만, 게시물의 원저작자가 별도로 있는 경우 그 출처를 명시하며 해당
              게시물의 저작권은 원저작자에게 있습니다.
              <br />
              2. 회원이 직접 게시한 저작물의 저작권은 회원에게 있습니다.
              <br />
              다만, 회원은 당 사이트에 무료로 이용할 수 있는 권리를 허락한
              것으로 봅니다.
              <br />
              3. 당 사이트 소유의 콘텐트에 대하여 제3자가 허락 없이 다른
              홈페이지에 사용 또는 인용하는 것을 금지합니다.
              <br />
              <br />
              제 14 조 (서비스의 변경, 중단))
              <br />
              1. 당 사이트는 기술상/운영상의 필요에 의해 제공하는 서비스의 일부
              또는 전부를 변경하거나 중단할 수 있습니다.
              <br /> 당 사이트의 서비스를 중단하는 경우에는 30일 전에 홈페이지에
              이를 공지하되, 다만 사전에 통지할 수 없는 부득이한 사정이 있는
              경우는 사후에 통지를 할 수 있습니다.
              <br />
              2. 제1항의 경우에 당 사이트가 제공하는 서비스의 이용과 관련하여,
              당 사이트는 이용자에게 발생한 어떠한 손해에 대해서도 책임을 지지
              않습니다.
              <br />
              다만 당 사이트의 고의 또는 중대한 과실로 인하여 발생한 손해의
              경우는 제외합니다.
              <br />
              <br />
              제 5 장 계약 해지 및 이용 제한
              <br />
              제 15 조 (계약 해지)
              <br />
              1. 회원은 언제든지 마이페이지 메뉴 등을 통하여 이용계약 해지
              신청을 할 수 있으며, 당 사이트는 관련법 등이 정하는 바에 따라 이를
              즉시 처리하여야 합니다.
              <br />
              2. 회원이 계약을 해지할 경우, 관련법령 및 개인정보처리방침에 따라
              당 사이트가 회원정보를 보유하는 경우를 제외하고는 해지 즉시 회원의
              모든 데이터는 소멸됩니다.
              <br />
              3. 회원이 계약을 해지하는 경우, 회원이 작성한 게시물(공용게시판에
              등록된 게시물 등)은 삭제되지 아니합니다.
              <br />
              <br />
              제 16 조 (서비스 이용제한))
              <br />
              1. 당 사이트는 회원이 서비스 이용에 있어서 본 약관 및 관련 법령을
              위반하거나, 다음 각 호에 해당하는 경우 서비스 이용을 제한할 수
              있습니다.
              <br />
              - 2년 이상 서비스를 이용한 적이 없는 경우 <br />
              - 기타 정상적인 서비스 운영에 방해가 될 경우 <br />
              2. 상기 이용제한 규정에 따라 서비스를 이용하는 회원에게 사전 통지
              후 서비스 이용을 일시정지 등 제한하거나 이용계약을 해지 할 수
              있습니다. <br /> 단, 불가피한 사유로 사전 통지가 불가능한 경우에는
              그러하지 아니합니다.
              <br />
              <br />
              제 6 장 손해배상 및 기타사항
              <br />
              제 17 조 (손해배상) <br />
              당 사이트는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한
              손해가 발생하더라도 당 사이트가 고의 또는 과실로 인한 손해발생을
              제외하고는 이에 대하여 책임을 부담하지 아니합니다.
              <br />
              <br />
              제 18 조 (관할 법원)
              <br />
              서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 민사
              소송법상의 관할 법원에 제기합니다.
              <br />
              <br />
              제 19 조 (서비스별 이용자 사전 동의 사항과 의무)) 당 사이트에
              ‘기술정보를 제공하는 이용자는 자신의 기술정보에 대한 권리(특허권,
              실용신안권, 디자인권, 상표권 등)를 법적으로 보호받기 위해서 필요한
              조치를 스스로 취하여야 합니다. <br />당 사이트는 이용자의 권리
              보장이나 취득 등을 위한 어떠한 명목의 의무나 책임도 부담하지 않고,
              이를 보장하지 않으며, 이용자 개인의 행위(당 사이트의 서비스 이용
              행위 일체를 포함)로 인한 어떠한 분쟁이나 어떠한 명목의 손실,
              손해에 대해서도 법적 책임을 지지 아니합니다.
              <br />
              <br />
              제 7 장 " Pay1oad" 게시물 운영정책
              <br />
              제 20 조 (운영정책) <br />
              "Pay1oad" 각종 게시물에 대한 운영정책은 방송통신심의위원회의
              정보통신에 관한 심의규정에 기반하며 이를 위반할 경우,
              "단체표준종합정보센터" 운영정책에 의해 관련 게시물은 예고 없이
              삭제, 이동될 수 있으며, 게시자(회원)는 아이디 이용제한 등
              "단체표준종합정보센터" 이용에 제한을 받을 수 있습니다.
              <br />
              <br />
              제 21 조 (게시물 등록) <br />
              게시물은 실명을 통해 등록합니다. <br /> 악성 글 등을 업로드 하실
              경우 게시물 삭제 또는 게시자(회원)의 이용제한 등의 경고 조치가
              가능합니다. <br />
              1. 주민등록번호 도용 타인의 개인정보를 이용한 활동이 발견될 경우,
              해당 회원은 이용에 제한을 받을 수 있으며, 해당 계정은 본인인증
              후에 정상적인 이용이 가능합니다. <br /> 또한 여러 개의 아이디를
              생성하여 허위신고를 하거나, 타인 사칭을 통한 문제 발생 시, 그에
              따른 이용 제한을 받을 수 있습니다.
              <br />
              <br />
              제 22 조 (게시물의 저작권)
              <br />
              1. 게시물은 회원이 서비스를 이용하면서 게재한 글, 사진, 파일, 관련
              링크 및 댓글 등을 말합니다. <br />
              2. 회원이 서비스에 등록하는 게시물로 인하여 본인 또는 타인에게
              손해 및 기타 문제가 발생하는 경우, 회원은 이에 대한 책임을 질 수
              있으며 또한 명예훼손이나 개인정보 유출, 저작권과 같은 법률에
              위배되는 게시물 및 댓글은 관련 법안에 따라 민형사상 처벌을 받을 수
              있으니 이 점 유의하여 주시기 바랍니다. <br />
              <br />
              제 23 조 (게시물 제한규정(삭제 및 이동))
              <br />
              1. 욕설/비속어 및 분란을 조장하는 게시물- 욕설 및 비속어가
              담겨있거나, 연상시키는 내용- 이유 없이 회원 간의 분란을 발생시킬
              여지가 있는 내용의 게시물 또는 댓글
              <br />
              2. 게시판 및 자료실과 관련 없는 게시물- 각 주제 분야별로 나뉘어
              있는 게시판 및 자료실의 주제와 관련 없는 내용
              <br />
              3. 상업성 광고 및 홍보 글에 관한 게시물
              <br />
              4. 개인정보의 유포에 관한 게시물- 타인, 혹은 본인의
              메일주소/실명/사진/전화번호/주민등록번호 등의 개인정보 또는 해당
              정보가 담겨 있는 내용
              <br />
              5. 확인되지 않은 소문의 유포에 관한 게시물- 공개되었을 경우,
              당사자의 권리침해가 우려되는 내용
              <br />
              6. 정치적 견해 차이 및 인종/성별/지역/종교에 대한 차별, 비하하는
              게시물
              <br />
              - 인종/성별/지역/종교에 대한 차별적 발언 또는 비하하는 내용
              <br />
              - 상이한 정치적 견해를 비하하거나 폄하하는 내용
              <br />
              7. 타인을 사칭하거나 범죄행위에 관한 게시물 <br />
              - 공인이나 특정이슈와 관련한 당사자 또는 지인, 주변인 등을
              사칭하여 게시물을 작성하거나, "Pay1oad" 운영자를 사칭하여 작성된
              내용
              <br />
              - 범죄와 관련 있거나 범죄를 유도하는 행위를 포함하는 내용
              <br />
              8. 저작권 위반에 관한 게시물
              <br />
              - 기사, 사진, 동영상, 음원, 영상물 등 저작권에 의해 보호받는
              콘텐츠와 관련된 내용 뉴스의 경우, 기사 내용의 전부 혹은 일부를
              게시하는 경우에는 저작권에 저촉될 수 있기 때문에 링크(URL)만을
              허용합니다.
              <br />
              - 음원, 사진, 동영상 등 해당 자료에 대한 불법공유를 목적으로
              작성한 내용 공유를 목적으로 이메일을 수집하는 행위도 동일하게
              처리됩니다.
              <br />
              9. 악성코드/스파이웨어/혐오감 조성에 관한 게시물
              <br />
              - 악성코드 및 스파이웨어의 유포 및 유도 관련 게시물은 사전경고
              없이 제재를 받을 수 있습니다.
              <br />
              - 시각 및 청각적으로 타인에게 혐오감을 줄 수 있는 게시물은
              사전경고 없이 제재를 받을 수 있습니다.
              <br />
              10. 기타 서비스 운영에 지장을 초래할 수 있는 게시물
              <br />
              <br />
              제 24 조 (이용제한)
              <br />
              1. 게시물 제한규정(3조)에 해당하는 내용을 게재하는 경우
              <br />
              2. 다량의 게시물 등록을 목적으로 의미 없는 제목을 사용하거나,
              반복되는 제목을 사용하여 게재하는 경우
              <br />
              3. 비정상적인 방법으로 게시물을 등록, 조회 및 추천하는 경우 등
              <br />
              <br />
              제 25 조 (게시중단 요청 서비스)
              <br />
              다른 회원의 게시물로 인하여 명예훼손, 저작권 침해 등의 피해를
              입었을 경우, 운영담당자를 통해 해당 게시물에 대한 게시중단을
              요청하실 수 있습니다.
              <br />
              <br />
              [부 칙] (시행일) 이 약관은 2024년 04월 10일부터 적용되며, 종전
              약관은 본 약관으로 대체되며, 개정된 약관의 적용일 이전 가입자도
              개정된 약관의 적용을 받습니다.
            </p>
          </div>
        </ModalComp>
      )}
      {showPrivacyModal && (
        <ModalComp onClose={handleClosePrivacyModal}>
          <div>
            <h2>&#91;필수&#93; 개인정보 수집 및 이용 동의</h2>
            <p style={{ textAlign: "left" }}>
              Pay1oad
              <br />
              <br />
              이용조건, 절차, 회원규칙, 기타 필요한 사항을 규정함을 목적으로
              합니다
              <br />
              <br />
              ① 수집항목 Pay1oad는 회원가입 및 기본적인 서비스 제공을 위한
              필수정보와 추가적인 서비스 제공 등을 위해 필요한 선택정보로
              구분하여 아래와 같은 개인정보를 수집하고 있습니다.
              <br />
              - 필수항목 :이름, 이메일, ID, 비밀번호, 닉네임
              <br />
              - 선택항목 : 해당사항 없음
              <br />
              선택정보를 입력하지 아니하더라도 서비스 이용에 제한은 없으며,
              불가피하게 수집이 필요한 경우 별도의 동의를 받는 등 필요한 조치를
              이행하겠습니다.
              <br />
              <br />
              ② 개인정보의 수집ㆍ이용목적 Pay1oad는 수집한 개인정보를 홈페이지
              서비스 제공을 위한 회원관리 목적으로만 이용하며, 이용목적이 변경될
              경우 별도의 동의를 받는 등 필요한 조치를 이행하겠습니다.
              <br />
              <br />
              ③ 개인정보의 보유ㆍ이용기간 Pay1oad는 이용자의 개인정보를 회원
              탈퇴 시까지만 제한적으로 이용하고 있으며, 이용자가 회원 탈퇴를
              요청하는 경우 해당 이용자의 개인정보는 지체 없이 파기됩니다.
              <br />
              <br />④ 동의 거부권리 안내 개인정보 보호법 제15조에 따라 본
              개인정보 수집ㆍ이용에 대한 동의를 거부할 수 있으나, 이 경우
              회원가입이 제한됩니다.
            </p>
          </div>
        </ModalComp>
      )}
    </BackgroundColor>
  );
}

export default ToS;
