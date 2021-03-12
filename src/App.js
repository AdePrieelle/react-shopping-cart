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
