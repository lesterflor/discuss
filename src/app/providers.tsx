'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

interface IProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
	return (
		// some incompatibility issues with using SessionProvider for some packages used in this app
		// <SessionProvider>
		<NextUIProvider>{children}</NextUIProvider>
		// </SessionProvider>
	);
}
