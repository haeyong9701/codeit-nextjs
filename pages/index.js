import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";
import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  const res = await axios.get("/products");
  const products = res.data.results;

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <div>
      <h1 className={styles.title}>Codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </div>
  );
}
