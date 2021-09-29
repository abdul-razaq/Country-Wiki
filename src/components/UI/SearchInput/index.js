import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import ThemeContext from '../../../contexts/theme';

import classes from './search_input.module';

export default function SearchInput({ placeholder, onSearch }) {
	const [searchInput, setSearchInput] = useState('');

	const { theme } = useContext(ThemeContext);

	function handleSearch(event) {
		setSearchInput(event.target.value);
	}

	function handleSubmit(event) {
		if (event.key === 'Enter' || event.code === 'Enter') {
			onSearch(searchInput);
		}
	}

	return (
		<div className={`${classes.search} ${classes.search}--${theme}`}>
			<FaSearch />
			<input
				value={searchInput}
				type="search"
				placeholder={placeholder}
				maxLength={100}
				onChange={handleSearch}
				onKeyPress={handleSubmit}
			/>
		</div>
	);
}

SearchInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	onSearch: PropTypes.func.isRequired,
};
