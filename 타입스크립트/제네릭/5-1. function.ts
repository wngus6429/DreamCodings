{
    //! 이런식으로 넘버 스트링 각각 타입마다 다 함수 설정하기는 말이 안되지
    // function checkNotNull(arg:number | null): number {
    //     if(arg == null){
    //         throw new Error("Not valid number");
    //     }
    //     return arg;
    // }
    // const result = checkNotNull(123);
    // console.log(result);
    // checkNotNull(null);

    // T 또는 null을 타입을 받고 T를 다시 리턴한다. 
    // 사용하는 사람이 숫자를 보내면 숫자 보내고 불 보내면 불
    function checkNotNull<T>(arg: T | null): T{
        if(arg == null){
            throw new Error("Not valid number");
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true)
    // 제네릭을 사용하면 사용하는 사람이 어떤 타입인지 정할수 있고 유연하지만 타입이 보장될수 있다.
}