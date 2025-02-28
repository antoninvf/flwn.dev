import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import 'styles/globals.scss';
import React, { type ReactNode } from 'react';
import localFont from 'next/font/local';

const pixellari = localFont({
	src: '..//../public/fonts/pixellari.ttf',
	display: 'auto',
});

const alagard = localFont({
	src: '..//../public/fonts/alagard.ttf',
	display: 'auto',
});

import Providers from './Providers';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'flwn.dev',
	description: 'my personal silly little website',
	twitter: {
		images: 'https://flwn.dev/flwn.png',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript forceColorScheme="dark" defaultColorScheme="dark" />
				<link rel="android-chrome" href="/favicon/android-chrome-192x192.png" />
				<link rel="android-chrome" href="/favicon/android-chrome-512x512.png" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body>
				<main className={pixellari.className}>
					<Providers>{children}</Providers>
				</main>
			</body>
		</html>
	);
}
