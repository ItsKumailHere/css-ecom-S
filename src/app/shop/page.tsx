"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import styles from "./page.module.css";

const products = [
  {
    id: "1",
    name: "Elegant Timepiece",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    name: "Designer Handbag",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    name: "Luxury Sunglasses",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Shop() {
  return (
    <div className={styles.rootContainer}>
      <h1 className={styles.heading}>Discover Our Collection</h1>
      <div className={styles.gridContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link href={`/shop/${product.id}`}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
                <button className={styles.imageButton}>
                  <Heart className={styles.icon} />
                </button>
              </div>
              <div className={styles.productDetails}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
