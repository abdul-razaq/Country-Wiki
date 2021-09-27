import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import ThemeContext from '../../../contexts/theme';

import classes from './search_input.module';

export default function SearchInput({ placeholder }) {
	const [searchInput, setSearchInput] = useState('');

	const { theme } = useContext(ThemeContext);

	return (
		<div className={`${classes.search} ${classes.search}--${theme}`}>
			<FaSearch />
			<input type="search" placeholder={placeholder} maxLength={100} />
		</div>
	);
}

SearchInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
};
