import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  //ref편하게 요소에 접근할 수 있다
  //이 기능은 클래스에서 인스턴스 필드를 사용하는 방법과 유사한 어떤 가변값을 유지하는 데에 편리합니다.
  //useRef는 매번 렌더링을 할 때 동일한 ref 객체를 제공한다는 것입니다.
  // React는 노드가 변경될 때마다 변경된 DOM 노드에 그것의 .current 프로퍼티를 설정할 것입니다.

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    //유저 추가 함수
    event.preventDefault();
    //submit 이벤트가 실행되도록 요청하는 기본적으로 정의된 동작을 중단하도록함 .
    //trim 은 문자열의 양 끝의 앞뒤 공백을 제거한다
    console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    //current 저장된 값을 나타낸다
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      event.preventDefault();
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      //+enteredAge 문자열로 받아온것을 숫자형으로 바꿔준다
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    //추가한 유저를 보내주는 역활을함.
    props.onAddUser(enteredName, enteredUserAge);
    //Dom을 조작한다
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
