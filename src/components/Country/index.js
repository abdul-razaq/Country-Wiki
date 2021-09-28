import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Card from '../UI/Card';

import classes from './country.module';

export default function Country({ name, population, region, capital, flag }) {
	return (
		<Card>
			<div className={classes.flagContainer}>
				<img src={flag} alt={`Flag for ${name}`} />
			</div>
			<div className={classes.details}>
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
		</Card>
	);
}

Country.propTypes = {
	name: PropTypes.string.isRequired,
	population: PropTypes.string.isRequired,
	region: PropTypes.string.isRequired,
	capital: PropTypes.string.isRequired,
	flag: PropTypes.string.isRequired,
};
