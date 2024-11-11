import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const categories = [
  {
    name: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Best Sellers",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Collections",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Elevate Your Style</h1>
          <p className={styles.heroSubtitle}>
            Discover our curated collection of premium fashion items.
          </p>
          <Link href="/shop" className={`button ${styles.heroButton}`}>
            Explore Now
          </Link>
        </div>
      </div>
      <div className={styles.featuredCategories}>
        <h2 className={styles.sectionTitle}>Featured Categories</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <div key={category.name} className={styles.categoryCard}>
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
