import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../../../contexts/theme';

import classes from './button.module';

export default function Button({ className, onClick, children }) {
	const { theme } = useContext(ThemeContext);

	return (
		<button
			className={`${classes.button} ${classes.button}--${theme} ${className ? className : ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
};
