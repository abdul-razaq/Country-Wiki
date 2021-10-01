import React from 'react';

import classes from './animated_chip.module';

export default function AnimatedChip({ children }) {
	return <div className={classes.animated_chip}>{children}</div>;
}
