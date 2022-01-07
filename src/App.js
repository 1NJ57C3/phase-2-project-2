import logo from './logo.svg';

import './App.css';

import React, { useEffect, useState } from "react";

import Home from "./components/Home";
import NewListForm from "./components/NewListForm";
import ViewList from "./components/ViewList";


function App() {
  // tasks State => [ { list1: [task1,task2,task3] } ,list2,list3]
  const [taskLists, setTaskLists] = useState([])

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home />
      <NewListForm taskLists={taskLists} setTaskLists={setTaskLists} />
      <ViewList taskLists={taskLists} />
    </div>
  );
}

export default App;
