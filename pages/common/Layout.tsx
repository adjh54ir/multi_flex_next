import { css } from '@emotion/react';
import React from 'react';
import Header from './Header';

const layoutStyle = css`
	margin: 20,
    margin-top: 20,
	padding: 20,
	border: '1px solid #DDD',
`;

type AppLayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
	return (
		<div>
			<Header />
			<div css={{ margin: 20, marginTop: 20, padding: 20 }}>{children}</div>
		</div>
	);
};
export default Layout;
