import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Product {id} 페이지</div>;
};

export default Product;
