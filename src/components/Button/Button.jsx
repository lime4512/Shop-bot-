import './button.scss'
export const Button = ({ title, type, onClick, disable }) => {
	return (
		<button
			className={`btn ${
				(type === 'add' && 'add') ||
				(type === 'remove' && 'remove') ||
				(type === 'checkout' && 'checkout')
			}`}
			disabled={disable}
			onClick={onClick}
		>
			{title}
		</button>
	)
}
