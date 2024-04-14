{
  //! Union Types은 OR 이라고 이해하면됨
  //! 값을 정할수 있는거임.
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down"); //* 타이핑 칠때 밑에 뜸

  //! ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  type TileSize = 8 | 16 | 32;
  const txgg: TileSize = 13;
  const tile: TileSize = 16;

  //! function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
  // function loginyo(id: string, password: string): Promise<LoginState> {
  //     return {
  //       response: {
  //         body: 'logged in!',
  //       },
  //     };
  //   }
  // printLoginState(state){}
  // success -> body
  // fail -> reason

  //! 이렇게 하는건 별로 좋지 않음.
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🍟${state.response.body}`);
    } else {
      console.log(`🍟${state.reason}`);
    }
  }
}

//* 2023/06/17 복습
//* 2024/04/14 복습
