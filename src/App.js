import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";

// const DUMMY_DATA = [
//   {
//     id: "e1",
//     title: "Cook some dinner",
//     tag: "Home",
//     date: new Date(2023, 5, 1),
//   },
//   {
//     id: "e2",
//     title: "Make an annual report",
//     tag: "Work",
//     date: new Date(2023, 6, 12),
//   },
//   {
//     id: "e3",
//     title: "Lunch with Molly",
//     tag: "Fun",
//     date: new Date(2023, 5, 2),
//   },
//   {
//     id: "e4",
//     title: "Call a plumber",
//     tag: "Other",
//     date: new Date(2023, 5, 21),
//   },
// ];

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
