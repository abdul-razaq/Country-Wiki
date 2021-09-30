import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../../../contexts/theme';

import classes from './card.module';

export default function Card({ children, onClick }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={`${classes.card} ${classes.card}--${theme}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

Card.propTypes = {
	onClick: PropTypes.func,
};
