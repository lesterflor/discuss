import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/app/providers';
import Header from '@/components/header';
import { auth } from '@/auth';

export const metadata: Metadata = {
	title: 'Discuss App',
	description: 'Forum app using NextJS, NextAuth, React and Prisma'
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<div className='container mx-auto px-4 max-w-6xl'>
					<Providers>
						<Header />
						{children}
					</Providers>
				</div>
			</body>
		</html>
	);
}
