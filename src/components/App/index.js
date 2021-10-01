import React, { useState } from 'react';
import { ThemeProvider } from '../../contexts/theme';
import { ScreenProvider } from '../../contexts/screen';

import AppBar from '../AppBar';

import AllCountries from '../../screens/AllCountries';
import CountryDetails from '../../screens/CountryDetails';

import classes from './app.module';

export default function App({}) {
	const [theme, setTheme] = useState('light');
	const [screen, setScreen] = useState('countries');
	const [country, setCountry] = useState(null);

	function toggleTheme() {
		setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
	}

	function switchScreen(countryName) {
		if (countryName) {
			const countries = JSON.parse(window.localStorage.getItem('countries'));
			setCountry(
				countries.find(({ name: { common } }) => common === countryName),
			);
			setScreen('countryDetails');
		} else {
			setScreen('countries');
		}
	}

	return (
		<ScreenProvider
			value={{
				screen,
				switchScreen,
			}}
		>
			<ThemeProvider
				value={{
					theme,
					toggleTheme,
				}}
			>
				<main className={classes[theme]}>
					<AppBar />
					{screen === 'countries' ? (
						<AllCountries />
					) : (
						<CountryDetails country={country} />
					)}
				</main>
			</ThemeProvider>
		</ScreenProvider>
	);
}
