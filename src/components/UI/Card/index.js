import React, { useContext } from 'react';

import ThemeContext from '../../../contexts/theme';

import classes from './card.module';

export default function Card({ children }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`${classes.card} ${classes.card}--${theme}`}>
			{children}
		</div>
	);
}
