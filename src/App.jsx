import './App.scss'
import { useState, useEffect } from 'react'

import { Card } from './components/Card/Card.jsx'
import { Cart } from './components/Cart/Cart.jsx'

import { getData } from './db/ProductDB.js'
const product = getData()

const tg = window.Telegram.WebApp

function App() {
	useEffect(() => {
		tg.ready()
	})

	const [cartItems, setCartItems] = useState([])

	const onAdd = food => {
		const exist = cartItems.find(x => x.id === food.id)
		if (exist) {
			setCartItems(
				cartItems.map(x =>
					x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
				)
			)
		} else {
			setCartItems([...cartItems, { ...food, quantity: 1 }])
		}
	}

	const onRemove = food => {
		const exist = cartItems.find(x => x.id === food.id)
		if (exist.quantity === 1) {
			setCartItems(cartItems.filter(x => x.id !== food.id))
		} else {
			setCartItems(
				cartItems.map(x =>
					x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
				)
			)
		}
	}

	const onCheckout = () => {
		tg.MainButton.text = 'Оплата'
		tg.MainButton.show()
	}
	return (
		<>
			<h1 className='title'>SHOP</h1>
			<Cart cartItems={cartItems} onCheckout={onCheckout} />
			<div className='card_container'>
				{product.map(item => {
					return (
						<Card key={item} product={item} onAdd={onAdd} onRemove={onRemove} />
					)
				})}
			</div>
		</>
	)
}

export default App
