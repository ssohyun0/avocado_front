import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const BackgroundColor = styled.div`
  background-color: #b4ccdf;
  height: 7vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  flex-direction: row;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right :10px;
  flex-direction: row;
`;

const TextCss = styled.div`
  height: 50%;
  width: 100%;
  color: #ffffff;
  margin-right: 10px;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogout = () => {
    setLoginSuccess(false);
  };
  const goToSign = () => {
    navigate("/SignIn");
  };

  const goToLogIn = () => {
    navigate("/LogIn");
  };

  const goToClubNews = () => {
    navigate("/ClubNews");
  };

  const location = useLocation();
  const loggedIn = location.state?.loggedIn || false;

  if (loggedIn && !loginSuccess) {
    setLoginSuccess(true); // Update loginSuccess state upon successful login
  }

  return (
    <BackgroundColor>
      <LeftWrapper>
        <TextCss onClick={goToClubNews}>Club News</TextCss>
        <TextCss>Security News</TextCss>
        <TextCss>CTF</TextCss>
      </LeftWrapper>
      <RightWrapper>
          {loginSuccess ? (
              <>
                <p> 000님 </p>
                <button onClick={handleLogout}>로그아웃
                </button>
              </>
          ) : (
              <>
                <TextCss onClick={goToSign}>SIGNIN</TextCss>
                <TextCss onClick={goToLogIn}>LOGIN</TextCss>
              </>
          )}
      </RightWrapper>
    </BackgroundColor>
  );
}

export default Header;
