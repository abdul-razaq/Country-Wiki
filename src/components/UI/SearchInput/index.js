import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import classes from './search_input.module';

export default function SearchInput({ placeholder }) {
	return (
		<div className={`${classes.search}`}>
			<FaSearch />
			<input
				type="search"
				placeholder={placeholder}
				maxLength={100}
			/>
		</div>
	);
}

SearchInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
};
