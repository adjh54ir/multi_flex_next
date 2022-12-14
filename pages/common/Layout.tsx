import { css } from '@emotion/react';
import React from 'react';
import Header from './Header';

type AppLayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
	return (
		<div>
			<Header />
			<main style={{ margin: 20, marginTop: 20, padding: 20 }}>{children}</main>
		</div>
	);
};
export default Layout;
