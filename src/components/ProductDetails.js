import React from 'react';
import '../styles/ProductDetails.scss';

// 3 options to get access to match
// 1. withRouter
// import { withRouter } from 'react-router-dom';
// 2. useParams
import { useParams } from 'react-router-dom';
// 3. useRouteMatch
// import { useRouteMatch } from 'react-router-dom';



const ProductDetails = (props) => {
  // 2.
  const { productId } = useParams();
  // 3.
  // console.log(props.match);
  // const match = useRouteMatch();

  const products = props.products;

  // 1.
  // console.log(props.match);
  // 2.
  // console.log(productId);
  // 3.
  // console.log(match);

  // 1.
  // const product = products[`${props.match.params.productId}` - 1];
  // 2.
  const product = products[productId - 1];
  // 3.
  // const product = products[`${match.params.productId}` - 1];
  // 4. render in route
  // const product = products[`${props.match.params.productId}` - 1];

  return (
    <div>
      <div className="product-details">ProductDetails</div>
      <div className="product-title">{product.title}</div>
      <div className="product-price">€{product.price.toFixed(2).replace('.', ',')}</div>
      <img className="product-img" src={product.image} style={{width: "200px", height: "auto"}} alt="product-img"></img>
      <div className="product-gender">category: {product.gender}</div>
      <button onClick={props.addOrder.bind(this, product)}>Add</button>
    </div>
  )
}

export default ProductDetails;
// wrap ProductDetails in withRouter to access props.match
// 1.
// export default withRouter(ProductDetails);

