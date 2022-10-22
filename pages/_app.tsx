import React, { useState } from 'react';
import Layout from './common/Layout';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProps } from 'next/app';

declare module 'react-query/types/react/QueryClientProvider' {
	interface QueryClientProviderProps {
		children?: React.ReactNode;
	}
}

declare module 'react-query/types/react/Hydrate' {
	interface HydrateProps {
		children?: React.ReactNode;
	}
}

function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Layout>
					<Component />
				</Layout>
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</QueryClientProvider>
	);
}

export default App;
