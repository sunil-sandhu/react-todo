import React from "react";
import styled from "styled-components";

// Comparable to Vue's <template>
function ToDoItem({ className, item, handleDelete }) {
  return (
    <li className={className}>
      <p>{item}</p>
      <button onClick={handleDelete}>-</button>
    </li>
  );
}

// Comparable to Vue's <style>
export default styled(ToDoItem)`
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    width: 90%;
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 1px 1px 1px lightgrey;
    padding: 12px;
    margin-right: 10px;
  }

  & button {
    text-align: center;
    width: 30px;
    padding: 5px;
    height: 30px;
    cursor: pointer;
    background: #ff7373;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #c70202;
    color: white;
    font-size: 18px;
    margin-right: 5px;

    &:hover {
      box-shadow: none;
      margin-top: 1px;
      margin-left: 1px;
    }
  }
`;
