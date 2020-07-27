import React from 'react';

const Button = ({ title, onClick, disabled = false }: any) => {
	return (
		<button onClick={onClick} disabled={disabled}>
			{title}
		</button>
	);
};

export default Button;
