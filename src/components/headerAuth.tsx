import {
	NavbarItem,
	Button,
	Avatar,
	Popover,
	PopoverTrigger,
	PopoverContent
} from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';

export default async function HeaderAuth() {
	const session = await auth();

	let authContent: React.ReactNode;

	if (!session) {
		authContent = null;
	} else if (session?.user) {
		authContent = (
			<Popover placement='left'>
				<PopoverTrigger>
					<Avatar src={session.user.image as string} />
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
