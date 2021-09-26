import React, { useState } from 'react';
import { ThemeProvider } from '../../contexts/theme';

import classes from './app.module';

export default function App({}) {
	const [theme, setTheme] = useState('light');

	function toggleTheme() {
		setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
	}

	return (
		<ThemeProvider
			value={{
				theme,
				toggleTheme,
			}}
		>
			<main className={classes[theme]}>
				<h1>Welcome to country wiki</h1>
			</main>
		</ThemeProvider>
	);
}
