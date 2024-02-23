import Link from "next/link";
import { getProducts } from "@/service/product";
import MeowArticle from "@/components/MeowArticle";
import girlImage from "../../../public/images/girl.jpg";
import Image from "next/image";

// export const revalidate = 10;

export default async function ProductsPage() {
  // throw new Error();
  //! 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줄 예정
  const products = await getProducts();
  //*  ISR을 사용하면, 서버에서 데이터를 가져와서, 그걸 보여줄 수 있음
  //* 중요하고 의미있는게 아니고, 나중에 랜더링 되어도 좋은건 CSR */
  //* 상품이 중요한거지. 고양이는 그닥. 아래 CSR로 넘겨. 서버 부하 줄여야해 */
  // const res = await fetch("https://meowfacts.herokuapp.com", {
  //   next: { revalidate: 3 }, //? 0으로 하면 SSR로 움직임
  // });
  // const data = await res.json();
  // const factText = data.data[0];
  //! cache: 'no-store' 이것도 SSR처럼 된다.
  //! SSG를 ISR로 이렇게 활용할수 있다.
  //! 값을 0으로 하면 요청할떄마다 바뀜, SSR으로 되는거지
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={girlImage} alt="beauty" height={400} />
      <ul>
        {/* {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))} */}
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
