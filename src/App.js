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
  const [reGetToggle, setReGetToggle] = useState(false)

  useEffect(() => {
    getMyLists()
  },[reGetToggle])

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
    const enhancedTasks = tasks.map((task, i) => {
      const taskObj = {id: i+1, taskName: task, completed: false}
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

  function handleUpdateList(listObj) {
    const patchObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(listObj)
    }
    fetch(`http://localhost:8000/toDoLists/${listObj.id}`, patchObj)
    .then(setReGetToggle(!reGetToggle))
  }

  function handleDeleteList(id) {
    fetch(`http://localhost:8000/toDoLists/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setMyListsObj(myListsObj.filter(obj => obj.id !== parseInt(id)))
    })
  }

  
  return (
    <div className="App">
      <div className="innerApp">
        <Header />
        <Switch>
          <Route path={"/newList"}>
            <NewListForm handleCreateList={handleCreateList} />
          </Route>
          <Route path={"/:id/editList"}>
            <EditList handleUpdateList={handleUpdateList} handleDeleteList={handleDeleteList} myListsObj={myListsObj} />
          </Route>
          <Route path={"/:id"}>
            <ViewList myListsObj={myListsObj} />
          </Route>
          <Route path={"/"}>
            <Home myListsObj={myListsObj} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
