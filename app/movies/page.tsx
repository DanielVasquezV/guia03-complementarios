import styles from "../page.module.css";
import MoviesGallery from "../../components/MoviesGallery";

export default function MoviesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Galería de Películas</h1>
        <MoviesGallery />
      </div>
    </main>
  );
}
