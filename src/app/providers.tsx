'use client';

import { NextUIProvider } from '@nextui-org/react';

interface IProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
