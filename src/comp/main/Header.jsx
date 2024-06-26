import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api";

const BackgroundColor = styled.div`
  background-color: #b4ccdf;
  padding: 10px 0;
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
  margin-right: 10px;
  flex-direction: row;
`;

const TextCss = styled.div`
  height: 50%;
  width: 100%;
  color: #ffffff;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  height: 50%;
  width: 100%;
  color: #000000;
  margin-right: 10px;
  margin-left: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const loggedIn = location.state?.loggedIn || false;
    if (loggedIn) {
      setLoginSuccess(true);
      const usernameFromState = location.state?.username || "";
      setUserName(usernameFromState);
    } else {
      setLoginSuccess(false);
      setUserName("");
    }
  }, [location.state]);

  const handleLogout = async () => {
    try {
      console.log("로그아웃 버튼 클릭");
      await axios.post("auth/signout");
      setLoginSuccess(false);
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
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

  const goToUserPage = () => {
    navigate("/UserPage", { state: { loggedIn: true, username: userName } });
  };

  const handleSearch = () => {
    console.log("검색 버튼 클릭");
    // Implement your search functionality here
  };

  return (
    <BackgroundColor>
      <LeftWrapper>
        <TextCss onClick={goToClubNews}>Club News</TextCss>
        <TextCss>Security News</TextCss>
        <TextCss>CTF</TextCss>
      </LeftWrapper>
      <SearchContainer>
        <input
          style={{ padding: "7px", borderRadius: "15px", border: "none" }}
          // style="adding: 7px;
          // border: navajowhite;
          // border-radius: 15px;"
          type="search"
          placeholder="웹사이트 검색..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          type="submit"
          style={{ display: "none" }}
          onClick={handleSearch}
        >
          검색
        </Button>
      </SearchContainer>
      <RightWrapper>
        {loginSuccess ? (
          <>
            <TextCss onClick={goToUserPage}> {userName} 님 </TextCss>
            <Button onClick={handleLogout}>로그아웃</Button>
          </>
        ) : (
          <>
            <TextCss onClick={goToSign}>SIGN IN</TextCss>
            <TextCss onClick={goToLogIn}>LOG IN</TextCss>
          </>
        )}
      </RightWrapper>
    </BackgroundColor>
  );
};

export default Header;
