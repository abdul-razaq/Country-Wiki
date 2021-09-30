import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ScreenContext from '../../contexts/screen';

import classes from './country_details.module';

export default function CountryDetails({ country }) {
	const { switchScreen } = useContext(ScreenContext);

	return (
		<div>
			<button onClick={() => switchScreen()}>Go back</button>
			<h1>Country Details</h1>
		</div>
	);
}

CountryDetails.propTypes = {
	country: PropTypes.object.isRequired,
};
