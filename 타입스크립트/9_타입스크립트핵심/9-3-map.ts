{
  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  // 이걸로 인자로 던진 타입을 Optional로 만들어준다.
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
    // T의 값을 하나하나 뽑아서 P? 하고 T[P]로 T의 값을 풀어냄
  };

  // 이걸로 인자로 던진 타입을 ReadOnly로 만들어준다.
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;

  const videoOp: VideoOptional = {
    title: "hi",
    author: "park",
  };
  console.log(videoOp);

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  video.author = "바꿀려는데 에러남";

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  // 원래의 타입을 써도 되고, Null을 써도되고
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  // 다른 형태로 변환
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
