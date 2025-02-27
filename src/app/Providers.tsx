'use client';

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import {
	isServer,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import { Notifications } from '@mantine/notifications';
import type { ReactNode } from 'react';
import { ModalsProvider } from '@mantine/modals';

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				// With SSR, we usually want to set some default staleTime
				// above 0 to avoid refetching immediately on the client
				staleTime: 60 * 1000,
				refetchInterval: 5000,
				refetchIntervalInBackground: false,
			},
		},
	});
}

let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
	if (isServer) {
		// Server: always make a new query client
		return makeQueryClient();
	} else {
		// Browser: make a new query client if we don't already have one
		// This is very important, so we don't re-make a new client if React
		// suspends during the initial render. This may not be needed if we
		// have a suspense boundary BELOW the creation of the query client
		if (!browserQueryClient) {
			browserQueryClient = makeQueryClient();
		}
		return browserQueryClient;
	}
}

export default function Providers({ children }: { children: ReactNode }) {
	// NOTE: Avoid useState when initializing the query client if you don't
	//       have a suspense boundary between this and the code that may
	//       suspend because React will throw away the client on the initial
	//       render if it suspends and there is no boundary
	const queryClient = getQueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<MantineProvider forceColorScheme="dark" theme={theme}>
					<Notifications position="top-center" autoClose={1000} />
					<ModalsProvider>{children}</ModalsProvider>
				</MantineProvider>
			</QueryClientProvider>
		</>
	);
}
