import React, { Component } from "react";
import styled from "styled-components";
import ToDoItem from "./components/ToDoItem";
import Logo from "./assets/logo.png";

class ToDo extends Component {
  // Comparable to data() in Vue's <script>
  state = {
    list: ["clean the house", "buy milk"],
    currentInput: ""
  };

  // Comparable to Vue's <template>
  render() {
    const { list, currentInput } = this.state;
    return (
      <main {...this.props}>
        <img src={Logo} alt="React logo" />
        <h1>React To Do</h1>
        <ul>
          {list.map((item, index) => (
            <ToDoItem
              key={index}
              item={item}
              handleDelete={this.deleteTodo(index)}
            />
          ))}
        </ul>
        <input
          type="text"
          value={currentInput}
          onChange={this.handleInput}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.createTodo}>+</button>
      </main>
    );
  }

  // Comparable to method in Vue's <script>
  createTodo = () =>
    this.setState(({ list, currentInput }) => ({
      list: [...list, currentInput],
      currentInput: ""
    }));

  deleteTodo = index => () => {
    this.setState(({ list }) => ({
      list: list.filter((item, idx) => idx !== index)
    }));
  };

  handleKeyPress = ({ target: { value }, key }) =>
    value !== "" && key === "Enter" && this.createTodo();

  handleInput = ({ target: { value } }) =>
    this.setState({ currentInput: value });
}

// Comparable to Vue's <style>
export default styled(ToDo)`
  text-align: center;
  border: 1px solid white;
  width: 80vw;
  height: auto;
  box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.5);
  background: #f6f6f6;
  padding: 0 10% 60px;
  margin: 40px auto;
  box-sizing: border-box;

  & img {
    width: 50px;
    position: relative;
    top: 50px;
  }

  & h1 {
    font-weight: 400;
    text-transform: uppercase;
    margin: 70px auto 30px;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & input {
    width: 60%;
    padding: 10px;
    font-size: 1em;
    margin: 10px auto;
    box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.3);
  }

  & > button {
    color: white;
    font-size: 2em;
    height: 46px;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0;
    cursor: pointer;
    background: #73ff73;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #47a947;

    &:hover {
      box-shadow: none;
      margin-left: calc(auto + 1px);
    }
  }
`;
