import axios from "@/lib/axios";
import SizeReviewList from "@/components/SizeReviewList";
import Image from "next/image";
import styles from "@/styles/Product.module.css";

export async function getServerSideProps(context) {
  const productId = context.params["id"];
  let product;
  try {
    const res = await axios.get(`/products/${productId}`);
    product = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  const res = await axios.get(`/size_reviews/?product_id=${productId}`);
  const sizeReviews = res.data.results ?? [];

  return {
    props: {
      product,
      sizeReviews,
    },
  };
}

const Product = ({ product, sizeReviews }) => {
  if (!product) return <div>...로딩 중...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <div className={styles.image}>
        <Image fill src={product.imgUrl} alt={product.name} />
      </div>
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
};

export default Product;
