import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { fromImageToUrl, API_URL } from '../utils/urls';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Not Digikala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__row}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(product.image)} />
                </div>
                <div className={styles.product__Col}>
                  {product.name} ${product.price}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  //fetch products
  const products_res = await fetch(`${API_URL}/products/`);
  const products = await products_res.json();
  // return products as props

  return {
    props: {
      products,
    },
  };
}
