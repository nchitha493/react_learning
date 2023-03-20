import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {props.products.map(product => {
            return <ProductItem
            key = {product.id}
            product={product}
              // title='Test'
              // price={6}
              // description='This is a first product - amazing!'
            />
        })}
        {/* <ProductItem
        key = {props.products[0].id}
          products={props.products[0]}
          // title='Test'
          // price={6}
          // description='This is a first product - amazing!'
        /> */}
      </ul>
    </section>
  );
};

export default Products;
