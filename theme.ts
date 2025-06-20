'use client';

import { createTheme, type MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
	'#ffe9f2',
	'#ffd1e0',
	'#faa1bd',
	'#f66e99',
	'#f2437a',
	'#f02866',
	'#f0185c',
	'#d6084c',
	'#c00043',
	'#a90039',
];

export const theme = createTheme({
	cursorType: 'pointer',
	/* Put your mantine theme override here */
	colors: {
		myColor,
	},
	primaryColor: 'myColor',
	other: {
		/* Put your other theme overrides here */
	},
});
