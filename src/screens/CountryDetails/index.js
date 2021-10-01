import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ScreenContext from '../../contexts/screen';
import ThemeContext from '../../contexts/theme';

import Chip from '../../components/UI/Chip';

import classes from './country_details.module';

export default function CountryDetails({ country }) {
	let {
		name: { common, official, nativeName },
		tld: topLevelDomain,
		currencies,
		capital,
		region,
		subregion,
		languages,
		borders,
		population,
		flags,
	} = country;
	borders = borders.map(border => {
		const {
			name: { common: countryName },
		} = JSON.parse(window.localStorage.getItem('countries')).find(
			country => country.cca3 === border || country.cioc === border,
		);
		return countryName;
	});

	const { switchScreen } = useContext(ScreenContext);
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={`${classes.countryDetails} ${classes.countryDetails}--${theme}`}
		>
			<button onClick={() => switchScreen()}>
				<span>&larr;</span> <span>Back</span>
			</button>
			<div className={classes.details}>
				<div className={classes.flag}>
					<img src={flags.svg} alt={`Flag for ${common}`} />
				</div>
				<div className={classes.description}>
					<h2>{official}</h2>
					<ul>
						<li>
							<span>Native Name: </span>
							<span>{Object.values(nativeName)[0].official}</span>
						</li>
						<li>
							<span>Population: </span>
							<span>{Number(population).toLocaleString()}</span>
						</li>
						<li>
							<span>Region: </span>
							<span>{region}</span>
						</li>
						<li>
							<span>Sub Region: </span>
							<span>{subregion}</span>
						</li>
						<li>
							<span>Capital: </span>
							<span>{capital}</span>
						</li>
						<li>
							<span>Top Level Domain: </span>
							<span>{topLevelDomain.join(', ')}</span>
						</li>
						<li>
							<span>Currencies: </span>
							<span>
								{Object.values(currencies)
									.map(currency => currency.name)
									.join(', ')}
							</span>
						</li>
						<li>
							<span>Languages: </span>
							<span>{Object.values(languages).join(', ')}</span>
						</li>
					</ul>
					<div>
						<span>Border Countries: </span>
						<ul>
							{borders.map(country => (
								<Chip
									key={country}
									label={country}
									onClick={switchScreen.bind(null, country)}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

CountryDetails.propTypes = {
	country: PropTypes.object.isRequired,
};
