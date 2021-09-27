import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../../../contexts/theme';

import classes from './dropdown.module';

export default function DropDown({ label, options }) {
	const [title, setTitle] = useState(label);
	const [showDropdown, setShowDropdown] = useState(false);

	const { theme } = useContext(ThemeContext);

	function toggleDropdown() {
		setShowDropdown(v => !v);
	}

	function onSelectRegion(region) {
		console.log(region);
		setTitle(region);
		setShowDropdown(false);
	}

	return (
		<div className={`${classes.dropdown} ${classes.dropdown}--${theme}`}>
			<div className={`${classes.select}`} onClick={toggleDropdown}>
				<span>{title}</span>
				<span>{showDropdown ? '\u25B2' : '\u25BC'}</span>
			</div>
			{showDropdown && (
				<ul className={`${classes.options}`}>
					{options.map(option => (
						<li key={option} onClick={onSelectRegion.bind(null, option)}>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

DropDown.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
