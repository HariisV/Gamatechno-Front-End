import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index() {
  const [valueTodo, setValueTodo] = useState("");
  const [listTask, setListTask] = useState([]);
  const [left, setLeft] = useState(0);
  const [show, setShow] = useState("all");

  useEffect(() => {
    getAllTodo();
  }, []);

  useEffect(() => {
    setListTask([]);
    getAllTodo();
  }, [show]);

  const handleNotify = (data) =>
    toast.success(data, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const addTodo = async () => {
    try {
      const setData = {
        value: valueTodo,
        status: "active",
      };
      await axios.post("api/todo-post", setData);
      getAllTodo();
      setValueTodo("");

      handleNotify("Sukses Menambah Task Baru !");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearComplete = async () => {
    try {
      if (window.confirm("Delete Completed Task ?") === true) {
        const result = await axios.post(`api/todo-clear-completed`);
        handleNotify("Deleted Task Completed !");
        getAllTodo();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClear = async (e) => {
    try {
      const result = await axios.post(`api/todo-delete/${e}`);
      handleNotify("Sukses Menghapus Task !");
      getAllTodo();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteAll = async () => {
    try {
      if (window.confirm("Completed All Task ?") === true) {
        const result = await axios.post(`api/todo-completed-all`);
        handleNotify("All Task Done !");
        setListTask([]);
        getAllTodo();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTodo = async () => {
    try {
      const result = await axios.get(`api/todo/${show}`);
      setListTask(result.data[0]);
      setLeft(result.data[1]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeStatus = async (id, status) => {
    try {
      console.log(id, status);
      const setData = {
        id,
        status: status === "completed" ? "active" : "completed",
      };
      const result = await axios.post(`api/todo-update`, setData);
      if (show !== "all") setListTask([]);
      getAllTodo();

      handleNotify(`Sukses Update Ke ${setData.status} !`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (event) => {
    const theEvent = event || window.event;
    let key;
    if (theEvent.type === "paste") {
      key = event.clipboardData.getData("text/plain");
    } else {
      key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    if (event.key === "Enter") {
      addTodo();
    }
  };
  const handleChange = (e) => {
    setValueTodo(e);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="todoapp">
        <header className="header">
          <h1>Super2Do</h1>
          <input
            className="new-todo"
            placeholder="Input A Task & Enter !"
            value={valueTodo}
            onKeyPress={handleInput}
            onChange={(e) => handleChange(e.target.value)}
          />
        </header>
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onClick={handleCompleteAll}
          />
          <label for="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {listTask.map((e) => (
              <li className={e.status === "completed" ? "completed" : ""}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    // defaultChecked={true}
                    onClick={() => handleChangeStatus(e.id, e.status)}
                    defaultChecked={e.status === "completed" && true}
                  />
                  <label>{e.value}</label>
                  <button
                    className="destroy"
                    onClick={() => handleClear(e.id)}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{left}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <button
                className={show === "all" && "selected"}
                onClick={() => setShow("all")}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={show === "active" && "selected"}
                onClick={() => setShow("active")}
              >
                Active
              </button>
            </li>
            <li>
              <button
                className={show === "completed" && "selected"}
                onClick={() => setShow("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <button className="clear-completed" onClick={handleClearComplete}>
            Clear completed
          </button>
        </footer>
      </section>
      <script src="js/app.js"></script>
    </>
  );
}
