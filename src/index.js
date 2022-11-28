import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const currentTime = date.getHours();
const currentMinute = date.getMinutes();
let greeting;
if (currentTime < 12) {
  greeting = "It is Morning, You should work hard!";
} else if (currentTime < 18) {
  greeting = "It is Afternoon, you should learn Dutch!";
} else {
  greeting = "It is Night,you should SLEAP!";
}
ReactDOM.render(
  <div>
    <h1 className="heading">Hello Khadijah!</h1>
    <h2 className="greetings">{greeting}</h2>
    <h3 className="nowTime">It is {currentTime + ":" + currentMinute} now.</h3>
  </div>,
  document.getElementById("root")
);
