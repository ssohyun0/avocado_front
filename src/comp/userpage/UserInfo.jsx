import React from "react";
import "./UserInfo.css";

function UserInfo() {
  const userInfo = {
    id: "user1234",
    joinDate: "2021/01/01",
    rank: "8",
  };

  return (
    <div className="user-info">
      <div className="user-info-section">
        <div className="user-info-title">ID</div>
        <div className="user-info-content">{userInfo.id}</div>
      </div>
      <div className="user-info-section">
        <div className="user-info-title">가입일</div>
        <div className="user-info-content">{userInfo.joinDate}</div>
      </div>
      <div className="user-info-section">
        <div className="user-info-title">CTF </div>
        <div className="user-info-content">{userInfo.rank}개</div>
      </div>
    </div>
  );
}

export default UserInfo;
