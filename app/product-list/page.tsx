import styles from "../page.module.css";
import ProductList from "../../components/ProductList";

export default function ProductListPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Tienda Online</h1>
        <p className={styles.subtitle}>Lista de productos con filtro por categoría</p>
        <ProductList />
      </div>
    </main>
  );
}
