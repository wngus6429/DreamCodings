{
 //! function: login -> success, fail
  type SuccessState = {
    result:'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result:'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result:'success',
      response: {
        body: 'logged in!',
      },
    };
  }
  // printLoginState(state){}
  // success -> body
  // fail -> reason
  //! 위에 공통적인 result라는 프로퍼티를 가지고 활용
  function printLoginState(state:LoginState){
    state.result // success 혹은 fail
    if(state.result === 'success'){
      console.log(`🍟${state.response.body}`)
    } else {
      console.log(`🍟${state.reason}`)
    }
  }
}