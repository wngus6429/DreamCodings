type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

// map과 비슷하게 하나와 하나를 연결하고 싶을떄 사용
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

// Capitalize 클릭하면 여러기능 나열된거 나옴.
type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; // 대문자로 변환함 'Cat' | 'Dog'
