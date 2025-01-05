'use client';

import { NextUIProvider } from '@nextui-org/react';
import { s } from 'framer-motion/m';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface IProvidersProps {
	children: React.ReactNode;
	session: Session | null;
}

export default function Providers({ children, session }: IProvidersProps) {
	return (
		// some incompatibility issues with using SessionProvider for some packages used in this app
		<SessionProvider session={session}>
			<NextUIProvider>{children}</NextUIProvider>
		</SessionProvider>
	);
}
