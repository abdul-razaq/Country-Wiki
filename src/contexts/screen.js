import React from 'react';

const ScreenContext = React.createContext({
	screen: 'countries',
	switchScreen: () => {},
});

export const ScreenProvider = ScreenContext.Provider;
export const ScreenConsumer = ScreenContext.Consumer;

export default ScreenContext;
