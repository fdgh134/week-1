import React from "react";
import AppButton from "./Button";

function User(props) {
  return (
    <div className="squareStyle">
      <div>{props.user.age}살 -</div>
      <div>{props.user.name}</div>
      <AppButton color="red" onClick={() => props.userDelete(props.user.id)}>
        삭제하기
      </AppButton>
      {/* 생성한 버튼 컴포넌트로 변경 */}
    </div>
  );
}

export default User;