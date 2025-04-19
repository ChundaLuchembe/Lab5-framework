import React, { useState } from "react";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      {}
      <WelcomeComponent name="Chunda" />
    </div>
  );
}
function WelcomeComponent(props) {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <h1>Welcome, {props.name}!</h1>

      <button onClick={toggleMessage}>
        {showMessage ? "Hide Info" : "Show Info"}
      </button>

      {showMessage && (
        <p style={{ marginTop: "10px" }}>
          You’re exploring React! This message is shown using state and props.
        </p>
      )}
    </div>
  );
}
