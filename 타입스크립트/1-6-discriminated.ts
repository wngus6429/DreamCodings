{
  //! function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }
  // printLoginState(state){}
  // success -> body
  // fail -> reason
  //! 위에 공통적인 result라는 프로퍼티를 가지고 활용
  function printLoginState(state: LoginState) {
    //* state.result // success 혹은 fail
    if (state.result === "success") {
      console.log(`🍟${state.response.body}`);
    } else {
      console.log(`🍟${state.reason}`);
    }
  }
}
// Discriminated Union 차별화하는 구별할수 있는
// 유니온 타입에 차별이 되는 이름이 동일한 타입을 둠으로서 간편하게 구분할수 있는것

//* 2023/06/17 복습
//* 2024/04/14 복습
