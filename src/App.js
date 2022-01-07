import logo from './logo.svg';

import './App.css';

import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home";
import NewListForm from "./components/NewListForm";
import ViewList from './components/ViewList';
import EditList from "./components/EditList";


function App() {
  const [myListsObj, setMyListsObj] = useState({})

  useEffect(() => {
    getMyLists()
  },[])

  function getMyLists() {
    fetch("http://localhost:8000/todoLists")
    .then(resp => resp.json())
    .then(data => setMyListsObj(data))
  }

  useEffect(() => {
    renderMyLists()
  },[myListsObj])

  function renderMyLists() {

  }

  function handleCreateList(title, tasks) {
    const enhancedTasks = tasks.map(task => {
      const taskObj = {taskName: task, completed: false}
      return taskObj
    })
    const listObj = {listName: title, tasks: enhancedTasks}
    postNewList(listObj)
  }

  function postNewList(listObj) {
    const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(listObj)
    }
    fetch("http://localhost:8000/todoLists", postObj)
    .then(resp => resp.json())
    .then(data => setMyListsObj([...myListsObj, data]))
  }

  function handleUpdateList() {
    //patch
    // make sure local copy changed?
  }

  function handleDeleteList() {
    //delete
    // delete frokm local copy
  }
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/newList"}>
          <NewListForm handleCreateList={handleCreateList} />
        </Route>
        <Route path={"/:id/editList"}>
          <EditList handleUpdateList={handleUpdateList} handleDeleteList={handleUpdateList} myListsObj={myListsObj}/>
        </Route>
        <Route path={"/:id"}>
          <ViewList myListsObj={myListsObj}/>
        </Route>
        <Route path={"/"}>
          <Home myListsObj={myListsObj}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
