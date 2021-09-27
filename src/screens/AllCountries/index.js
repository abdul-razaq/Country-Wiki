import React from 'react';

import SearchInput from '../../components/UI/SearchInput';
import DropDown from '../../components/UI/DropDown';

import classes from './all_countries.module';

export default function AllCountries({}) {
	return (
		<div className={`${classes.countries}`}>
			<div className={`${classes.inputs}`}>
				<SearchInput placeholder="Search for a country..." />
				<DropDown
					label="Filter by Region"
					options={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
				/>
			</div>
		</div>
	);
}
