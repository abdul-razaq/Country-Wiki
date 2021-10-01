import React from 'react'
import PropTypes from 'prop-types';

import AnimatedChip from '../AnimatedChip';

import classes from './chip.module';

export default function Chip({ label, onClick }) {
  return (
		<AnimatedChip>
			<div onClick={onClick} className={classes.chip}>
				<span>{label}</span>
			</div>
		</AnimatedChip>
	);
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
