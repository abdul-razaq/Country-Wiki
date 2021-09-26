import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import ThemeContext from '../../contexts/theme';

import classes from './app_bar.module';

export default function AppBar({}) {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<nav className={`${classes.appbar} ${classes.appbar}--${theme}`}>
			<h1>Where in the world?</h1>
			<button onClick={toggleTheme} className={classes.appbar__button}>
				{theme === 'light' ? (
					<FaMoon size="1.2em" title="dark theme moon icon" />
				) : (
					<FaSun size="1.2em" title="light mode sun icon" />
				)}
				<span>{`${theme === 'light' ? 'Dark' : 'Light'} Mode`}</span>
			</button>
		</nav>
	);
}
