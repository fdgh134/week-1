import React, { useState } from "react";
import "./App.css";

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

// function App() {
//   const [dogs, setDogs] = useState(["말티즈"]);

//   function onClickHandler() {
// 	// spread operator(전개 연산자)를 이용해서 dogs를 복사
// 	// 그리고 나서 항목을 추가
//     setDogs([...dogs, "시고르자브르종"]);
//   }

//   console.log(dogs);
//   return (
//     <div>
//       {dogs}
//       <br/>
//       <button onClick={onClickHandler}>버튼</button>
//     </div>
//   );
// }

// function App() {
//   const [number, setNumber] = useState(0);

//   const plusNum = () => {
//     setNumber(number + 1);
//   };

//   const minusNum = () => {
//     setNumber(number - 1);
//   };

//   return (
//     <div>
//       <div>{number}</div>
//       <button onClick={plusNum}>+1</button>
//       <button onClick={minusNum}>-1</button>
//     </div>
//   );
// }

function AppButton(props) {
  const {color, onClick, children} = props
  	if (color)
      return (
      	<button 
        	style={{ background: color, color: "white" }}
      		onClick={onClick}
		>
          {children}
		</button>
      );
  return <button onClick={onClick}>{props.children}</button>;
}

function User(props) {
  return (
    <div className="squareStyle">
      <div>{props.user.age}살 -</div>
      <div>{props.user.name}</div>
      <AppButton color="red" onClick={() => props.userDelete(props.user.id)}>
        삭제하기
      </AppButton>{" "}
      {/* 생성한 버튼 컴포넌트로 변경 */}
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUser = () => {
    // 유저 추가를 위한 함수
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    const userList = users.filter((user) => user.id !== id);
    setUsers(userList);
  }; // 유저 삭제 함수

  return (
    <div className="appStyle">
      <div className="userBox">
        {users.map((user) => {
          return <User user={user} key={user.id} userDelete={deleteUser} />;
        })}
      </div>
      <div className="inputBox">
        <input
          value={name}
          placeholder="이름을 입력해주세요"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          value={age}
          placeholder="나이를 입력해주세요"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <AppButton color="green" onClick={addUser}>추가하기</AppButton>
      </div>
      {/* 생성한 버튼 컴포넌트로 변경 */}
    </div>
  );
}

export default App;
