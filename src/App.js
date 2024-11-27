import React from "react";

function App() {
  
  const clickPop = () => {
    alert("클릭!");
  }
  
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
     }}
    >
    <p>아래 버튼을 클릭해봐</p>
    <button onClick={clickPop}>여기</button>
    </div>
  );
}

export default App;