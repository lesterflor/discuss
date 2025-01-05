'use client';

import Link from 'next/link';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Input,
	Button,
	Avatar,
	Popover,
	PopoverTrigger,
	PopoverContent
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

export default function HeaderAuth() {
	const session = useSession();

	let authContent: React.ReactNode;

	if (session.status === 'loading') {
		authContent = null;
	} else if (session.data?.user) {
		authContent = (
			<Popover placement='left'>
				<PopoverTrigger>
					<Avatar src={session.data.user.image as string} />
				</PopoverTrigger>
				<PopoverContent>
					<div className='p-4'>
						<form action={actions.logOut}>
							<Button type='submit'>Sign Out</Button>
						</form>
					</div>
				</PopoverContent>
			</Popover>
		);
	} else {
		authContent = (
			<>
				<NavbarItem>
					<form action={actions.login}>
						<Button
							type='submit'
							color='secondary'
							variant='bordered'>
							Sign In
						</Button>
					</form>
				</NavbarItem>
				<NavbarItem>
					<form action={actions.login}>
						<Button
							type='submit'
							color='primary'
							variant='flat'>
							Sign Up
						</Button>
					</form>
				</NavbarItem>
			</>
		);
	}

	return authContent;
}
