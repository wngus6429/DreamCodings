{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log('loading');
        break;
      case 'success':
        console.log(`😃${state.response.body}`);
        // break;
      case 'fail':
        console.log(`😱${state.reason}`); // 앞에 break 때문에 에러뜸
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }
}

// 20230617 복습
