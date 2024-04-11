import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BackgroundColor = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function NewsTemplate() {
  return <BackgroundColor></BackgroundColor>;
}

export default NewsTemplate;
