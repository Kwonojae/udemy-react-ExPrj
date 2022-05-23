import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  //유저 추가
  const addUserHandler = (event) => {
    event.preventDefault();
    //submit 이벤트가 실행되도록 요청하는 기본적으로 정의된 동작을 중단하도록함 .
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text" />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
