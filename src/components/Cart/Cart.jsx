import './cart.scss'
import { Button } from '../Button/Button'
export const Cart = ({ cartItems, onCheckout }) => {
	const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
	return (
		<div className='cart_container'>
			{cartItems.length != 0 ? (
				<div className='cart_content'>
					<p>Общая цена: {totalPrice} ₽</p>
					<Button
						title='Оплата'
						disable={true}
						type='checkout'
						onClick={onCheckout}
					/>
				</div>
			) : (
				<p className='card_void'>В корзине пусто!!!</p>
			)}
		</div>
	)
}
