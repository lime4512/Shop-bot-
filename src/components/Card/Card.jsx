import { useState } from 'react'
import './card.scss'
import { Button } from '../Button/Button'
export const Card = ({ product, onRemove, onAdd }) => {
	const [count, setCount] = useState(0)
	const { title, img, price } = product

	const handleAdd = () => {
		setCount(count + 1)
		onAdd(product)
	}
	const handleRemove = () => {
		setCount(count - 1)
		onRemove(product)
	}
	return (
		<div className='card'>
			<span className={count == 0 ? 'countV' : 'countM'}>{count}</span>
			<div className='card_img'>
				<img src={img} alt='' />
			</div>
			<div className='card_content'>
				<p className='card_title'>{title}</p>
				<p className='card_price'>{price} ₽</p>
				{count == 0 ? (
					<Button title={'Добавить'} type={'add'} onClick={handleAdd} />
				) : (
					<div className='card_btn'>
						<Button title={'+'} type={'add'} onClick={handleAdd} />
						<Button title={'-'} type={'remove'} onClick={handleRemove} />
					</div>
				)}
			</div>
		</div>
	)
}
