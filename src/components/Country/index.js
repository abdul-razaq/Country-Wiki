import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../../contexts/theme';

import classes from './country.module';

export default function Country({ name, population, region, capital, flag }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={`${classes.country} ${classes.country}--${theme}`}
		>
			<div className={classes.flag}>
				<img src={flag} alt={`Flag for ${name}`} />
			</div>
			<div>
				<h2>{name}</h2>
				<ul>
					<li>
						<span>Population: </span>
						<span>{population}</span>
					</li>
					<li>
						<span>Region: </span>
						<span>{region}</span>
					</li>
					<li>
						<span>Capital: </span>
						<span>{capital}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

Country.propTypes = {
	name: PropTypes.string.isRequired,
	population: PropTypes.string.isRequired,
	region: PropTypes.string.isRequired,
	capital: PropTypes.string.isRequired,
	flag: PropTypes.string.isRequired,
};
