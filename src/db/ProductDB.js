import pizzaImg from '/img/pizza.png'
import burgerImg from '/img/burger.png'
import cocaImg from '/img/coca.png'
import saladImg from '/img/salad.png'
import waterImg from '/img/water.png'
import iceCreamImg from '/img/icecream1.png'
import kebabImg from '/img/kebab.png'
import RojImg from '/img/icecream.png'

export function getData() {
	return [
		{ id: 1, title: 'Бургер', price: '140', img: burgerImg },
		{ id: 2, title: 'Кока-Кола', price: '100', img: cocaImg },
		{ id: 3, title: 'Рожок', price: '60', img: RojImg },
		{ id: 4, title: 'Мороженное', price: '170', img: iceCreamImg },
		{ id: 5, title: 'Кебаб', price: '200', img: kebabImg },
		{ id: 6, title: 'Пицца', price: '300', img: pizzaImg },
		{ id: 7, title: 'Салат', price: '250', img: saladImg },
		{ id: 8, title: 'Вода', price: '50', img: waterImg },
	]
}
