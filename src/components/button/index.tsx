import React from 'react';

const Button = ({ title, onClick }: any) => {
	return <button onClick={onClick}>{title}</button>;
};

export default Button;
