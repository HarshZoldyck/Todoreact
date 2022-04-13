
import './App.css';
import Header from './Components/Header';
import Todolist from './Components/Todolist';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import Addtodo from './Components/Addtodo';
import { About } from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todoslist") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todoslist"));
  }
  const [todoslist, setTodoslist] = useState(initTodo);
  useEffect(() => {

    localStorage.setItem("todoslist", JSON.stringify(todoslist));

  }, [todoslist])

  const ondelete = (todo) => {
    console.log("deleted smily face of", "todo");
    setTodoslist(todoslist.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }

  const addTodo = (title, desc) => {

    let ssno;
    if (todoslist.length == 0) {
      ssno = 1;
    }
    else {
      ssno = todoslist[todoslist.length - 1].sno + 1;
    }
    const myTodo = {
      sno: ssno,
      title: title,
      desc: desc,
    }
    setTodoslist([...todoslist, myTodo]);
    console.log(myTodo)






  }
  return (<>
    <Router>
      <Header title="To-do List" />

      <Switch>
        <Route exact path="/" render={() => {
          return (<>
            <Addtodo addTodo={addTodo} />
            <Todolist todoslist={todoslist} ondelete={ondelete} />
          </>)
        }}>

        </Route>
        <Route exact path="/about">
          <About />
        </Route>


      </Switch>

      <Footer />
    </Router>
  </>
  );
}

export default App;
