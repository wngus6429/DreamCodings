import MeowArticle from "@/components/MeowArticle";
import { getProducts, Product } from "../service/product";
import Link from "next/link";

type Props = {
  products: Product[];
};
// 12버전 에서는 클라이언트 컴포넌트, 서버 이런거 생각할 필요없음.
// 페이지컴포넌트는 클라이언트 사이드에서 실행이 될거임.
// nextjs가 자동으로 돌아다니면서 정적인데이터를 모아서 프리랜더링된 html 
// 페이지를 만들겟지만, 이벤트 처리하는거나 useEffect등등은 무조건 다 클라이언트에서 동작하고
export default function SSGPage({ products }: Props) {
  return (<>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
);}
// 여기서 console.log 찍어도 브라우저에서는 안보임.
// 아래의 props를 위에 다가 넘겨준다.
export async function getStaticProps() {
  const products = await getProducts();
  console.log("products", products);
  return {
    props: { products },
    revalidate: 10,
  };
}
