import React from 'react'
import PropTypes from 'prop-types';

import classes from './chip.module';

export default function Chip({ label, onClick }) {
  return (
		<div onClick={onClick} className={classes.chip}>
			<span>{label}</span>
		</div>
	);
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
