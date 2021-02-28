import React, { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
	const [order, setOrder] = useState([]);

	const addOrder = (newOrderItem) => {
		const clonedOrder = [...order];
		const clonedNewOrderItem = Object.assign({}, newOrderItem);

		// check if the same item with the same size is already in the cart
		// returns -1 if not found, else returns the index
		const findIndexOfSameProductItem = (clonedOrder, clonedNewOrderItem) => {
			const index = clonedOrder.findIndex((clonedOrderItem) => (clonedOrderItem.id === clonedNewOrderItem.id && clonedOrderItem.size === clonedNewOrderItem.size));
			return index;
		}

		const index = findIndexOfSameProductItem(clonedOrder, clonedNewOrderItem);

		const addNewOrderItem = (clonedNewOrderItem) => {
			clonedNewOrderItem.quantity = 1;
			setOrder(oldOrder => [...oldOrder, clonedNewOrderItem]);
		}

		const updateQuantityOrderItem = (clonedOrder, index) => {
			clonedOrder[index].quantity += 1;
			setOrder(clonedOrder);
		}

		// if the item is not in the cart yet set the quantity to 1 and add it to the order state
		if (index === -1) {
			addNewOrderItem(clonedNewOrderItem);
		} else {
			// if the item is already in the cart add 1 to the quantity of the item in the order state
			updateQuantityOrderItem(clonedOrder, index);
		}
	}

	const getIndexOfOrderItem = (e) => {
		return (e.target.id);
	}

	const incrementQuantityOrderItem = (e) => {
		const indexOfOrder = getIndexOfOrderItem(e);
		const clonedOrder = [...order];
		clonedOrder[indexOfOrder].quantity += 1;
		setOrder(clonedOrder);
	}

	const decrementQuantityOrderItem = (e) => {
		const indexOfOrder = getIndexOfOrderItem(e);
		const clonedOrder = [...order];
		if (clonedOrder[indexOfOrder].quantity > 1) {
			clonedOrder[indexOfOrder].quantity -= 1;
			setOrder(clonedOrder);
		}
	}

	const deleteOrderItem = (e) => {
		const indexOfOrder = getIndexOfOrderItem(e);
		const clonedOrder = [...order];
		clonedOrder.splice(indexOfOrder, 1);
		setOrder(clonedOrder);
	}

	const getSubtotalAmountOfProducts = () => {
		let subtotalAmountOfProducts = 0;
  	order.map(order => (
    	subtotalAmountOfProducts += order.quantity
  	));
		return subtotalAmountOfProducts;
	}

	const subtotalAmountOfProducts = getSubtotalAmountOfProducts();

	const formatPriceValue = (price) => {
		return (`€${price.toFixed(2).replace('.', ',')}`);
	}

  return (
    <div className="app">
			<Navbar 
				order={order}
				subtotalAmountOfProducts={subtotalAmountOfProducts}
			/>
			<div className="app-content">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/shop">
						<Shop 
							addOrder={addOrder}
							formatPriceValue = {formatPriceValue}
						/>
					</Route>
					<Route exact path="/cart">
						<Cart 
							order={order} 
							incrementQuantityOrderItem={incrementQuantityOrderItem}
							decrementQuantityOrderItem={decrementQuantityOrderItem}
							deleteOrderItem={deleteOrderItem}
							subtotalAmountOfProducts={subtotalAmountOfProducts}
							formatPriceValue = {formatPriceValue}
						/>
					</Route>
				</Switch>
			</div>
    </div>
  );
}

export default App;


/*
Pseudocode React Shopping Cart Project:


1. 	- should have at least two routers.

2.	- component for Navbar
	  - component for Home page
	  - component for Shop page, routes with <Navbar /> by default 
	    use <Switch> to route to ShopDetails by default 
	    and ProductDetails when clicked on a product
	  - component for ShopDetails
	  - component for ProductDetails
	  - component for ShoppingCart items and total price

3.	- show navbar on both pages (always route the navbar)

4.	- add few images of information for the hompage, doesn't matter much,
	  - main goal is setting up the shopping cart, homepage is practice for routing

5.	- user should see a sticky bar (it can be just a top section aswell)
	    which displays the number of items currently in the cart. 
	    (top right icon with number absolute in circle of amount of products in cart)
	  - should also have a button next to it where you can go to the cart 
	    to checkout and pay (however we are not going to implement this logic here)
	    (in ShoppingCart component add checkout button, with no logic)

6.	- build individual card items for each of your products.
	  - display an input field on it, which lets the user manually type in 
	    how many items he or she wants to buy 
	    (display this on the ProductDetails or ShoppingCart component 
	    to adjust quantity and update total amount)
	  - also add an increment and decrement button next to it for fine-tuning.
  	- display title for each product as well as an "Add To Cart" button

	  - product
	    {
		  productId: 1,
		  title: "..",
		  price: "..",
		  category: "..",
		  description: "..",
		  image: ".."
	    }
	  - display image, title and price for Shop component products
	  - Use nested routes for /shop and /shop/:productID see csstricks article react-router-4
	  - Link to "{props.match.path(or url)/:productId}" ProductDetails components when clicking on a product in Shop components
	  - Inside ProductDetails display title, image, price, add to bag button, description

7.	- Once a user has submitted their order (setOrder), 
	    the amount on the cart itself should adjust (with useEffect? [orders])

8.	- style the website

9.	- push project to GitHub





Steps: 

1. 	- Create navbar with links to home, shop and ShoppingCart, showcase navbar always

2. 	- Create components Home, Shop with nested routes to ShopDetails and ProductDetails

3.	- Create an array with objects of products

4.	- return those products in ShopDetails

5.	- return only a specific object from the array in ProductDetails based on props.match.params.productId

6.	- add an [orders, setOrders] = useState([]) with in app.js 
	    which can be changed inside ProductDetails(props) add to cart (push to array setOrders)
  	- when orders are changing, use an useEffect to 
	    update the amount of items in shopping cart in the Navbar component

7.	- display all orders (props.orders) its: title, image and price in ShoppingCart component
	  - add an [quantityOders, setQuantityOrders] = useState ({props.orders} + added quantity as a key/value)
	  - add functionality to update quantity or orders to new amount and setQuantityOrders to new amount)
	  - display order summary, Subtotal(amount of items in {props.orders}): Subtotal += {for each order props.order.price * quantity},
	    shipping costs, estimated total and a button for checkout

*/
