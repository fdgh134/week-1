import React, { useState } from "react";

// function App() {
  
//   const clickPop = () => {
//     alert("클릭!");
//   }
  
//   return (
//     <div style={{
//       height: "100vh",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       textAlign: "center",
//      }}
//     >
//     <p>아래 버튼을 클릭해봐</p>
//     <button onClick={clickPop}>여기</button>
//     </div>
//   );
// }

// function App() {
//   const number = 1;

//   return (
//     <div className="App">
//       <p>Hello, React!</p>
//       {/* JSX 내에서 주석은 이렇게 쓴다 */}
//       <p>{number > 10 ? number+'은 10보다 크다': number+'은 10보다 작다'}</p>
//       {/* 삼항연산자 사용! */}
//     </div>
//   );
// }

// function App() {
//   return <GrandFather />;
// }

// function GrandFather() {
//   const name = '홍할배';
//   return <Mother GrandFatherName={name} />;
// }

// function Mother(props) {
//   return <Child GrandFatherName={props.GrandFatherName}/>;
// }

// function Child(props) {
//   return <div>{props.GrandFatherName}</div>;
// }

// function User(props) {
//   return <div>{props.children}</div>;
// }

// function App() {
//   return <User>안녕하세요</User>;
// }

function App() {
  const [dogs, setDogs] = useState(["말티즈"]);

  function onClickHandler() {
	// spread operator(전개 연산자)를 이용해서 dogs를 복사 
	// 그리고 나서 항목을 추가
    setDogs([...dogs, "시고르자브르종"]);
  }

  console.log(dogs);
  return (
    <div>
      {dogs}
      <br/>
      <button onClick={onClickHandler}>버튼</button>
    </div>
  );
}

export default App;