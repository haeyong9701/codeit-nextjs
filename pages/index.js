import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get("/products");
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </div>
  );
}
