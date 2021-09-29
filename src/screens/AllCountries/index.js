import React, { useState, useEffect, useContext } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import SearchInput from '../../components/UI/SearchInput';
import DropDown from '../../components/UI/DropDown';
import Button from '../../components/UI/Button';
import Country from '../../components/Country';

import ThemeContext from '../../contexts/theme';

import CountryAPI from '../../utils/api';

import classes from './all_countries.module';

export default function AllCountries({}) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [countries, setCountries] = useState([]);
	const [refresh, setRefresh] = useState(false);

	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		setError('');
		setLoading(true);

		let countries;
		countries = JSON.parse(window.localStorage.getItem('countries'));

		if (!countries) {
			(async () => {
				try {
					const data = await new CountryAPI().fetchAllCountries();
					window.localStorage.setItem('countries', JSON.stringify(data));
					setCountries(data);
				} catch (error) {
					setError(
						'Error fetching countries. check internet connection and try again!',
					);
				} finally {
					setLoading(false);
				}
			})();
		} else {
			setCountries(countries);
			setLoading(false);
		}
	}, [refresh]);

	function handleRegionSubmit(region) {
		setLoading(true);
		const regionToSearch = region === 'America' ? 'Americas' : region;
		const countries = JSON.parse(window.localStorage.getItem('countries'));
		setCountries(
			countries.filter(country => country.region === regionToSearch),
		);
		setLoading(false);
	}

	function handleSearch(value) {
		setLoading(true);
		const searchValue = value.toLowerCase();
		const countries = JSON.parse(window.localStorage.getItem('countries'));
		setCountries(
			countries.filter(country => country.name.toLowerCase() === searchValue)
		);
		setLoading(false);
	}

	let content = (
		<div className={classes.countries__list}>
			{countries.map(country => (
				<Country
					key={country.name}
					name={country.name}
					population={Number(country.population).toLocaleString()}
					region={country.region}
					capital={country.capital}
					flag={country.flags.svg}
				/>
			))}
		</div>
	);

	if (loading) {
		content = (
			<div className={classes.loading}>
				<BeatLoader
					loading={true}
					color={theme === 'light' ? '#858585' : '#ffffff'}
					size={30}
				/>
			</div>
		);
	}

	if (error) {
		content = (
			<div className={`${classes.error}`}>
				<p>{error}</p>
				<Button onClick={() => setRefresh(v => !v)}>Try Again!</Button>
			</div>
		);
	}

	return (
		<div className={`${classes.countries}`}>
			<div className={`${classes.inputs}`}>
				<SearchInput
					placeholder="Search for a country..."
					onSearch={handleSearch}
				/>
				<DropDown
					label="Filter by Region"
					options={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
					onSubmitRegion={handleRegionSubmit}
				/>
			</div>
			<div>{content}</div>
		</div>
	);
}
