import { Product } from "../../../services/products";
import css from "./ProductList.module.css";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={css.productList}>
      <ul className={css.list}>
        {products.map((product) => {
          const discountedPrice = product.price * 0.9;

          return (
            <li key={product._id} className={css.item}>
              <article className={css.card}>
                <div className={css.imageWrapper}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={css.image}
                  />
                  {product.is10PercentOff && (
                    <span className={css.badge}>-10%</span>
                  )}
                </div>

                <div className={css.content}>
                  <h3 className={css.title}>{product.name}</h3>

                  <p className={css.category}>{product.category}</p>

                  <div className={css.meta}>
                    <span>Size: {product.size}</span>
                    <span>⭐ {product.popularity}</span>
                  </div>

                  <div className={css.priceBlock}>
                    {product.is10PercentOff ? (
                      <>
                        <span className={css.oldPrice}>
                          ${product.price.toFixed(2)}
                        </span>
                        <span className={css.price}>
                          ${discountedPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className={css.price}>
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
